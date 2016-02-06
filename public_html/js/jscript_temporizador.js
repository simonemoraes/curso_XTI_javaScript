/*
 Autor: Simone Louzada Moraes
 Descrição: BOM(window) JavaScript
 BOM BROWSER OBJECT MODEL
 */

window.onload = function() {
    document.getElementById("xti").onclick = ligar;
    setInterval("apresentarHoras()", 1000);//executa a função no tempo determinado
};

function ligar() {
    document.getElementById("xti").src = "imagens/lampada-acesa.jpg";
    setTimeout("desligar()", 3000);// esta função nao se repete
}

function desligar() {
    document.getElementById("xti").src = "imagens/lampada-apagada.jpg";
}

function apresentarHoras() {
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}