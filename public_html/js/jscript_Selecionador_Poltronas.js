/*
 Autor: Simone Louzada Moraes
 Descrição: Declarações e Estruturas
 Aula 20: Localizador de Poltronas
 
 */

//true = disponivel
//false = indisponivel


window.onload = function () {
    carregarPoltronas();

    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].onclick = verificarStatus(i);
    }
};

function verificarStatus(poltrona) {
    return function () {
        var src = document.getElementsByTagName("img")[poltrona].src;
        var msg = "";
        if(src.indexOf("poltrona_disponivel.jpg") > 0){
            msg = "Poltrona Disponivel";
        } else if(src.indexOf("poltrona_ocupada.jpg") > 0){
            msg = "Poltrona Ocupada";
        } else {
            msg = "Esta poltrona é sua";
        }
        
        alert(msg);
    };
}

var poltronas = [false, true, false, true, true, true, false];

function carregarPoltronas() {
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < imagens.length; i++) {
        if (poltronas[i]) {
            imagens[i].src = "imagens/poltrona_disponivel.jpg";
        } else {
            imagens[i].src = "imagens/poltrona_ocupada.jpg";
        }
    }
}

function selecionarPoltrona() {
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < poltronas.length; i++) {
        if (poltronas[i]) {
            imagens[i].src = "imagens/poltrona_selecionada.jpg";

            var quer = confirm("Você quer esta poltrona?");
            if (quer) {
                break;
            } else {
                imagens[i].src = "imagens/poltrona_disponivel.jpg";
            }
        }
    }
}

function selecionarCasal() {
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < poltronas.length; i++) {
        if (poltronas[i] && poltronas[i + 1]) {
            imagens[i].src = "imagens/poltrona_selecionada.jpg";
            imagens[i + 1].src = "imagens/poltrona_selecionada.jpg";

            var quer = confirm("Você quer estas poltronas?");
            if (quer) {
                break;
            } else {
                imagens[i].src = "imagens/poltrona_disponivel.jpg";
                imagens[i + 1].src = "imagens/poltrona_disponivel.jpg";
            }
        }
    }
}