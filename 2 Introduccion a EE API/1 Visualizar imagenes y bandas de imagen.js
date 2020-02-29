// Estructura inicial

/*Instanciar una imagen con el constructor de imágenes, establecer las coordenadas y la ampliación del mapa, agregar un capa y colocar el mapa instanciado alli*/

var eeImagen = ee.Image('CGIAR/SRTM90_V4');
var longitud = -112.8598;
var latitud = 36.2841;
var zoom = 9;
Map.setCenter(longitud, latitud, zoom);
Map.addLayer(eeImagen);

/*Propiedades de la imagen recien instanciada, desplegada en la consola. En este caso la imagen es un de tipo signada de 16bits*/
print('Imagen SRTM', eeImagen);

// SRTM Digital Elevation Data Version 4
/*La Misión Topográfica Shuttle Radar (acrónimo en inglés SRTM, de Shuttle Radar Topography Mission) es un proyecto internacional entre la Agencia Nacional de Inteligencia-Geoespacial, NGA, y la Administración Nacional de la Aeronáutica y del Espacio, NASA. Su fin es obtener un modelo digital de elevación (DEM Digital Model Elevation) de la zona del globo terráqueo entre 56 °S a 60 °N, de modo que genere una completa base de mapas topográficos digitales de alta resolución de la Tierra. Esta base cartográfica ha sido ampliamente utilizada en diferentes campos del conocimiento relacionados con la geomática al poderse descargar gratuitamente a través de Internet.*/

// Visualización personalizada
// ---------------------------
var visualizacion = {min:0, max:3000};
var nombreLayer = 'Visualización Personalizada'
Map.addLayer(eeImagen, visualizacion, nombreLayer);

// Visualización personalizada con paleta de colores
// -------------------------------------------------

/*La paleta es una lista de cadenas de colores, delimitada por comas, que se interpolan linealmente entre los valores máximos y mínimo. Los pixeles mínimos se ajustan al primer color y los pixeles máximos al último color, los pixeles intermedio se interpolan linealmente entre el máximo y el mínimo. Los colores se definen utilizando el esquema de valores de color CSS standar web (https://en.wikipedia.org/wiki/Web_colors). Los colores se pueden designar por su nombre o por cadenas exadecimales que indican el color.*/

 // palette:['blue', 'teal', 'aqua', 'green', 'lime', 'olive', 'yellow', 'maroon', 'red']

var visualizacion = {min:0, max:3000, palette:['blue','gree','red']};
var nombreLayer = 'Visualización Personalizada'
Map.addLayer(eeImagen, visualizacion, nombreLayer);





