document.getElementById("player").addEventListener('mouseover', sumarPuntos);

var puntos = 0;
var necesarios = 30;
var tiempo = 60;

function sumarPuntos(){
   puntos++;

   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/"+ necesarios + "<b>";
   var randNum = Math.round(Math.random()*500);
   var randNum2 = Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop = randNum + "px";
   document.getElementById("player").style.marginLeft = randNum2 + "px";

   if(puntos == 30){
      alert("GANASTE CRACK DEL MOUSE!!!");
   }
}




function restarTiempo(){
   tiempo--
   document.getElementById("tiempo").innerHTML = "Tiempo: " + tiempo;
   if(tiempo == 0){
      alert("Perdiste maestro");
      tiempo = 0;
      puntos = 0;
   }


}


setInterval(restarTiempo, 1000);



