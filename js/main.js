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

//----------->> Mensaje Hero <<-----------

function maquina(container,texto,intervalo){
   var long = texto.length;
   var cnt = document.getElementById(container);
   var i=0;
   var timer = setInterval(function(){
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      if(i >= long){
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,long);
         return true;
      } else {
         i++;
      }},intervalo);
};
var texto = "¡hola! mi nombre es maryory chavez. web developer.";
maquina("letras",texto,110);