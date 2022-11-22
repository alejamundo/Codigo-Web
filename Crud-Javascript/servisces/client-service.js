const crearNuevalinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido = `
<td class="td" data-td>${nombre}</td>
<td>${email}</td>
<td>
  <ul class="table__button-control">
    <li>
      <a
        href="../screens/editar_cliente.html"
        class="simple-button simple-button--edit"
        >Editar</a
      >
    </li>
    <li>
      <button
        class="simple-button simple-button--delete"
        type="button"
      >
        Eliminar
      </button>
    </li>
  </ul>
</td>`;
    linea.innerHTML = contenido;
    return linea;
};
const table = document.querySelector("[data-table]");
//listar clientes para hacer las promesas
const lista = () => {
    const promesa = new Promise(resolve, reject) => {
    //crear una comunicacion entre el froinend y backend
        const http = new XMLHttpRequest();
        //abriri http metdos (metdod url)
        http.open("GET", "http://localhost:3000/perfil");
        //enviar la pericion
        http.send();//enviamos esta peticion al servidor
        //una vez que termine realice la funcion
        http.onload = () => {
            //obtenemos los datos del servidor
            const response = JSON.parse(http.response);//convertir texto a array
            //estaod de la peticion
            if (http.status >= 400) {//hay un error en la peticion
                reject(response)
            } else {
                resolve(response);//se ejecuto satisfactoriamente
            }
        };
    });
    return promesa;
};

   

//reccorremos el arreglo de los datos que nos devuelve la peticion
//data.forEach(perfil => {
//  const nuevaLinea = crearNuevalinea(perfil.nombre, perfil.email);
//   table.appendChild(nuevaLinea);
//});
console.log(lista());


//console.log(http);