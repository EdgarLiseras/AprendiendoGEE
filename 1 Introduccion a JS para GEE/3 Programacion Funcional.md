# Concepto de programación funcional 

- EE utiliza un sistema de __procesamiento paralelo__ para llevar a cabo los cálculos en una gran cantidad de máquinas. Por la que preferencialmente usa programación funcional que programación procesal.

- El concepto principal que diferencia la programación funcional de la programación procesal es la AUSENCIA DE EFECTOS SECUANDARIO. Lo que significa que las funciones que se construyan no dependen ni autualizan datos que estén fuera de la función. La programación funcional es mucho más adecuada para ejecutarse en paralelo.

- Además, EE utiliza la programación diferica, lo que significa que la evaluación de una expresión se retraza hasta que se requiera su valor real.

## Bucles FOR en EE
Se puede lograr el mismo resultado que un bucle FOR, usando el método __map(función)__ de una lista. Al método map() se le asigna una función, la cual se aplica a cada elemento de una lista, esto permite que el sistema distribuya el procesamiento a diferentes máquinas.

_Ejemplo:_ calcular los cuadrados de los enteros entre 1 y 10
```javascript
var eeLista = ee.List.sequence(1,10);
var elevaCuadrado = function(numero){
	var eeNum = ee.Number(numero);
	return eeNum.pow(2);
};
var eeCuadrados = eeLista.map(elevaCuadrado);
print(eeLista);
print(eeCuadrados);
```
## Condicional IF THEN ELSE en EE
Aunque la API de EE trae la función __ee.Algorithms.If()__, se prefiere que se use el método map() del objeto lista en EE para realizar la misma tarea.

_Ejemplo:_ Calcular los cuadrados de los enteros impares entre 1 y 10
```javascript
var eeLista = ee.List.sequence(1,10);
var anulaPares = function(numero){
	var eeNumero = ee.Number(numero);
	var restoDiv2 = eeNumero.mod(2);
	var resultado = eeNumero.multiply(restoDiv2);
	return resultado;
};
var eeListaAnulada = eeLista.map(anulaPares);
var eeListaSinPares = eeListaAnulada.removeAll([0]);
var eeCuadrados = eeListaSinPares.map(elevaCuadrado);
print('lista original',eeLista);
print('lista con lugares pares anulados',eeListaAnulada);
print('lista resultante',eeListaSinPares);
print('lista resultante cuadrada',eeCuadrados);

```
Este paradigma es especialmente util cuando se trada con colecciones de imágenes. En caso de que se desee incorporar una restricción primero se filtra la colección según la condición y luego se aplica este paradigma a la colección resultante.

_Ejemple:_ a partir de una colección de imágenes, seleccionar las que tienen la propiedade 'SUN_ELEVATION' con valores mayores o iguales a 40 y las menores que 40. Luego aquella colección con dicha propiedad menor que 40, sus valores se pultiplican por 2. Luego se mezclan dichas colecciones y se muestra el tamaño de la colección original y la mezclada.
```javascript
var eeColeccion = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');
var eeSubColeccion1 = eeColeccion.filter(ee.Filter.lt('SUN_ELEVATION',40));
var eeSubColeccion2 = eeColeccion.filter(ee.Filter.gte('SUN_ELEVATION',40));

var imagenx2 = function(eeImagen){
	return eeImagen.multiply(2);
};

var eeImagenProc1 = eeSubColeccion1.map(imagenx2);
var eeImagenProc2 = eeSubColeccion2;

var eeResultado = eeImagenProc1.merge(eeImagenProc2);

print('Tamaño de la colección original',eeColeccion.size());
print('Tamaño de la colección final',eeResultado.size());
```

## Iteración acumulativa
Es posible que se necesite realizar una operación secuencial donde el procesamiento de una operación dependa del resultado anterior. EE proporciana el método __iterate()__ para estas tareas, pero solo debe usarse en caso de no poder usar el método __map()__ ya que su procesameinto será lento en especial en colecciones grandes. La función __iterate(función, valorInicial)__ toma dos argumentos: una función y un valor inicial.

_Ejemplo:_ Secuencia numerica de Finonacci, esta secuencia tiene dos valores iniciales, el primer y segundo valor. A partir del tercero, el valor de la sucesión se construye el valor de una posición, sumando el valor de la posición anterior y la antes anterior.
```javascript
var eeListaFibonacciModificada = function(current, listaFibonacci){
	eeListaFibonacci = ee.List(listaFibonacci);
	var numUltimo = eeListaFibonacci.get(-1);
	var numAnteultimo = eeListaFibonacci.get(-2);
	var numSiguiente = numAnteultimo.add(numUltimo);
	return eeListaFibonacci.add(numSiguiente);
};

var eeLista = ee.List.repeat(1,10);
var listaInicial = [0,1];
var secuenciaFibonacci = eeLista.iterate(eeListaFibonacciModificada, listaInicial);

print('Secuencia de Fibonacci', secuenciaFibonacci);
```