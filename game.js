document.getElementById("player").addEventListener('mouseover', sumarPuntos);

var puntos = 0;
var necesarios = 30;
var tiempo = 60;

function restarTiempo(){
   tiempo--
   document.getElementById("tiempo").innerHTML = "Tiempo: " + tiempo;
   if(tiempo == 0){
      respuesta = confirm("Perdiste maestro" + "Deseas jugar una vez mas?");
         if(respuesta == true){
             // El metodo location.reload() vuelve a cargar la URL actual al ser ejecutado 
            // en el navegador, de esta manera actualizamos cuando el jugador pierde
            location.reload();}
         else{
            var salir = document.getElementById("limpio");
            salir.innerHTML = "Gracias por jugar"
               
            }
      // alert("Perdiste maestro");      
            // tiempo = 0;
            // puntos = 0;
   
         
   }
}

function sumarPuntos(){
   puntos++;

   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/"+ necesarios + "<b>";
   var randNum = Math.round(Math.random()*500);
   var randNum2 = Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop = randNum + "px";
   document.getElementById("player").style.marginLeft = randNum2 + "px";

   if(puntos == 30){

      respuesta = confirm("GANASTE CRACK DEL MOUSE!!!" + "Deseas jugar una vez mas?");
      if(respuesta == true){
         location.reload();}
         else{
            var salir = document.getElementById("limpio");
        
            salir.innerHTML = "Gracias por jugar"
            
         }
      // alert("GANASTE CRACK DEL MOUSE!!!");           
   }
}







setInterval(restarTiempo, 1000);



