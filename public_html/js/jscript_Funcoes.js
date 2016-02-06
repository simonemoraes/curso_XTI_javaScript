/*
 Autor: Simone Louzada Moraes
 Descrição: Funções JavaScript
 Obs: As funçoes javascript são objetos 
 */

var x = new String();


/* Declarativas */
x = "* Funções Declarativas * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");

window.onload = function () {
    document.getElementById("d").onclick = function () {
        alert("teste");
    };
};

function somarSemParametro() {
    document.writeln("Função sem parametro sem retorno: " + (2 + 2) + "<br />");
}

function somarComParametro(x, y) {
    document.writeln("Função com parametro sem retorno: " + (x + y) + "<br />");
}

function somarComParametroERetorno(x, y) {
    return x + y;
}

somarSemParametro();
somarComParametro(2, 3);
document.writeln("Função com parametro com retorno: " + somarComParametroERetorno(2, 4) + "<br />");

/* Anonimas */
x = "* Funções Anonimas * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");
var soma2 = new Function("x", "y", "document.writeln(x+y);");

document.writeln("Função com parametro sem retorno: ");
soma2(2, 5);

/* Anonimas */
x = "* Funções Literais * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");

var somar3 = function (x, y) {
    document.writeln("Função com parametro sem retorno: " + (x + y) + "<br />");
}
somar3(2, 6);