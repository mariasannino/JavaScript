(() => {
  "use strict";
  class e {
    constructor(e) {
      this.render(e);
    }
    render(e) {
      if (!ol) return void alert("could not load the library");
      console.log("Coordinates:", e),
        (document.getElementById("map").innerHTML = "");
      const o = new ol.Map({
          target: "map",
          layers: [new ol.layer.Tile({ source: new ol.source.OSM() })],
          view: new ol.View({
            center: ol.proj.fromLonLat([e.lng, e.lat]),
            zoom: 16,
          }),
        }),
        t = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([e.lng, e.lat])),
        });
      t.setStyle(
        new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
          }),
        })
      );
      const n = new ol.source.Vector({ features: [t] }),
        r = new ol.layer.Vector({ source: n });
      o.addLayer(r), console.log("Rendering map with coordinates:", e);
    }
  }
  const o = new URL(location.href).searchParams,
    t = { lat: parseFloat(o.get("lat")), lng: +o.get("lng") },
    n = o.get("address");
  new (class {
    constructor(o, t) {
      new e(o), (document.querySelector("header h1").textContent = t);
    }
  })(t, n);
})();
