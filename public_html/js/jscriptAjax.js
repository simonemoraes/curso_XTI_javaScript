/*
 autor: Simone Louzada Moraes
 Aula 43: DOM CORE API
 */

window.onload = function () {

    document.getElementById("botao").onclick = function () {
        
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function () {
            if( ajax.readyState ==4 ) {
                alert(ajax.responseText);
            }
        };
        ajax.open("POST", "ajax/arquivo.html");
        ajax.send(null);
        return false;
    };

};