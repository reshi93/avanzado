/*alert("js");

if (jQuery){
    alert("hola");
}*/

/*$(".circulo").click(function(){
    alert("Soy el circulo");
})

$("#cuadrado").click(function(){
    alert("Soy un cuadrado");s
})*/

/*$("div").click(function(){
    alert("soy un div");
})

$("p").click(function(){
    alert("soy un parrafo");
})*/

/*$("*").click(function(){
    alert("soy un algo");
})*/

/*$(".circulo").click(function(){
    $("p").html("Texto reemplazado");
})*/

/*$(".circulo").click(function(){
    alert($("iframe").attr("src"));
    $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
})*/

/*$("#pag1").click(function(){
    $("iframe").attr("src","http://www.jornada.unam.mx/ultimas");
    $(".circulo").attr("id","pag2");
})

$("#pag2").click(function(){
    $("iframe").attr("src","http://www.fciencias.unam.mx/");
})*/

/*$("button").click(function(){
    $(".circulo").css({
        'width': '300px',
        'height': '300px',
        'border-radius': '150px',
    });
})*/

/*$("button").click(function(){
    $(".circulo").addClass("circulo2")
})*/

/*$("button").click(function(){
    $(".circulo").hide()
})*/

$(".circulo").click(function(){
    $(this).animate({
        width:"300px",
        height:"300px"
    }, 4000)
})
