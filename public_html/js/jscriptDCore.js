/*
 autor: Simone Louzada Moraes
 Aula 44: DOM CORE API
 */

window.onload = function () {
    
    /* 
       Criação de Nós 
        . createElement
        . createAttribute
        . createTextNode
      
        Atribuição de Nós
        . appendChild
        . removeChild
        . replaceChild
     */
    
    /* Criando e adicionando Elementos */
    var div = document.getElementsByTagName("div").item(0);
    
    var hr = document.createElement("hr");
    div.appendChild(hr);
    var atributo = document.createAttribute("style");
    atributo.value = "color: red";
    hr.setAttributeNode(atributo);
    //hr.setAttribute("style", "color:blue");
    //hr.style.color = "blue";//DOM HTML API
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Teste de Elemento"));
    div.firstChild.appendChild(li);
    var atributo2 = document.createAttribute("style");
    atributo2.value = "color: blue";
    li.setAttributeNode(atributo2);
    //li.setAttribute("style", "color:red");//DOM CORE API
    //li.style.color = "red";//DOM HTML API
    
    var select = document.createElement("select");
    select.setAttribute("id", "estados");
    var option = document.createElement("option");
    option.setAttribute("value", "DF");
    option.appendChild(document.createTextNode("Distrito Federal"));
    select.appendChild(option);
    div.appendChild(select);
    
    var option2 = document.createElement("option");
    option2.setAttribute("value", "SP");
    option2.appendChild(document.createTextNode("São Paulo"));
    select.appendChild(option2);
    div.appendChild(select);
    
    /* Removendo elementos */
    var del = div.firstChild;
    div.removeChild(del);
    
    /* Clonando nos */
    var select2 = select.cloneNode(true);
    div.appendChild(select2);
    
    var option3 = option.cloneNode(true);
    select.appendChild(option3);
    
};
/* Exemplos de DOM CORE API com "documentWriteln()" 
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
*/
/* Acessando Elementos irmãos no documento 
var li = ul.firstChild.lastChild.childNodes[1];
document.writeln("<br /><h3>** Acessando Elementos irmãos no documento **</h3><br />");
document.writeln("<h3>Acessando o irmão: " + li.firstChild.nodeValue + "</h3><br />");
document.writeln("<h3>Acessando o irmão anterior: " + li.previousSibling.firstChild.nodeValue + "</h3><br />");
document.writeln("<h3>Acessando o irmão posterior: " + li.nextSibling.firstChild.nodeValue + "</h3><br />");


document.writeln("<h3>Acessando o irmão: " + div.firstChild.firstChild.lastChild.lastChild.lastChild.firstChild.firstChild.nodeValue + "</h3><br />");
*/