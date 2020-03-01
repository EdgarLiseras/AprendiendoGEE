# Colección de imágenes
Se refiere a un conjunto de imágenes correpondiente a distintos aspectos espectrales que están relacionados con fenómenos físicos de interacción de la luz con los elementos terrestres. Por ejemplo, la colección de todas la imágenes Landsat 8 es una colección. Al igual que la imagen SRTM, las colecciones de imágenes también tiene un ID de identificación, como también las imágenes individuales. Para poder allarlas se puede usar el catálogo de datos de GEE desde el editor de código.

Ejemplo: Buscar "landsat 8 toa", e importe con el botón "Import" a la cabecera del área de codificación del editor de código de GEE. Copie el ID de la colección y construya un objeto "colección de imágenes" con el construcctor -> **ee.ImageCollection(IDimagen)**.
```javascript
var L8 = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');
```
## Filtrado de colecciones de imágenes
Una colección representa cada escena recopilada de la tierra. En ocaciones es necesario una o varias escenas para nuestro propósico (como probar algoritmos, o calcular el índice de vegetación). La forma de limitar las escenas de la colección necesaria es por medio de , temporales o espaciales, aplicadas a la colección.

Por ejemplo: para filtrar la colección de imágenes que cubre el área de interes, se debe definir primero dicha área. Para definir la geometria (punto, linea, área) de interes se usa las herramientas de dibujo en el área de visualización. Una ves definido las propiedades geometricas se despliegan en el área de importaciónes, puede cambiarse el nombre asignado a la geometría.

### Filtrado espacial
```javascript
var L8FiltradoEspacial = L8.filterBounds(geometriaDeInteres);
print('Colección espacialmente filtrada', L8FiltradoEspacial);
```
### Filtrado temporal
```javascript
var inicio = '2015-01-01';
var fin = '2015-12-31';
var L8FiltradoTemporal = L8FiltradoEspacial.filterDate(inicio,fin);
print('Colección temporalmente filtrada', L8FiltradoTemporal)
```
[Siguiente lección >>](https://developers.google.com/earth-engine/tutorial_api_04)

