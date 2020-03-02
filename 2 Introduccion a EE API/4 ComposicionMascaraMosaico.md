#Composición, Mascara y Mosaico
En primer lugar se instancia la colección de imágenes [Lansat8](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC8_L1T_TOA), la cual filtramos por periodo temporal correspondiente al año 2016. Luego creamos una diccionario visParams y definimos su clave bands de modo que se pueda observar en color real.
``` javascript
var L8Coleccion = ee.ImageCollection('LANDSAT_LC8_L1T_TOA');
// Filtrado temporal
var L8Coleccion2016 = L8Coleccion.filterDate('2016-01-01','2016-12-31');
// Visualización en color real
var visParams = {bands:['B4','B3','B2'],min:0, max:0.3};
Map.addLayer(eeImagen,visParams,'L8 colección');
```
El problema con esta colección es que está llena de nuves, en lugar de ordenar la coleccióno por el porcentaje de nuves 'CLOUD_COVER' y tomar la última imagen, se puede reducir la colección.
##Composición con reductores


```javascript
// La mediana reduce la colección a una imagen
var median = L8Coleccion2016.median();
var visParams = {bands:['B4','B3','B2'],min:0, max:0.3};
Map.addLayer(eeImagen,visParams,'L8 mediana')
```
##Enmascaramiento
El inmascaramiento establese como transparente los píxeles de la colección, permitiendo que no se los tome en cuenta en los cálculos.