function sonido(medio){
    const reproductor=document.getElementById("reproductor_audio");
    reproductor.src="audio/" +medio + ".mp3"
    reproductor.play();
}


// Menu Actividades 1

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");        
  var contenedor_seleccionado=ev.target.closest('div');

  if (data=='drag1' && contenedor_seleccionado.id== 'div5' || 
    data=='drag2' && contenedor_seleccionado.id== 'div1' || 
    data=='drag3' && contenedor_seleccionado.id== 'div4'|| 
    data=='drag4' && contenedor_seleccionado.id== 'div3'|| 
    data=='drag5' && contenedor_seleccionado.id== 'div6'|| 
    data=='drag6' && contenedor_seleccionado.id== 'div2' ) {

    var imageElement = document.getElementById(data);
    contenedor_seleccionado.innerHTML='';
    contenedor_seleccionado.appendChild(imageElement);
    contenedor_seleccionado.classList.add("completado");
    comprobarImagen();
    }          
  }

function comprobarImagen() {
  var sombras = document.querySelectorAll(".sombras");
  var completo = true;

  sombras.forEach(function(zone) {
      if (!zone.classList.contains("completado")) {
          completo = false;
      }
  });

  if (completo) {
      mostrarModal();
  }
}

function mostrarModal() {
  var modal = document.getElementById("Modal");
  modal.style.display = "block";
  document.getElementById("aplausos").play();
}

document.querySelector(".close").onclick = function() {
  var modal = document.getElementById("Modal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("Modal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
}





              

            