$(document).ready(function () {
    console.log("si");
})

$('.menu-btn').on('click', function () {

    var elem = $(this),
        item = $('.menu-item'),
        active = 'is-active',
        play = 'menu-item-play';

    if (elem.hasClass(active)) {
        elem.removeClass(active);
        $(item.get().reverse()).each(function (i) {
            var row = $(this);
            setTimeout(function () {
                row.removeClass(play);
            }, 50 * i);
        });
    } else {
        elem.addClass(active);
        item.each(function (i) {
            var row = $(this);
            setTimeout(function () {
                row.addClass(play);
            }, 50 * i);
        });
    }

});


function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   var longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   var cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   var timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto = "hola! mi nombre es maryory chavez. web developer.";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquinas",texto,100);