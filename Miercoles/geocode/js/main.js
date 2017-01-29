$(document).ready(function(){
  var imagenes = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];

  $(".fondo").css('background-image','url('+ imagenes [Math.floor(Math.random()*5)]+')');

$("#mandar").click(function(){
    var direccion=$("#direc").val();


var direccion ="Tultitlan11VergeldelSur";
var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion +'&key=AIzaSyD1ud9dXL3ws5p6YZB6r2cyNLSJdpAJWsk';

$.ajax({
  dataType: "json",
  url: link,
  success: recibirDatos
});

function recibirDatos(json){
  var informacion = json;
  var codigo=informacion.results[0].address_components[6].long_name;
  $("#respuesta").append('<div class="offset-m3 col m6 card-panel grey lighten-3"><h6>Tu código postal es:'+codigo+'</h6></div>')
}
});
});
