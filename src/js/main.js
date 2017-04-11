$(document).ready(opciones);

function init() {
    console.log("inicio");
}

$(".circle").hover(function () {
    $(this).css("border-color", "#fff");
}, function () {
    $(this).css("border-color", "rgba(255, 255, 255, 0)");
});
/*
$(".smi").click(function() {
    $('html, body').animate({
        scrollTop: $("#sobre_mi").offset().top
    }, 2000);
});*/

function opciones() {
    menu(".hero", "#hero");
    menu(".smi", "#sobre_mi");
    menu(".skills", "#habilidades");
    menu(".work", "#trabajos");
    menu(".call", "#contacto");
}

function menu(origen, destino) {
    $(origen).click(function () {
        $('html,body').animate({
            scrollTop: $(destino).offset().top
        }, 1500);
    });
}

