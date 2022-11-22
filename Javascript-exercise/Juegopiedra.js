//dos jugadores maquina usuario
//tres opciones 1=piedra, 2=papel, 3=tijeras
//un ganador un perdedor segun
//Jugador 2 usuario comparar y mostrar ganador
function jugar(tiroUsuario) {
    
    //tienen tres intentos
     let intentos=0;
    do {
        let tirorMaquina=tiroMaquina();
        //con dos que gane sera el ganador
        let ganaUsuario=0;
        let ganaMaquina=0;
        //Piedra le gana a tijeras
        //Papel le gana a piedra
        //tijeras le gana a papel
        //tres opciones 1=piedra, 2=papel, 3=tijeras
        if (tiroUsuario==1 && tirorMaquina==3) {
            ganaUsuario++;
        } if (tiroUsuario==2 && tirorMaquina==1) {
            ganaUsuario++;     
        }if (tiroUsuario==3 && tirorMaquina==2) {
            ganaUsuario++;  

        }if (tirorMaquina==1 && tiroUsuario==3) {
            ganaMaquina++;
        } if (tirorMaquina==2 && tiroUsuario==1) {
            ganaMaquina++;     
        }if (tirorMaquina==3 && tiroUsuario==2) {
            ganaMaquina++;     
        }else{
            console.log("empate");
        }
        //indicar el ganador
        if (ganaMaquina==2) {
            console.log("La maquina te gano con "+ganaMaquina+" aciertos");
            break;
        } if (ganaUsuario==2) {
            console.log("Eres el ganador con "+ganaUsuario+" aciertos"); 
            break;  
        }
        intentos++;
        console.log(intentos);
        
    } while (intentos!=3);
}

//Jugador 1 maquina
function tiroMaquina() {
    //generar tiro
    let randon=Math.floor(Math.random()*3+1);
    //mando el tiro
    return randon;
}

jugar(2);