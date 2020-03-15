# Objetos y sus métodos en Earth Engine

## Objetos EE
Una ves que manejamos JS, los objeto que con ella se crea se puede colocar en un contenedor que se envía al servidor de Earth Engine y el cual devuelve un objeto Earth Engine. Este objeto deber ser tratado como tal, con sus atributos y métodos propios.

_Por ejemplo:_ una variable de tipo cadena se almacena con el contenedor ee.String(cadena) el cual devuelve un objeto cadena pero Earth Engine.

## Métodos de objetos EE
Los objetos EE deben ser tratados con los métodos propios de dicho objeto, 

### Cadenas en EE
_Ejemplo:_ extraer un elemento de una cadena uvicada en el segundo lugar usando el nombre de la cadena y el método get() al cual se le pasa el índice correspondiente.
```javascript
var cadena = 'Hola mundo';
var eeCadena = ee.String(cadena);
print('Cadena', eeCadena);
print('Segundo carácter', eeCadena.get(1) // Extrae el 2do elemento
```

### Números en EE
Se puede utilizar la biblioteca de funciones de JS para generar número específicos.

_Ejemplo:_ determinar el logaritmo del número e.
```javascript
var eeNumero = ee.Number(Math.E); // Math.E es una constante en JS
var logE = eeNumero.log(); // utilizo el método log() del objeto EE
print('Resultado', logE);
```

### Casting
Mucha veces EE no reconoce el tipo de dato que devuelve la aplicación de algún método sobre un objeto EE, por tanto debemos indicarle a EE de que tipo es ese valor para que luego EE opere sin dificultad

_NOTA:_ al parecer la aplicación de un método a un objeto EE puede devolver un objeto generico por tal motivo, EE no reconoce el tipo específico del valor y hay que volver a hacerle recorda

_Ejemplo:_ sumar 0.77 al logaritmo del número e, que se obtuvo en el ejemplo anterior.
```javascript
var sum = logE.add(0.77); // puede dar un error
var sum = ee.Number(logE).add(0.77); // le recalcamos a EE que logE es de tipo ee.Number.
```

### Lista en EE
_Ejemplo:_ definir una lista en JS y convertirlo en un objeto EE, definir también una secuencia usando un método de lista EE. Luego imprimir el tercer elemento de la lista y de la secuencia.
```javascript
var lista = [1,2,3,4];
var eeLista = ee.List(lista);
var eeSecuencia = ee.List.sequence(1,7,2);
print('Lista 3er elem', eeLista.get(2));
print('Secuencia 3er elem', eeSecuencia.get(2));
```

### Diccionario en EE
_Ejemplo:_ construir un diccionario EE y mostrar su contenido uno por uno, usando el método get() al cual se le pasa la clave del valor que se desea conocer su valor. Luego mostrar las claves del diccionario usando el método keys(), y los valores del diccionario usando el método values() del objeto diccionario EE.
```javascript
var diccionario = ee.Dictionary({
	'e':Math.E,
	'pi':Math.PI,
	'phi':(1 + Math.sqrt(5)/2
});
print('Número de Euler', diccionario.get('e');
print('Número de Pi', diccionario.get('pi');
print('Número de Razón dorada', diccionario.get('phi');
print('Las claves', diccionario.keys());
print('Los valores', diccionario.values());
```

### Date en EE
```javascript
var eeDate = ee.Date('2020-02-24');
print('Día específico YMD',eeDate);

var Ahora = Date.now(); // funcion de JS
print('Fecha de hoy en milisegundos', Ahora);

var eeAhora = ee.Date(Ahora);
print('Fecha de hoy YMD', eeAhora);
```
Además de usar texto o funciones de JS para crear objetos EE de tipo Date, se pueden usar funciones específicas de EE Date para crear fechas. Los días, mes y año de una fecha se puede ingresar en un orden determanado o en orden aleatorio usando los nombre por defectos de las variables día, mes y año de dicha función
```javascript
var ordenDate = ee.Date.fromYMD(2020,02,24);
var sinOrdenDate = ee.Date.fromYMD({
	day:24,
	month:01,
	year:2020
});
print('YMD en orden', ordenDate);
print('YMD sin orden', sinOrdenDate);
```