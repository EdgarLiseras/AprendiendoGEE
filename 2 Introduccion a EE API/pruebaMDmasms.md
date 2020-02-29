#Preba ++


``` javascript
var eeImagen = ee.Image('CGIAR/SRTM90_V4');
var longitud = -112.8598;
var latitud = 36.2841;
var zoom = 9;
Map.setCenter(longitud, latitud, zoom);
Map.addLayer(eeImagen);
```