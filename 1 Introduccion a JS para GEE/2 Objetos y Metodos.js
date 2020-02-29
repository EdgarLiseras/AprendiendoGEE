// Objetos Earth Engine
//---------------------

/*Una ves que manejamos JS, los objeto que con ella se crea se puede colocar en un contenedor que se envía al servidor de Earth Engine y el cual devuelve un objeto Earth Engine. Este objeto deber ser tratado como tal con sus atributos y métodos propios.*/

/*La variable de tipo cadena se almacena en el contenedor ee.String(cadena) el cual devuelve un objeto cadena pero Earth Engine*/

// Métodos de objetos EE
// ---------------------

var cadena = 'Hola mundo';
var eeCadena = ee.String(cadena);
print('Cadena', eeCadena);
print('Segundo carácter', eeCadena.get(1) // Extrae el 2do elemento

var eeNumero = ee.Number(Math.E); // Math.E es una instrucción JS
var logE = eeNumero.log(); // utilizo el método log() del objeto EE
print('Resultado', logE);


// Casting
// -------

/*Mucha veces EE no reconoce el tipo de dato que devuelve la aplicación de algún método sobre un objeto EE, por tanto debemos indicarle a EE de que tipo es ese valor para que luego EE opere sin dificultad*/

/*NOTA: al parecer la aplicación de un método a un objeto EE puede devolver un objeto generico por tal motivo, EE no reconoce el tipo específico del valor*/


var sum = logE.add(0.77); // puede dar un error
var sum = ee.Number(logE).add(0.77); // le recalcamos a EE que logE es de tipo ee.Number.

// Lista
// -----

var lista = [1,2,3,4];
var eeLista = ee.List(lista);
var eeSecuencia = ee.List.sequence(1,7,2); // Otra forma de definir una lista es por medio de una secuencia que inivia en un valor y termina en otro de a pasos establecidos.
print('Lista 3er elem', eeLista.get(2));
print('Secuencia 3er elem', eeSecuencia.get(2));


// Diccionario
// -----------

var diccionario = ee.Dictionary({
	'e':Math.E,
	'pi':Math.PI,
	'phi':(1 + Math.sqrt(5)/2;
});

print('Número de Euler', diccionario.get('e');
print('Número de Pi', diccionario.get('pi');
print('Número de Razón dorada', diccionario.get('phi');

// se pueden obtener las claves y los valores de los diccionarios
print('Las claves', diccionario.keys());
print('Los valores', diccionario.values());

// Date
// ----

var eeDate = ee.Date('2020-02-24');
print('Día específico YMD',eeDate);

var Ahora = Date.now(); // funcion de JS
print('Fecha de hoy en milisegundos', Ahora);

var eeAhora = ee.Date(Ahora);
print('Fecha de hoy YMD', eeAhora);

// Además de usar texto o funciones de JS para crear objetos EE de tipo Date, se pueden usar funciones específicas de EE Date para crear fechas. Los días, mes y año de una fecha se puede ingresar en un orden determanado o en orden aleatorio usando los nombre pordefectos de las variables día, mes y año de dicha función

var ordenDate = ee.Date.fromYMD(2020,02,24);
var sinOrdenDate = ee.Date.fromYMD({
	day:24,
	month:01,
	year:2020
});

print('YMD en orden', ordenDate);
print('YMD sin orden', sinOrdenDate);










