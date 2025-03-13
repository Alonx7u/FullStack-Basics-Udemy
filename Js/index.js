console.log("Hola Mundo");

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
console.log(miPrimeraVariable);

// mutabilidad
miPrimeraVariable = "hola segunda variable";
console.log(miPrimeraVariable);

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
console.log(miObjeto);

 // arreglo
const miPrimerArreglo = []
const miSegundoArreglo = [1, 2, 3, 'hola', miObjeto]

// console.log(miPrimerArreglo, miSegundoArreglo);

miSegundoArreglo.push(4)
console.log(miSegundoArreglo);