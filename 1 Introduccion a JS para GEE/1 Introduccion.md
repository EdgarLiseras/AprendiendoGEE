# Introducción a JavaScript para Earth Engine

Este tutorial cubre suficiente JavaScript para comenzar a escribrir scripts en Earth Engine en el [Editor de código](https://code.earthengine.google.com/).

- Para una introducción a la programación, usando el lenguaje de programación JavaScript, consulte [Elocuent JavaScript](https://eloquentjavascript.net/).

- Para obtener tutoriales más completos sobre el lenguaje JavaScript, consulte [Recursos para desarrolladores de Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

- Para obtener habilidades para escribir código en el estilo de codificación de JavaScript consulte la [Guia de estilo de JavaScript](http://google.github.io/styleguide/javascriptguide.xml).

## Comando print()
Es la instrucción que se utiliza para imprimir texto en consola. Todas las instrucciones teminan con (;).
```javascript
print('hola mundo');

```
## Tipos de datos básicos simples en JS

### Tipo cadena
Las cadena de caractéres se definen entre comillas doble "" o simples '', en la práctica se prefiere este último. Estas cadenas se pueden almacenar en una variable y luego usarlas con el nombre que se le dió a la variable.
```javascript
var saludo = 'Hola mundo';
print(saludo);
```
### Tipo numérico
Los número se definen como una sucesión de dígitos y a lo sumo un signo y un punto decimal. Las variables de tipo numérico almacenan números enteros o reales. 

La instrucción print() puede aceptar parámetros de cadena, numerico y lógicos separados por coma.
```javascript
var resultado = 45;
print('El resultado es:', resultado);
```
### Tipo lógico
Los lógicos están predefinidos y pueden tomar solo dos valores *true* y *false*. Estás variables también pueden ser mostradas en consola por medio de la instrucción print().
```javascript
var logico = true;
print(logico);
```
## Tipos de datos básicos estructurados en JS

### Tipo lista
Las listas son conjunto indexados (cada elemento tiene un índice asociado, estos son enteros consecutivos del cero la cantidad de elementos del vector menos uno) formados por elementos del mismo tipo de dato, cadena o numero o lógicos. Se puede acceder a cualquier elemento de la lista estableciendo el nombre de la lista y entre parentecis recto el índice que le corresponde (nombreLista[indice])
```javascript
var lista = [1,2,3,4,5];
print('La lista es:', lista);
print('El segundo elemento de la lista es:', lista[1]);
```
__NOTA:__ la numeración de los indices impiezan en cero y se incrementa en uno hasta alcanzar el valor de la longitud de la lista disminuido en uno

## Tipo diccionario
El diccionario es una lista delimitada por llaves {}, y cuyos elementos son pares _clave:valor_ separados por comas. Las claves deben ser de __tipo cadena__ y los valores pueden ser de __cualquier tipo simple o estructurado__
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

## Las funciones en JS
Las funciones se definen como las variables, pero en lugar de asociarles un valor, se le asocia un conjunto de sentencia que resulta en un valor cuando se la llama pasandole los parámetros correspondientes si fuera necesario. Este valor resulta de la aplicación en las sentencias de la función de los valores de los parámetros que se le pasa a la función en el momento de su ejecución. Este resultado se retorna con la instrucción final 'return' que debe ser la última instrucción de la definición de la función.

### Estructura genérica
La función consta de un nombre, como el caso de las variables, el signo igual y lugar de darte un valor se llama a la insturcción function() de JS al cual se le pasa una lista de parámetros y entre llaves una lista de sentencias separadas por (;), de las cuales la última debe ser la instrucción return al cual se le pasa el valor que se quiere devolver cuando se llama a la función.
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
		suma = num1 + num2;
		return suma;
};
```