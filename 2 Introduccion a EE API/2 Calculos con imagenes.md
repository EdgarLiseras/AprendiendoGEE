# Cálculos matemáticos con imágenes
Los objetos __ee.Image()__ contiene métodos que se pueden invocar para realizar operaciones, como son las operaciones usando bandas de la imágenes llamadas matemática de bandas o algebra de bandas, como también operaciones sobre una misma banda o imágenes monobandas como la imágenes de modelos de elevación digital DEM, como las SRTM. Sobre imágenes monobandas se puede, por ejemplo, calcular la inclinación, o la pendiente del terreno usando imagen de elevación digital.
```javascript
var eeImagen = ee.Image('CGIAR/SRTM90_V4')
var eeImagenSlope = ee.Terrain.slope(eeImagen); //pendiente
Map.setCenter(-112.8598, 36.2841, 9);
var visual = {min:0, max:60};
Map.addLayer(eeImagenSlope, visual, 'Pendiente');
```

## Operaciones trigonométricas en una imagen de aspecto (INCLINACIÓN).
La imagen de aspecto devuelve el ángulo de inclinación del terreno en grados hexadecimales (degree), para realizar operaciones trigonométricas se debe convertir a radianes (lo que se consigue al multiplica por 180 y se divide por pi el valor de cada píxel). El paquete Terrain tiene el método aspect que a partir del ID de la imagen devuelve otra imagen pero en grados de inclinacion del terreno -> **ee.Terrain.aspect(eeImagen)**.
```javascript
var eeImagenAspecto = ee.Terrain.aspect(eeImagen); // inclinación RADIANDES
var eeImagenSeno = eeImagenAspecto.divide(180).multiply(Math.PI).sin(); // inclinación en GRADOS y cálculo de SENO()
Map.setCenter(-112.8598, 36.2841, 9);
var visual = {min:-1, max:1}; // rando de valores del seno()
Map.addLayer(eeImagenSeno, visual, 'Inclinación');
```
## Estadística de valores escalares o vectoriales de píxeles en regiones de imágenes
Para calcular estadisticas sobre una imagen se debe especificar la operación que se desea realizar, la región donde se va aplicar dicha operación, la escala a la cual se quiere aplicar y un parámetro que anula la limitación de píxeles sobre el cual se puede calcular la operación (cuanto más grande es la región sobre el cual se va ha hacer la estadística mayor es el número de píxeles involucrados y por tanto se tardará más en poder realizarlo). Primero se debe especificar la región por medio del dibujo de un polígono sobre la región de interes, y posiblemente renombralo en la cabecera del área de codificación de GEE, este nombre entra como valor del parámetro geometry.
```javascript
var input = {
	reduce:ee.Reducer.mean(),
	geometry:poligonoRegional,
	scale:9,
	bestEffort:true // para no limitar a un número dado de píxeles
}; // Especifica la operación, la región, la escala...
var output = eeImagen.reduceRegion(input); // Ejecuta la operación especificada, sobre la región y escala especificada (el resultado es un diccionario)
var media = output.get('elevation'); // Del diccionario resultante se pide extraer el dato de elevación (por lo que se determina el valor medio de la elevación).
print('Elevación media', media);
```
## Escala en EE
La clave scale en la definición de la operación se establece a múltiplo de la escala nativa de la imagen SRTM, este valor nativo se puede extraer de la imagen SRTM usando el método nominalScale del paquete projection de un objeto ee.Image.
```javascript
var escala = eeImagen.proyection().nominalScale();
print('Escala en metros de imágenes SRTM',escale);
```