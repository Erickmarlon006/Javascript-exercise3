var ano = document.getElementById("ano");
var vericação = document.getElementById("verificar");
var formulario = document.getElementById("ano-bissexto");

formulario.onsubmit = function(){
    if(parseInt(ano.value) % 4 == 0 && (parseInt(ano.value) % 100 != 0 || parseInt(ano.value) % 400 == 0)){
        alert("Esse ano é bissexto");

    }else{
        alert("Esse ano não é bissexto");
    }
}