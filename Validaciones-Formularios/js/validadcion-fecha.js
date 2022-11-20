

//identifico el elemento a usar
export function validador(input) {
    const tipoInput=input.dataset.tipo;
    if (validadores[tipoInput]) {
        validadores[tipoInput](input)
    }
}

const validadores={
    nacimiento: (input) => valida(input)
}
//con esto estamos reutilizando el manejador de eventos
/*const fechaNacimiento=document.querySelector("#birth");
fechaNacimiento.addEventListener("blur",(event)=>{
    valida(event.target);
});*/
function valida(element) {
    //variable que almacena la fecha del form
    const fecha=new Date(element.value);
    let mensaje="Para registrarse debe ser mayor de edad";
   if( !mayorDeEdad(fecha)){
    element.setCustomValidity(mensaje);
   }

}
function mayorDeEdad(fecha) {
    const fechaActul=new Date();
    const diferencia=new Date(
        fecha.getUTCFullYear()+18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return(fechaActul>diferencia);
}
