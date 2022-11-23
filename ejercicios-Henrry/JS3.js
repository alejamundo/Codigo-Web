// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0]
}
console.log(devolverPrimerElemento(new Array(1, 2, 3)));


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1]
}
console.log(devolverUltimoElemento(new Array(2, 4, 6, 9)))

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length
}
console.log(obtenerLargoDelArray(new Array(2, 4, 5, 67)))

function incrementarPorUno(numbers) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    var nuevo = [];
    let i = 0;
    var doubles = numbers.map(function (x) {
        nuevo[i] = x + 1;
        i++;
    });
    return nuevo;
}
var numbers = [1, 5, 10, 15];
console.log(incrementarPorUno(numbers))


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array
}
console.log(agregarItemAlFinalDelArray(Array(2, 5), "hola"));


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array
}
console.log(agregarItemAlComienzoDelArray(Array(2, 5, 7), "Hola"));

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    const palabra = palabras[0] + " " + palabras[1];
    return palabra;
}
console.log(dePalabrasAFrase(Array("hola", "mundo")))

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    let esta = false;
    array.forEach(element => {

        if (element.toLowerCase() == elemento) {
            esta = true
        } else {
            esta = false
        }
    });
    return esta;
}

console.log(arrayContiene(Array("Andres", "Alejandra", "Linda"), "linda"));

function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let suma = 0;
    numeros.forEach(element => {
        suma += element;
    })
    return suma;
}
console.log(agregarNumeros(Array(5, 5, 5, 5, 5)));


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let suma = 0;
    let promedio = 0;
    resultadosTest.forEach(element => {
        suma += element;
    });
    promedio = suma / resultadosTest.length;
    return promedio
}

console.log(promedioResultadosTest(Array(5, 5, 5, 5)))

function numeroMasGrande(numbers) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let mayor = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i][j] > mayor) {
                mayor = numbers[i][j];
            }
        }
    }
    return mayor;
}
let matrix = [[9, 2,], [3, 5]];
console.log(numeroMasGrande(matrix))

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    let producto = 1;
    for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i]
    }
    return producto
}
console.log(multiplicarArgumentos(1, 4, 3));


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    let count = 0;
    arreglo.forEach(element => {
        if (element > 18) {
            count++;
        }
    })
    return count
}
console.log(cuentoElementos(Array(2, 77, 19)))

function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí  
    switch (numeroDeDia) {
        case 1:
            return "Es fin de semana"
            break;
        case 2:
            return "Es dia Laboral"
            break;
        case 3:
            return "Es dia Laboral"
            break;
        case 4:
            return "Es dia Laboral"
            break;
        case 5:
            return "Es dia Laboral"
            break;
        case 6:
            return "Es dia Laboral"
            break;
        case 7:
            return "Es fin de semana"
            break;

        default:
            return "Dia de la semana no disponible"
            break;
    }

}
console.log(diaDeLaSemana(4))

function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    return (n.toString().charAt(0) == 9 ? true : false)
}
console.log(empiezaConNueve(49))
console.log("***********************************************")
function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí 
    let igual = false;
    let count=0;
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[0]!=arreglo[i]) {
            count++;
        } 
    }
  
    return (count==0?true:false)
}
console.log(todosIguales(Array(1, 1, 1,1,1,1)))

function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
 
      var filtrados = array.filter(array.forEach(elemt=>{
        
      }));
    
}
console.log(mesesDelAño(Array("Enero","Febrero","Marzo","Abril","Diciembre")))


function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
}


function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
}