
document.getElementById("iniciar").onclick=function(){
    //alert("si sirvio");
    function colorRandom(){
        var posibilidades = "0123456789ABCDEF";
        var color = "#";
        for (var i = 1; i<6; i++){
            color += posibilidades[Math.floor(Math.random()*15)];
        }
        return color;
    }


    function alturaRandom(){
        var resultado = Math.floor(Math.random()*600);
        return resultado;
    }

    function largoRandom() {
        var resultado = Math.floor(Math.random()*100);
        return resultado;
    }

    var altura = alturaRandom();
    var largo = largoRandom();
    var randomColor = colorRandom();



document.getElementById("objetivo").style.cssText="background-color:"+randomColor+";top:"+altura"px;left:"+largo"%;"
}
