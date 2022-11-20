//hacer que los metodos no sean visibles en el navegador
(() => {

    //selecciono la etiqueta a trabajar
    const btn = document.querySelector("[data-form-btn]");
    //metodo con una funcion anonima
    const createtask = (evento) => {
        //hacer que al generar evento la pagina no se refresque
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const value = input.value;
        input.value = "";
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        //agrego la clase a el elemento creado task
        task.classList.add("card");
        //creo elementos que tendra el div dinamicamente 
        const taskcontent = document.createElement("div");
        const checkcomplete = () => {
            const i = document.createElement("i");
            i.classList.add("far");
            i.classList.add("fa-check-square");
            i.classList.add("icon");
            i.addEventListener("click", completeTask);
            return i;
        };
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        /*const content=`
                <div>
                  <i class="far fa-check-square icon"></i>
                  <span class="task">${value}</span>
                </div>
                <i class="fas fa-trash-alt trashIcon icon"></i>`*/
        //gregar contenido html a un elemento seleccionado o creado li

        //agregar el elemento creado a un elemneto padre
        list.appendChild(task);
        task.appendChild(taskcontent);
        taskcontent.appendChild(checkcomplete());
        taskcontent.appendChild(titleTask);
        task.appendChild(deleteIcon());
    };
    //uso la etiqueta para generar un evento cuando se de click
    btn.addEventListener("click", createtask)


    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle("fas");
        element.classList.toggle("completeIcon");
        element.classList.toggle("far");

    }
    const deleteIcon=()=>{
        const i=document.createElement("i");
        i.classList.add("fas","fa-trash-alt","trashIcon","icon");
        i.addEventListener("click",deleteTask);
        return i;
    }
    const deleteTask=(event)=>{
        const padre=event.target.parentElement;
        padre.remove();
    }

})();