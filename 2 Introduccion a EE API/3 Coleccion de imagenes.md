# Colección de imágenes
Se refiere a un conjunto de imágenes correpondiente a distintos aspectos espectrales que están relacionados con fenómenos físicos de interacción de la luz con los elementos terrestres. Por ejemplo, la colección de todas la imágenes Landsat 8 es una colección. Al igual que la imagen SRTM, las colecciones de imágenes también tiene un ID de identificación, como también las imágenes individuales. Para poder allarlas se puede usar el catálogo de datos de GEE desde el editor de código.

Ejemplo: Buscar "landsat 8 toa", e importe con el botón "Import" a la cabecera del área de codificación del editor de código de GEE. Copie el ID de la colección y construya un objeto "colección de imágenes" con el construcctor -> **ee.ImageCollection(IDimagen)**.
```javascript
var coleccion = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');
```
## Filtrado de colecciones de imágenes
Una colección representa cada escena recopilada de la tierra. En ocaciones es necesario una o varias escenas para nuestro propósico (como probar algoritmos, o calcular el índice de vegetación). La forma de limitar las escenas de la colección necesaria es por medio de , temporales o espaciales, aplicadas a la colección.

Por ejemplo: para filtrar la colección de imágenes que cubre el área de interes, se debe definir primero dicha área. Para definir la geometria (punto, linea, área) de interes se usa las herramientas de dibujo en el área de visualización. Una ves definido las propiedades geometricas se despliegan en el área de importaciónes, puede cambiarse el nombre asignado a la geometría.

### Filtrado espacial
```javascript
/* Seleccionar un punto, línea o área de interes y al objeto creado en el área de importaciones darle un nombre (geometriaDeInteres)*/
var espacial = coleccion.filterBounds(geometriaDeInteres);
print('Colección espacialmente filtrada', espacial);
```
### Filtrado temporal
```javascript
var inicio = '2015-01-01';
var fin = '2015-12-31';
var temporal = espacial.filterDate(inicio,fin);
print('Colección temporalmente filtrada', temporal)
```

Los métodos abreviados **filterBounds()** y **filterDate()** son métodos abreviados del método **filter()** usado en colecciones de imágenes y que usa un objeto **ee.Filter()** como argumento. El argumento para filterBounds() es el nombre del objeto de geometría especificado, y el argumento para el método filterDate() son las fechas ingresadas como cadena en el formato *yyyy-mm-dd*.

NOTA: no se puede imprimir las propiedades de más de **5.000** objetos a la vez, por lo que no se puede imprimir toda la colección. 

Por esta restricción se debe filtrar la colección antes de usar el método print() para mostrar las propiedades de la misma. Las propiedades de la colección mostrada por el método print() en la consola, se puede observar desplegando la pestaña ImageCollection usando el zippy [>].

Otra forma de filtrar para obtener imágenes individuales es ordenar por alguna caracteristica de la colección por ejemplo (CLOUD_COVER = o covertura de nuves).
```javascript
// ordena la colección filtrada por la propiedad que se le pasa
var ordenada = coleccionFiltradoTemporal.sort('CLOUD_COVER');
// se optiene el primero de la fila ordenada.
var escena = ordenada.first();
```
## Visualización de imágenes RGB
Cuando se despliega una imagen de varias bandas, EE selecciona las primeras tres y le asocia a los canales RGB para su visualización en ese orden. Pero esta selección por defecto no es necesariamente satisfactoria, por lo que se puede seleccionar cualquier otras tres bandas para asociar a los canales RGB.

```javascript
\\ Coloca el centro de la imagen en el centro de la pantalla de visualización
Map.centerObject(escena,9);
Map.addLayer(escena,{},'RGB por defecto');
```
Para especificar otro orden de bandas a ser visualizada por los canales RGB, en ese orden, se debe asignar a la clave bands del visParams, un vector con los nombres de las bandas en el orden que se desea primero ROJO, segundo VERDE, y por último AZUL.
```javascript
var vista = {bands:['B4','B3','B2'], max:0.3};
Map.addLayer(escana,vista,'composición en color verdadero')
```
## Mostrar colección completa
```javascript
var landsat2016= Coleccion.filterDate('2016-01-01','2016-12-31');
Map.addLayer(landsat2016,vista,'colección landsar 2016')
```