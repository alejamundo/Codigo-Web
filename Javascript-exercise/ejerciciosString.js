//contar numero de caracteres de una cadena 
const contar=(cadena) =>{
    (!cadena)?console.warn("Error"):console.log(cadena.length)
};
contar("Hola ")
//texto recortado segun numero de caracteres especificados
function cortar(cadena,n) {
    return cadena.substring(0,n);
}

console.log(cortar("Aleja",3));

//daddo un string retorne un array 

function convertir(cadena) {
    return cadena.split(' ');
}
console.log(convertir("Hola que tal como estas"));

//repetir testo n veces
function repetir(cadena,n) {
    return cadena.repeat(n);
}

console.log(repetir("Hola mundo. ",3));


//invertir una cadena de texto
const invertir=cadena=>{
    let=nuevacadena="";
    for (let index = cadena.length; index > -1; index--) {
        nuevacadena+=cadena.charAt(index); 
    }
    return nuevacadena
}
console.log(invertir("Alejandra"))

//contar el numero de veces que se repite una palabra 
const worldRepetida=(cadena,txt)=>{
    let array=cadena.split(" ");
    let cantidad=0;
    array.forEach(element => {
        if (element.includes(txt)) {
            cantidad++;
        } 
    });
    return cantidad;
   
}
console.log(worldRepetida("hola mundo adios mundo mundo","fox"))


//factorial de un numero
const factorial=(n)=>{
    let producto=n;
    for (let index = n-1; index > 0; index--) {
        producto*=n-1;//4-3-2-1 
        n--;      
    }
    return producto
}
console.log(factorial(10));

//dada una fecha de dat los años que han pasado hasta hoy
const anos=(fecha)=>{
    const fechaActual=new Date();
    const anoFechaActual=fechaActual.getFullYear();
    const naci=new Date(fecha);
    const anoNacimiento=naci.getFullYear();
    console.log(anoFechaActual-anoNacimiento+" Años");
}

anos("1984-4-23");
