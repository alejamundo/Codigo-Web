//Sincrono bloqueante acda operacion bloquea el hilo principal
(() => {
    console.log("inicio");
    function name(params) {
        console.log("Uno");
        console.log("Dos");
        console.log("Tres");
    }
    function todo() {
        name();
        console.log("end");
    }
    todo();
    console.log("e****************************************************************e");
})();


//Asincronica no bloqueante
(() => {
    console.log("inicio");
    function name() {
        setTimeout(function () {
            console.log("Uno");
            console.log("Dos");
            console.log("Tres");
        }, 1000)
    }
    function todo() {
        setTimeout(function () {
            name();
            console.log("end");
        }, 0);

    }
    todo();
    console.log("e****************************************************************e");
})();

function cuadradoCallback(valor, callback) {
    //una funcion se invoca dentro de si recursividada
    setTimeout(() => {
        callback(valor, valor * valor);
    }, 0 | Math.random() * 100)
}

cuadradoCallback(0, (valor, resul) => {
    console.log("inicia callback");
    console.log(`callback : ${valor}, ${resul}`);
    cuadradoCallback(1, (valor, resul) => {
        console.log("inicia callback");
        console.log(`callback : ${valor}, ${resul}`);
        cuadradoCallback(5, (valor, resul) => {
            console.log("inicia callback");
            console.log(`callback : ${valor}, ${resul}`);
        })
    })
});

function cuadradoPromise(value) {
    //tienen dos partes la que resulve y la que recahza
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve({
            value:value,
            result:value*value
           });
        }, 0 | Math.random() * 100)
    })
   

}
//metodos para ir trabjando la sincronia con las pronesas

cuadradoPromise(0)
//cuando la promesa se cumple
.then((obj)=>{
    console.log("inicio promesa");
    console.log(obj);//el resolve retorna un obj
    return cuadradoPromise(1)
})
.then(obj=>{
    console.log(obj);//el resolve retorna un obj
})
.catch();