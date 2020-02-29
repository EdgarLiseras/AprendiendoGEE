// Introducción a JavaScript para Earth Engine
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------

/*
Este tutorial cubre suficiente JavaScript para comenzar a escribrir scripts en Earth Engine en el editor de código de Earth Engine (https://code.earthengine.google.com/).

- Para una introducción a la programación, usando el lenguaje de programación JavaScript, consulte "Elocuent JavaScript" en la URL(https://eloquentjavascript.net/)

- Para obtener tutoriales más completos sobre el lenguaje JavaScript, consulte "Recursos para desarrolladores de Mozilla" en la URL (https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- Para obtener habilidades para escribir código en el estilo de codificación de JavaScript consulte la guia de estilo de JavaScript de Google en la URL (http://google.github.io/styleguide/javascriptguide.xml)
*/ 

// Primera instrucción, imprimir el texto "Hola mundo" en consola
// --------------------------------------------------------------
// --------------------------------------------------------------

print('hola mundo');

// Tipos de datos básicos simples en JS
// ------------------------------------
// ------------------------------------

// Tipo cadena
// -----------
/* Las variable que almacenar cadena de caractéres se definen entre comillas doble "" o simples '', se prefiere este último. Se puede almacenar una cadena en una variable y luego imprimir la cadena con la función print()*/

var saludo = 'Hola mundo';
print(saludo);

// Tipo numérico
// -------------

/*Las variables de tipo numérico almacenan números enteros o reales. La función de impresión en consola print() puede aceptar parámetros de cadena, numerico y lógicos separados por coma*/

var resultado = 45;
print('El resultado es:', resultado);

// Tipos de datos básicos estructurados en JS
// ------------------------------------------
// ------------------------------------------

// Tipo lista
// ----------

/*Las listas son conjunto indexados formados por elementos del mismo tipo de dato, cadena o numero o lógicos. Se puede acceder a cualquier elemento de la lista estableciendo el nombre de la lista y entre parentecis recto el índice que corresponde (nombreLista[indice])*/

var lista = [1,2,3,4,5];
print('La lista es:', lista);
print('El segundo elemento de la lista es:', lista[1]);

/*NOTA: la numeración de los indices impiezan en cero y se incrementa en uno hasta alcanzar el valor de la longitud de la lista disminuido en uno*/

// Tipo diccionario
// ----------------

/*El diccionario es una lista delimitada por llaves {}, y cuyos elementos son pares clave:valor separados por comas. Las claves deben ser de tipo cadena y los valores pueden ser de cualquier tipo simple o estructurado*/

var diccionario = {'cadena':'Hola mundo',
										'numero':67,
										'lista':[1,2,3,4],
										'diccionario':{'cade':'univer',
																		'num':34,
																		'lis':['a','b']
																	} // diccionario interno
									} // diccionario externo

/*NOTA: los valores no requieren ser del mismo tipo en un diccionario*/

// Funciones
// ---------
// ---------

/*Las funciones se definen como variables, pero en lugar de asociarles un valor, se le asocia un conjunto de sentencia que resulta en un valor. Este valor resulta de la aplicación en las sentencias de la función de los valores de los parámetros que se le pasa a la función en el momento de su ejecución. Este resultado se retorna con la instrucción final 'return'.*/

// Estructura genérica
// -------------------

var nombreFuncion = function(parametro1, parametro2,...)
	{
		sentencia1;
		sentencia2;
		...
		return valor;
	};

// Ejemplo

var suma = function(num1, num2){
		suma = num1 + num2;
		return suma;
};












