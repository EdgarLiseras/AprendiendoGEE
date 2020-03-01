# Colección de imágenes
Se refiere a un conjunto de imágenes correpondiente a distintos aspectos espectrales que están relacionados con fenómenos físicos de interacción de la luz con los elementos terrestres. Por ejemplo, la colección de todas la imágenes Landsat 8 es una colección. Al igual que la imagen SRTM, las colecciones de imágenes también tiene un ID de identificación, como también las imágenes individuales. Para poder allarlas se puede usar el catálogo de datos de GEE desde el editor de código.

Ejemplo: Buscar "landsat 8 toa", e importe con el botón "Import" a la cabecera del área de codificación del editor de código de GEE. Copie el ID de la colección y construya un objeto "colección de imágenes" con el construcctor -> **ee.ImageCollection(IDimagen)**.
```javascript
var Coleccion = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');
```
## Filtrado de colecciones de imágenes
Una colección representa cada escena recopilada de la tierra. En ocaciones es necesario una o varias escenas para nuestro propósico (como probar algoritmos, o calcular el índice de vegetación). La forma de limitar las escenas de la colección necesaria es por medio de , temporales o espaciales, aplicadas a la colección.

Por ejemplo: para filtrar la colección de imágenes que cubre el área de interes, se debe definir primero dicha área. Para definir la geometria (punto, linea, área) de interes se usa las herramientas de dibujo en el área de visualización. Una ves definido las propiedades geometricas se despliegan en el área de importaciónes, puede cambiarse el nombre asignado a la geometría.

### Filtrado espacial
```javascript
/* Seleccionar un punto, línea o área de interes y al objeto creado en el área de importaciones darle un nombre (geometriaDeInteres)*/
var coleccionFiltradoEspacial = Coleccion.filterBounds(geometriaDeInteres);
print('Colección espacialmente filtrada', coleccionFiltradoEspacial);
```
### Filtrado temporal
```javascript
var inicio = '2015-01-01';
var fin = '2015-12-31';
var coleccionFiltradoTemporal = coleccionFiltradoEspacial.filterDate(inicio,fin);
print('Colección temporalmente filtrada', coleccionFiltradoTemporal)
```

Los métodos abreviados **filterBounds()** y **filterDate()** son métodos abreviados del método **filter()** usado en colecciones de imágenes y que usa un objeto **ee.Filter()** como argumento. El argumento para filterBounds() es el nombre del objeto de geometría especificado, y el argumento para el método filterDate() son las fechas ingresadas como cadena en el formato *yyyy-mm-dd*.

NOTA: no se puede imprimir las propiedades de más de **5.000** objetos a la vez, por lo que no se puede imprimir toda la colección. 

Por esta restricción se debe filtrar la colección antes de usar el método print() para mostrar las propiedades de la misma. Las propiedades de la colección mostradas por el método print() en la consola, se puede observar desplegando la ImageCollection usando el zippy $$\triangleright$$.

fajñkjfñajjfñakj
$\displaystle\frac{1}{1+x}$

$\displaystyle\prod_{i=1}^n p_i$


