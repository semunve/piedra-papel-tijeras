
        alert("Juguemos a piedra,papel o tijeras!!")
       var j=0;
       var m=0;
       
      var jugador;
      var elegido;

    const eligePc=[
        "piedra","papel","tijeras"
    ]
    function reiniciar(){

   
    var aleatorio=Math.floor(Math.random()*eligePc.length);
     elegido=eligePc[aleatorio];
    console.log(elegido)
    }
   function piedra(){
    jugador="piedra"
    comparar()
   }
   function papel(){
    jugador="papel"
    comparar()
   }
   function tijeras(){

    jugador="tijeras"
    comparar()
   }

   function comparar(){
    if(jugador==elegido){
        alert("¡Empate!La máquina también eligió "+elegido)
    }else if ((jugador == "piedra" && elegido == "tijeras") ||
                   (jugador == "papel" && elegido == "piedra") ||
                   (jugador == "tijeras" && elegido == "papel")) {
            alert("¡Ganaste!La máquina eligió "+ elegido);
            j++;
            document.getElementById("jugador").innerHTML="Jugador :" +j;
            
   }else{
    (jugador=="piedra" && elegido == "papel") ||
    (jugador=="papel" && elegido=="tijeras") ||
    (jugador=="tijeras" && elegido=="piedra")
    alert("¡Perdiste!La máquina eligió "+elegido)
    m++;
    document.getElementById("maquina").innerHTML="Máquina :"+ m;
   }
 reiniciar()  
}
window.onload=reiniciar;


