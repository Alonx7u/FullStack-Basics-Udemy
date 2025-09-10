// console.log("Hola Mundo");

// tipos de datos
// string: cadena de caracteres. 'a', 'hola', 'hola mundo'
// boolean: verdadero o falso. true, false
// null: valor nulo. null
// number: número. 1, 2, 3.14
// undefined: valor no definido. var x;
// object: objeto. {nombre: 'John', edad: 30}

// definir variables
// var
// let
// const

// var miPrimeraVariable = "hola";

let miPrimeraVariable = "hola primera variable";  
// console.log(miPrimeraVariable);

// mutabilidad
miPrimeraVariable = "hola segunda variable";
// console.log(miPrimeraVariable);

let miBoleean = true
let miOtroBoleean = false

let miNumero = 1 

// objeto
const miPrimerObjeto = {}

const miObjeto = {
    unNumero: 1,
    unString: "hola",
    unaCondicion: true,
 }
// console.log(miObjeto);

 // arreglo
const miPrimerArreglo = []
const miSegundoArreglo = [1, 2, 3, 'hola', miObjeto]

// console.log(miPrimerArreglo, miSegundoArreglo);

miSegundoArreglo.push(4) // agregar elemento
// console.log(miSegundoArreglo, 'push agregar elemento');

miSegundoArreglo.pop() // eliminar elemento
// console.log(miSegundoArreglo, 'pop eliminar elemento');

miSegundoArreglo.unshift(0) // insertar elemento
// console.log(miSegundoArreglo, 'unshift insertar elemento');

miSegundoArreglo.shift() // eliminar elemento      
// console.log(miSegundoArreglo, 'shift eliminar elemento');

miSegundoArreglo.splice(1, 1) // eliminar e insertar elemento
// console.log(miSegundoArreglo, 'splice eliminar e insertar elemento');


const suma = 1 + 2;
const resta = 10 - 5;
const multiplicacion = 5 * 2;
const division = 10 / 2;
 
// console.log(suma, resta, multiplicacion, division);

const modulo = 10 % 3;
// console.log(modulo);

// const num = 5 una constante no se puede actualizar sin declararla como let
//const vs let 
let num = 5;
// num++
// num--
// asignacion
num += 3
// console.log(num);

//operadores logicos 
// igualdad estricta
const resultados  = 5 === 6
// igualdad no estricta
const resultados2 = 5 == '5'
console.log(resultados);

// or ||, and &&, not !

const resultadoOr = false  || true
// console.log(resultadoOr);

const resultadoAnd = true  && false
// console.log(resultadoAnd);

const resultadoNot = !true
console.log(resultadoNot);