export class Map {
  constructor(coords) {
    this.render(coords);
  }
  render(coordinates) {
    if (!ol) {
      alert("could not load the library");
      return;
    }
    console.log("Coordinates:", coordinates);
    document.getElementById("map").innerHTML = ""; // clear the <p> in the <div id="map">
    const map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
        zoom: 16,
      }),
    });

    const marker = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([coordinates.lng, coordinates.lat])
      ),
    });

    marker.setStyle(
      new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 1],
          src: "https://openlayers.org/en/latest/examples/data/icon.png", // URL to your marker icon
        }),
      })
    );

    const vectorSource = new ol.source.Vector({
      features: [marker],
    });
    const vectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);
    console.log("Rendering map with coordinates:", coordinates);
  }
}
