# Colección de imágenes
Se refiere a un conjunto de imágenes correpondiente a distintos aspectos espectrales que están relacionados con fenómenos físicos de interacción de la luz con los elementos terrestres. Por ejemplo, la colección de todas la imágenes Landsat 8 es una colección. Al igual que la imagen SRTM, las colecciones de imágenes también tiene un ID de identificación, como también las imágenes individuales. Para poder allarlas se puede usar el catálogo de datos de GEE desde el editor de código.

Ejemplo: Buscar "landsat 8 toa", e importe con el botón "Import" a la cabecera del área de codificación del editor de código de GEE. Copie el ID de la colección y construya un objeto "colección de imágenes" con el construcctor -> **ee.ImageCollection(IDimagen)**.
```javascript
var L8 = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');
```
## Filtrado de colecciones de imágenes

