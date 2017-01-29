function generador(){
    var tiro = Math.round(Math.random()*2);
    var ppt;
    if (tiro==0){
        ppt="piedra";
    }

    else if (tiro==1){
        ppt="papel";
    }

    else if (tiro==2) {
        ppt="tijeras;"
    }
    else {
        ppt="error";
    }

    return ppt;
}

function aveces(){
    var proba = Math.round(Math.random()*1);
    var pog;
    if (proba == 1){
        alert("Ganaste");
    }
    else {
        alert("Perdiste");
    }
}

var texto = prompt("¿Qué eliges, piedra papel o tijeras?");

if(texto == generador()){
    alert("Empate");
}
else if (texto != generador()) {
    aveces();
}
