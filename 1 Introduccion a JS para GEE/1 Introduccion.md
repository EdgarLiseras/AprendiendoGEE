# Introducción a JavaScript para Earth Engine

Este tutorial cubre suficiente JavaScript para comenzar a escribrir scripts en Earth Engine en el [Editor de código](https://code.earthengine.google.com/).

- Para una introducción a la programación, usando el lenguaje de programación JavaScript, consulte [Elocuent JavaScript](https://eloquentjavascript.net/).

- Para obtener tutoriales más completos sobre el lenguaje JavaScript, consulte [Recursos para desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

- Para obtener habilidades para escribir código en el estilo de codificación de JavaScript consulte la [Guia de estilo de JavaScript](http://google.github.io/styleguide/javascriptguide.xml).


## Instrucciones JS\GEE
Estas instrucciones pueden producir resultados en la consola, como por ejemplo cuando devuelve propiedades de una imagen, o un simple resultado matemático que se introdujo en el área de código. Así también, puede devolver imagenes en el área de visualización de imágenes. Todas las instrucciones en JavaScript para Google Earth Engine (JS\GEE) teminan con (;).

## Comando print()
Es la instrucción que se utiliza para imprimir texto en consola, como parámetros se les puede pasar variables previamente valoradas, o constantes literales para configurar una salida comprensible. La instrucción print() puede aceptar como parámetros, variables de cadena, numerico y lógicos; además de valores literales de los mismos tipos, siempre separados por coma.

## Tipos de datos simples

### Variables de tipo cadena
Las cadena de caractéres para definirlas se las limita por medio de comillas doble "" o simples '', en la práctica se prefiere este último delimitado. 
```javascript
print('hola mundo');

```
Estas cadenas se pueden almacenar en una variable y luego usar estas variables con el nombre que se le dió. Las variables se definen por medio de la instrucción var seguido del nombre de la variable, la asignación de valor de una variable se realiza por medio del operador de asignación =. Esta signación de valor puede ser en la misma línea de definición de la variable o e una línea separada, por medio de una instrucción de asignación conformado por el nombre de la variable, el operador de asignación y el valor en este orden.
```javascript
var saludo = 'Hola mundo';
print(saludo);
```
### Variables de tipo numérico
Los número se definen como una sucesión de dígitos y al cual se le antempone el signo (por defecto es positivo) y un punto decimal en el lugar que corresponda. Las variables de tipo numérico almacenan números tanto enteros o reales. 

```javascript
var resultado = 45;
print('El resultado es:', resultado);
```
### Variables de tipo lógico
Los lógicos están predefinidos y pueden tomar solo dos valores *true* y *false*. Estás variables también pueden ser mostradas en consola por medio de la instrucción print().
```javascript
var logico = true;
print(logico);
```
## Tipos de datos estructurados

### Variables de tipo lista
Las listas son conjunto indexados (cada elemento tiene un índice asociado, estos ídices son valores enteros consecutivos desde el cero a la cantidad de elementos del vector menos uno) formados por elementos del mismo ___tipo de dato___ (cadena o numero o lógicos). Se puede acceder a cualquier elemento de la lista estableciendo el nombre de la lista y entre parentecis recto [] el índice que le corresponde __(nombreLista[indice])__.
```javascript
var lista = [1,2,3,4,5];
print('La lista es:', lista);
print('El segundo elemento de la lista es:', lista[1]);
```
__NOTA:__ la numeración de los índices impiezan en cero y se incrementa en uno hasta alcanzar el valor de la longitud de la lista disminuido en uno.

## Variable de tipo diccionario
El diccionario es una lista delimitada por llaves {}, y cuyos elementos son pares del tipo _clave:valor_ separados por comas. Las claves deben ser de __tipo cadena__ y los valores pueden ser de __cualquier tipo simple o estructurado__
```javascript
var diccionario = {'cadena':'Hola mundo',
		'numero':67,
		'lista':[1,2,3,4],
		'diccionario':{'cade':'univer',
			'num':34,
			'lis':['a','b']
		} // diccionario interno
	} // diccionario externo
```
__NOTA:__ los valores no requieren ser del mismo tipo en un diccionario, pueden ser de tipo de dato simple o estructurado, pero siempre la clave debe ser una cadena.

## Las funciones
Las funciones se definen como las variables, pero en lugar de asociarles un valor, se le asocia un conjunto de sentencia que resulta en un valor cuando se llama la funición y se le pasa los parámetros correspondientes si fuera necesario. Este valor resulta de la aplicación en las sentencias de la función de los valores de los parámetros. El resultado se retorna con la instrucción final 'return' que debe ser la última instrucción en la definición de la función.

### Estructura genérica de una función
Una función se define por medio de la instrucción var, al cual se le debe pasar el nombre de la función seguido del operador de asinación de la función __function(opcionales){instrucciones; return valor}__
```javascript
var nombreFuncion = function(parametro1, parametro2,...)
	{
		sentencia1;
		sentencia2;
		...
		return valor;
	};
```
_Ejemplo:_ Función que suma dos números 
````javascript
var suma = function(num1, num2){
		var suma = num1 + num2;
		return suma;
};
```