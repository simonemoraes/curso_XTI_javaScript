/*
 autor: Simone Louzada Moraes
 descrição: Declarações e Estruturas
 Aula 41: DOM CORE API - mais generica e pode ser usada em para qualquer tipo de 
 documentação e independente de linguagem de programação.
 DOM HTML API - foi uma extensão a DOM CORE API criando-se um conjunto de 
 interfaces que mapeia todos os elementos, objetos de um documento HTML, ela é focada
 em trabalhar documentos HTML.
 */

window.onload = function () {
    /* 
     * Localizar elementos
     * By : Id, Name, Class, Tag, Seector
     *   
     */

    var tit = document.getElementById("tit_id");
    /*tit = document.getElementByClassName("tit_class");
     tit = document.getElementByTagName("h2");
     tit = document.querySelector("p > a");// retorna um elemento seletor css
     tit = document.querySelectorAll("p > a");// retorna varios elemento seletor css*/
    //alert(tit);

    //Alterar valores do HTML
    tit.innerHTML = "Outro Texto";
    //tit.style.color = "#0000FF";//DOM HTML API
    tit.setAttribute("style", "color:#0000FF");// DOM CORE API

    // Recuperar e alterar imagem
    var imagem = document.getElementsByTagName("img")[0];// Acessa o primeiro elemento da tag img
    imagem.style.border = "6px solid";//DOM HTML API
    //imagem.setAttribute("style", "border: 6px solid");//DOM CORE API
    
    /* Coleções de Elementos */
var img = document.images;
for (var i = 0; i < img.length; i++) {
    //alert(img[i].alt);
}
//alert(img[0]);
//alert(img.item(0));
//alert(img.namedItem("selecionada"));

//document.links[0].alt = "Titulo";
//alert(document.links[0].alt);

//alert(document.forms.length);

/* Alterar Elementos */
    
    
    var btn1 = document.getElementById("btnUm");
    btn1.onclick = function() {
        var l = document.links;
        for( var i=0; i<l.length; i++ ){
            adicionarLinha(l[i].alt, l[i].href);
        }
    };
    
    var btn2= document.getElementById("del");
    btn2.onclick = function() {       
       var tb = document.getElementsByTagName("table").item(0);
       tb.deleteRow(1);
    };
    
    alert(document.forms[0].elements.nome.value="Curso de DOM HTML API JavaScript");
    alert(document.forms[1].elements.estado[1].value);

};

function adicionarLinha(texto1, texto2) {
    var tb = document.getElementsByTagName("table").item(0);
    var row = tb.insertRow(-1);
    var cel0 = row.insertCell(0);
    var cel1 = row.insertCell(1);
    cel0.appendChild(document.createTextNode(texto1));
    cel1.appendChild(document.createTextNode(texto2));
}