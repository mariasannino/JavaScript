(() => {
  "use strict";
  class e {
    constructor(e, t) {
      (this.fallbackText = t),
        (this.contentTemplateEl = document.getElementById(e)),
        (this.modalTemplateEl = document.getElementById("modal-template"));
    }
    show() {
      if ("content" in document.createElement("template")) {
        const e = document.importNode(this.modalTemplateEl.content, !0);
        (this.modalElement = e.querySelector(".modal")),
          (this.backdropElement = e.querySelector(".backdrop"));
        const t = document.importNode(this.contentTemplateEl.content, !0);
        this.modalElement.appendChild(t),
          document.body.insertAdjacentElement("afterbegin", this.modalElement),
          document.body.insertAdjacentElement(
            "afterbegin",
            this.backdropElement
          );
      } else alert(this.fallbackText);
    }
    hide() {
      this.modalElement &&
        (document.body.removeChild(this.modalElement),
        document.body.removeChild(this.backdropElement),
        (this.modalElement = null),
        (this.backdropElement = null));
    }
  }
  class t {
    constructor(e) {
      this.render(e);
    }
    render(e) {
      if (!ol) return void alert("could not load the library");
      console.log("Coordinates:", e),
        (document.getElementById("map").innerHTML = "");
      const t = new ol.Map({
          target: "map",
          layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
          view: new ol.View({
            center: ol.proj.fromLonLat([e.lng, e.lat]),
            zoom: 16,
          }),
        }),
        n = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([e.lng, e.lat])),
        });
      n.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
          }),
        })
      );
      const o = new ol.source.Vector({ features: [n] }),
        l = new ol.layer.Vector({ source: o });
      t.addLayer(l), console.log("Rendering map with coordinates:", e);
    }
  }
  new (class {
    constructor() {
      const e = document.querySelector("form"),
        t = document.getElementById("locate-btn");
      (this.shareBtn = document.getElementById("share-btn")),
        t.addEventListener("click", this.locateUserHandler.bind(this)),
        this.shareBtn.addEventListener("click", this.sharePlaceHandler),
        e.addEventListener("submit", this.findAdressHandler.bind(this));
    }
    sharePlaceHandler() {
      const e = document.getElementById("share-link");
      navigator.clipboard
        ? navigator.clipboard
            .writeText(e.value)
            .then(() => {
              alert("copiedo into the clipboard");
            })
            .catch((t) => {
              console.log(t), e.select();
            })
        : e.select();
    }
    selectPlace(e, n) {
      this.map ? this.map.render(e) : (this.map = new t(e)),
        fetch("http://localhost:3000/add-location", {
          method: "POST",
          body: JSON.stringify({ address: n, lat: e.lat, lng: e.lng }),
          headers: { "Content-Type": "application/json" },
        })
          .then((e) => e.json())
          .then((e) => {
            console.log(e);
          }),
        (this.shareBtn.disabled = !1),
        (document.getElementById("share-link").value = `${
          location.origin
        }/my-place?address=${encodeURI(n)}&lat=${e.lat}&lng=${e.lng}`);
    }
    locateUserHandler() {
      if (!navigator.geolocation) return void alert("Location not available");
      const t = new e("loading-modal-content", "Loading location!");
      t.show(),
        navigator.geolocation.getCurrentPosition(
          async (e) => {
            t.hide();
            const n = { lat: e.coords.latitude, lng: e.coords.longitude },
              o = await (async function () {
                return "6th Avenue";
              })();
            t.hide, this.selectPlace(n, o);
          },
          (e) => {
            t.hide(), alert("Could not locate you");
          }
        );
    }
    async findAdressHandler(t) {
      t.preventDefault();
      const n = t.target.querySelector("input").value;
      if (!n || 0 === n.trim().length)
        return void alert("invalid address entered");
      const o = new e("loading-modal-content", "Loading location!");
      o.show();
      const l = await (async function () {
        return { lat: 47.01, lng: 33.55 };
      })();
      this.selectPlace(l, n), o.hide();
    }
  })();
})();
