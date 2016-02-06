/*
 Autor: Simone Louzada Moraes
 Descrição: Cookies JavaScript
 Obs: são informações que ficam armazenadas no computatdor do usuario
 só podem ser armazedos 20 cookies por dominio.
 */

window.onload = function () {
    document.getElementById("xti").onclick = ligar;
    setInterval("apresentarHoras()", 1000);

    var nome = readCookies("nome");
    if (nome == null) {
        nome = prompt("Qual o seu nome?");
        writeCookie("nome", nome, 1);
    }
};

function ligar() {
    document.getElementById("xti").src = "imagens/lampada-acesa.jpg";
    
    var nome = readCookies( "nome" );
    if( nome != null ) {
        alert( "É bom estar com você, " + nome );
    }
    
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

function writeCookie(name, value, days) {
    //Por default, não existe expiração, ou seja o cookie é temporário
    var expires = "";

    //Especifica o numero de dias para guardar o cookie
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires = " + date.toGMTString();
    }

    if (value != "" && value != null && value != "null") {
        //Define o cookie com o nome, valor e data de expiração
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

function readCookies(name) {
    //Encontra o cookie especificado e retorna o seu valor
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    //Exclui o cookie
    writeCookie(name, "", -1);
}