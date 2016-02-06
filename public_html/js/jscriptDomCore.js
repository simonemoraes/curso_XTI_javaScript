/*
 autor: Simone Louzada Moraes
 Aula 43: DOM CORE API
 */

window.onload = function () {
    
    /* Navegar na árvore do documento */
    /* Tipos de nós (Documento, Elemento, Atributo e Texto) */
    /* Parentesco de nós ( pai=parent, filho=child, texto=sibling ) 
     * nodeType - 1=Elemento, 2=Atributo, 3=Texto */

     /* Exemplos de DOM CORE API com "window.onload" */    
    //var div = document.getElementsByTagName("div").item(0);
    
    //alert("Elemento pai: " + div);// Elemento pai
    //alert("Elemento filho: " + div.childNodes);// Elemento filho
    //alert("Quantos filhos: " + div.childNodes.length);// retorna a quantidade de flihos
    //alert("Nome do filho na poisição 0: " + div.childNodes.item(0).nodeName);// Retorna o nome do filho na posição determinada
    //alert("Nome do filho na poisição 1: " + div.childNodes.item(1).nodeName);// Retorna o nome do filho na posição determinada
    //alert("Nome do pai do elemento: " + div.parentNode.nodeName); // retorna o nome do pai do elemento
   
    //var ul = div.childNodes.item(0);
    //alert(ul);// filhos
    //alert(ul.nodeName);//representa o nome
    //alert(ul.nodeType);//representa o tipo do elemento onde, 1=Elemento, 2=Atributo, 3=Texto

    //alert(ul.childNodes.length);
    //alert(ul.firstChild);//primeiro filho
    //alert(ul.lastChild);//ultimo filho
    //alert(ul.firstChild.firstChild.nodeValue);

};
/* Exemplos de DOM CORE API com "documentWriteln()" */
var div = document.getElementsByTagName("div").item(0);

document.writeln("<br /><h3>** Elemento DIV **</h3><br />");
document.writeln("<h3>Elemento pai: " + div.nodeName + "</h3><br />");// Elemento pai
document.writeln("<h3>Elemento filho: " + div.childNodes + "</h3><br />");// Elemento filho
document.writeln("<h3>Quantos filhos: " + div.childNodes.length + "</h3><br />");// retorna a quantidade de flihos
document.writeln("<h3>Tipo do Elemento: " + div.nodeType + "</h3><br />");// Retorna o tipo do elemento onde, 1=Elemento, 2=Atributo, 3=Texto
document.writeln("<h3>Nome do filho na poisição 0: " + div.childNodes.item(0).nodeName + "</h3><br />");// Retorna o nome do filho na posição determinada
document.writeln("<h3>Nome do pai do elemento div: " + div.parentNode.nodeName + "</h3><br />");// retorna o nome do pai do elemento

var ul = div.childNodes.item(0);
document.writeln("<br /><h3>** Elemento UL **</h3><br />");
document.writeln("<h3>Elemento pai: " + ul + "</h3><br />");// Elemento pai
document.writeln("<h3>Elemento pai: " + ul.nodeName + "</h3><br />");// Elemento pai
document.writeln("<h3>Nome do Filho: " + ul.childNodes.item(0) + "</h3><br />");// Nome do filho do Elemento
document.writeln("<h3>Nome do Filho: " + ul.childNodes.item(0).nodeName + "</h3><br />");// Nome do filho do elemento Elemento
document.writeln("<h3>Quantos filhos: " + ul.childNodes.length + "</h3><br />");// retorna a quantidade de filhos
document.writeln("<h3>Primeiro filho: " + ul.firstChild + "</h3><br />");// retorna o primeiro filho
document.writeln("<h3>Primeiro filho: " + ul.firstChild.nodeName + "</h3><br />");// retorna o nome do primeiro filho
document.writeln("<h3>Ultimo filho: " + ul.lastChild + "</h3><br />");// retorna o ultimo filho
document.writeln("<h3>Ultimo filho: " + ul.lastChild.nodeName + "</h3><br />");// rretorna o nome do ultimo filho
document.writeln("<h3>Primeiro filho do primeiro filho: " + ul.firstChild.firstChild.nodeValue + "</h3><br />");// retorna o valor do texto do primeiro filho
document.writeln("<h3>Primeiro filho do primeiro filho: " + ul.firstChild.firstChild.nodeName + "</h3><br />");// retorna o nome do valor do texto do primeiro filho
document.writeln("<h3>Primeiro filho do primeiro filho: " + ul.firstChild.firstChild.nodeType + "</h3><br />");// retorna o tipo do texto do primeiro filho

/* Acessando Elementos irmãos no documento */
var li = ul.firstChild.lastChild.childNodes[1];
document.writeln("<br /><h3>** Acessando Elementos irmãos no documento **</h3><br />");
document.writeln("<h3>Acessando o irmão: " + li.firstChild.nodeValue + "</h3><br />");
document.writeln("<h3>Acessando o irmão anterior: " + li.previousSibling.firstChild.nodeValue + "</h3><br />");
document.writeln("<h3>Acessando o irmão posterior: " + li.nextSibling.firstChild.nodeValue + "</h3><br />");


document.writeln("<h3>Acessando o irmão: " + div.firstChild.firstChild.lastChild.lastChild.lastChild.firstChild.firstChild.nodeValue + "</h3><br />");