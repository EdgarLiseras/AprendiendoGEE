# Visualización de imágenes
Para visualizar una imagen se debe identificar la imagen por su ID, el cual ingresa como parámetro (cadena) del construcctor de imágens ee.Image(ID). Además se debe especificar las coordenadas y el zoom en Map.setCenter(longitud, latitud, zoom). Una vez configurado estos parámetros queda agregar una capa de visualizacion pasandole el objeto imagen, un parámetro de visualizacion por medio de un diccionario y una etiqueta de la capa.
``` javascript
var eeImagen = ee.Image('CGIAR/SRTM90_V4');
var longitud = -112.8598;
var latitud = 36.2841;
var zoom = 9;
Map.setCenter(longitud, latitud, zoom);
Map.addLayer(eeImagen);
print('Imagen SRTM', eeImagen);
```
Para desplegar las propiedades de la imagen en la cosola, se usa la instrucción print al cual se le pasa el objeto imagen cuyas propiedades se desea desplegar.

### SRTM Digital Elevation Data (Version 4)
La Misión Topográfica Shuttle Radar (acrónimo en inglés SRTM, de Shuttle Radar Topography Mission) es un proyecto internacional entre la Agencia Nacional de Inteligencia-Geoespacial, NGA, y la Administración Nacional de la Aeronáutica y del Espacio, NASA. Su fin es obtener un modelo digital de elevación (acrónimo en ingles DEM, Digital Model Elevation) de la zona del globo terráqueo entre 56 °S a 60 °N, de modo que genere una completa base de mapas topográficos digitales de alta resolución de la Tierra. Esta base cartográfica ha sido ampliamente utilizada en diferentes campos del conocimiento relacionados con la geomática al poderse descargar la imágenes SRTM gratuitamente a través de Internet.

## Visualización personalizada con rango de valores
La visualización se especifíca como un diccionario que ingresa como segundo parámetro en el comando Map.addLayer(imagen,visualización,etiqueta). En este caso se especifíca los valores mínimos (min) y máximo (max) para mejorar la visualización de la imagen.
``` javascript
var visualizacion = {min:0, max:3000};
Map.addLayer(eeImagen, visualizacion, 'Vista coloreada');
```
## Visualización personalizada con paleta de colores
La paleta es una lista de elemento de tipo cadenas, de nombres colores o de código hexadecimal, delimitada por comas. Esta lista se interpolan linealmente entre los valores mínimo y máximos, correspondiente al primer elemento de la lista y el último elemento de la lista, respectivamente. O sea, los pixeles mínimos se ajustan al primer color y los pixeles máximos al último color, los pixeles intermedio se interpolan linealmente entre el máximo y el mínimo. Los colores se definen utilizando el esquema de valores de color CSS standar web (https://en.wikipedia.org/wiki/Web_colors).

### Definir paletas de colores como una lista
``` javascript
var paleta0 = ['blue','gree','red'];
var paleta1 = [
	'blue', 'teal', 'aqua', 
	'green', 'lime', 'olive', 
	'yellow', 'maroon', 'red'
	];
var paleta2 = [
  'aec3d4', // water
  '152106', '225129', '369b47', '30eb5b', '387242', // forest
  '6a2325', 'c3aa69', 'b76031', 'd9903d', '91af40',  // shrub, grass
  '111149', // wetlands
  'cdb33b', // croplands
  'cc0013', // urban
  '33280d', // crop mosaic
  'd7cdcc', // snow and ice
  'f7e084', // barren
  '6f6f6f'  // tundra
];
```
### Implementar en la visualización una paleta de colores

``` javascript
var visualizacion = {min:0, max:3000, palette:paleta0};
Map.addLayer(eeImagen, visualizacion, 'Vista coloreada');
```
Las paletas de colores tienen gran importancia en la visualización, y se especifican por tipo de información que deseamos observar y por escala.