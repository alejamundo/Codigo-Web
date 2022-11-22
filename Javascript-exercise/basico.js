function suma(a, b, ...c) {
    let resul = a + b;

    //esta funcion se ejecuta por cada valor
    c.forEach(function (n) {
        resul += n;
    })
    return resul;
}
console.log(suma(1, 2, 2, 5));

//express operatos
const arr1 = [1, 2, 3, 4, 5],
    arr2 = [2, 4, 6, 8, 10];
//forme un arreglo de 10 pocisiones, expresion expandida 
const arr3=[...arr1,...arr2];
console.log(arr3)

//funciones declaradas
function saludo() {
    console.log("Hola mundo");
}

//function expresada
const saludos=function () {
    console.log("Hola");
}

//arrow function de una linea
const sumar=(a,b)=>a+b
console.log(sumar(9,9));

//arrow function con un parametro
const mifunction=nombre=>console.log(`hola ${nombre}`);
mifunction("Moae");

//capturar contexto del objeto en el que se encuentran
const perro={
    nombre:"boss",
    ladrar:()=>{
        console.log(this);
    }
}
perro.ladrar();

//objeto console
console.log(console)
console.error("error");
console.warn("Aviso")
console.info("mensaje informativo");
console.log(global.document)
console.clear();
console.group("Hola")
console.table(arr3);//crear tablas
console.table(perro);

console.time("cuanto tiempo tarda mi codigo");
const arreglo =Array(1000);
//llenar arreglo
for (let index = 0; index < arreglo.length; index++) {
    arreglo[index]=index;
}

console.timeEnd("cuanto tiempo tarda mi codigo")
console.log(arreglo)

console.count("contador")
//se ejecuta cuando fallka una prueba console. assert()

console.clear();
//objeto Date
console.log(Date());//fecha actual
let fecha=new Date();
console.log(fecha.getDate());//muestra el dia
console.log(fecha.getDay())//dia de la semana lunes
console.log(fecha.getMonth())//numero del mes
console.log(fecha.getFullYear())//Año
console.log(fecha.getHours())//hora exapcta
console.log(fecha.getMinutes())//minutos
console.log(fecha.toDateString())//solamente obtener la fecha
console.log(fecha.toLocaleString())//D-M-Y-relog
console.log(fecha.toLocaleDateString())//solo la fecha sin hora
console.log(fecha.toLocaleTimeString())//solo la hora
console.log(fecha.getTimezoneOffset())//minutos a que horas de la hola cero
console.log(fecha.getUTCDate());
console.log(Date.now());//instante ahora-- segundos desde el primero de enero de 1970 fecha time stand

