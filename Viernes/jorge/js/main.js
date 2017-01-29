document.getElementById("boton").onclick=function(){

    prompt("¿Cual es tu pregunta?");

    var texto;
    texto = generador();
    //document.getElementById('texto') = texto;
    //document.write(texto);
    document.getElementById("texto").htmlText= texto;


    function generador(){
        var opc = Math.round(Math.random()*4);
        var txt;
        if (opc==0){
            txt="Si";
        }

        else if (opc==1){
            txt="No";
        }

        else if (opc==2) {
            txt="Puede ser";
        }
        else if (opc==3){
            txt="Poco probable";
        }
        else if (opc==4){
            txt="Repite la pregunta";
        }

        return txt;
    }
};
