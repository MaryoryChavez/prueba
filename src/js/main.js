$(document).ready(init);

function init() {
    opciones();
    trabajos();
}

$("header .circle").hover(function () {
    $(this).css("border-color", "#fff");
}, function () {
    $(this).css("border-color", "rgba(255, 255, 255, 0)");
});

$("#sobre_mi .circle").hover(function () {
    $(this).css("border-color", "#604f6f");
}, function () {
    $(this).css("border-color", "rgba(255, 255, 255, 0)");
});

$("#habilidades .circle").hover(function () {
    $(this).css("border-color", "#fff");
}, function () {
    $(this).css("border-color", "rgba(255, 255, 255, 0)");
});


function opciones() {
    var headerClass = $(".header");
    var headerId = $("#header");
    var sobremiClass = $(".smi");
    var sobremiId = $("#sobre_mi");
    var skillsClass = $(".skills");
    var skillsId = $("#habilidades");
    var worksClass = $(".work");
    var worksId = $("#trabajos");
    var contactClass = $(".call");
    var contactId = $("#contacto");

    menu_desliz(headerClass, headerId);
    titulo_opcion(headerClass, "HOME");

    menu_desliz(sobremiClass, sobremiId);
    titulo_opcion(sobremiClass, "SOBRE MI");

    menu_desliz(skillsClass, skillsId);
    titulo_opcion(skillsClass, "HABILIDADES");

    menu_desliz(worksClass, worksId);
    titulo_opcion(worksClass, "TRABAJOS");

    menu_desliz(contactClass, contactId);
    titulo_opcion(contactClass, "CONTACTO");
}

function menu_desliz(_origen, _destino) {
    _origen.click(function () {
        $('html,body').animate({
            scrollTop: _destino.offset().top
        }, 1500);
    });
}

function titulo_opcion(_botonMenu, _msgMenu) {
    var mensaje = '<span class="msg_opcion" style="display:none;">' + _msgMenu + '</span>'
    _botonMenu.mouseover(function () {
        $(mensaje).appendTo(_botonMenu).show( "slow" );
    }).mouseout(function () {
            $("span").remove();
    });
}

function trabajos(){
    var AprosTit = "Proyecto Apros - TalentFest"
    var AprosDesc = 'Pagina Web, para la empresa Apros, ganadora del evento "Laboratoria Talent Fest" realizado en la ciudad de Arequipa <br>'+'<br> <b>Frameworks, Librerias usadas:</b> Bootstrap, Animate.css, sladerjs, Jquery';
    
    var LyftTit = "Lyft"
    var LyftDesc = 'Pagina Web First-movil que simula la aplicacion "Lyft". '+'Incluye un geolocalizador GPS que trabaja con la API de Google Maps.' + '<br><br> <b>Frameworks, Librerias usadas:</b> Bootstrap, Jquery, Alertfy';
    
    var todoTit = "Todo App"
    var todoDesc = 'Pequeña Aplicacion para listar y organizar tareas o notas diferentes <br>'+'<br> <b>Frameworks, Librerias usadas:</b> Bootstrap, Jquery';
    
    var userTit = "User Testing 360°"
    var userDesc = 'Pagina Web dinamica responsive para promocionar aplicación ficticia User 360°<br>'+'<br> <b>Frameworks, Librerias usadas:</b> Bootstrap, jquery';
    
    var studioTit = "Danza - Arte"
    var studioDesc = 'Trabajo de Maquetación. Layout multi-paginas para un estudio de danza<br>'+'<br> <b>Frameworks, Librerias usadas:</b> Bootstrap, jquery';
    
    var blogTit = "Blog Responsive"
    var blogDesc = 'Trabajo de Maquetación. Layout de Blog responsive<br>'+'<br> <b>Frameworks, Librerias usadas:</b> Ninguno';
    
    
    mostrar($(".imgb:nth-child(1)"), AprosTit,AprosDesc, 'https://maryorychavez.github.io/apros-TalentFest/','<img src="dist/images/webs/apros.PNG" alt="">');
    mostrar($(".imgb:nth-child(2)"), LyftTit,LyftDesc, 'https://maryorychavez.github.io/lyftProyect/','<img src="dist/images/webs/lyft.png" alt="">'
);
    mostrar($(".imgb:nth-child(3)"), todoTit,todoDesc, 'https://maryorychavez.github.io/twitter/','<img src="dist/images/webs/todoapp.png" alt="">');
    mostrar($(".dos:nth-child(1)"), userTit,userDesc, 'https://maryorychavez.github.io/user-360/','<img src="dist/images/webs/user360.png" alt="">');
    mostrar($(".dos:nth-child(2)"),studioTit,studioDesc, 'https://maryorychavez.github.io/danza-arte/','<img src="dist/images/webs/danza.png" alt="">');
    mostrar($(".dos:nth-child(3)"),blogTit,blogDesc, 'https://maryorychavez.github.io/responsive-blog/','<img src="dist/images/webs/blog.png" alt="">');
}

function mostrar(_opcionWeb,_titulo, _texto, _link,_imagen){
    $(_opcionWeb).click(function(){
        if($(".texto").length !=0){
            $(".texto").html(_texto);
            $(".imgWeb").html(_imagen);
        }
        if($(".tituloDesc").length !=0){
            $(".tituloDesc").html(_titulo);
        }
        
        $(".demo").attr("href", _link);
    });
}

