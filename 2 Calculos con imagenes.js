// Cálculos con imágenes

// Ejemplo
// Calcular la pendiente del terreno usando imagen de elevación de SRTM, usando el método slope del paquete Terrain.

var imagenID = 'CGIAR/SRTM90_V4';
var eeImagen = ee.Image(imagenID)
var eePendiente = ee.Terrain.slope(eeImagen); //pendiente
Map.setCenter(-112.8598, 36.2841, 9);
var visual = {min:0, max:60};
Map.addLayer(eeImagen, visual, 'Pendiente');

// Matemática de imagen

// Los objetos ee.Image contiene métodos que se pueden invocar para realizar operaciones, como ser las operaciones usando bandas de la imágenes, llamadas matemática de bandas o algebra de bandas. Sobre una sola banda o en imágenes mono bandas también pueden ser aplicados operaciones metemáticas como, extraer la inclinación de la superficies, o la inclinación de las superficies en modelos de elevación digital como las del proyecto SRTM.
// Ejemplo
// Operaciones trigonométricas en una imagen de aspecto (INCLINACIÓN). La imagen de aspecto se devuelve en grados hexadecimales (degree), para realizar operaciones trigonométricas se debe convertir a radianes (se multiplica por 180 y se divide por pi) y luego se aplica la operación trigonométrica que se requiera. El paquete Terrain tiene el método aspect que a partir del ID de la imagen devuelve otra imagen pero en grados de inclinacion del terreno.

var inclinacion = ee.Terrain.aspect(eeImagen); // inclinación en grados
var eeSenoImagen = inclinacion.divide(180).multiply(Math.PI).sin();
Map.setCenter(-112.8598, 36.2841, 9);
var visual = {min:-1, max:1};
Map.addLayer(eeSenoImagen, visual, 'Inglinación');

// Estadística de valores escalares o vectoriales de píxeles en regiones de imágenes

//Para calcular estadisticar el metodo reduce del paquete ee.Image y entonces usar algún metodo estadistico para obtener el valor deseado, el nuestro caso el valor medio de elevación por píxel. Se puede seleccionar una región usando la herramienta de dibujo geometry, para dibujar interactivamente una región. Con esta herramienta sedigitaliza un polígono que ensierre la región deseada, haga CLICK en salir cuando haya terminado. El objeto ee.Geometry resultante se denomina automáticamente geometry y agrega un elemento en la región de importación en la parte superior de la pantalla. Cambie el nombre geometry a poligono haciendo click sobre el nombre y modificando.

var input = {
	reduce:ee.Reducer.mean(),
	geometry:poligonoRegional,
	scale:9,
	bestEffort:true
};
var output = eeImagen.reduceRegion(input);
var media = output.get('elevation');
print('Elevación media', media);

// Escala en EE
// la clave scale se establece a la escala nativa de la imagen SRTM, este valor nativo se puede extraer de la imagen SRTM usando el método nominalScale del paquete projection de un objeto ee.Image.

var escala = eeImagen.proyection().nominalScale();
print('Escala en metros de imágenes SRTM',escale);

