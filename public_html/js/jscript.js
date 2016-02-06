/*
 autor: Simone Louzada Moraes
 descrição: Declarações e Estruturas
 */

/* função que acende e apaga a luz dependendo da ação */
function ligar() {
    document.getElementById("luz").src = "imagens/lampada-acesa.jpg";
}

function desligar() {
    document.getElementById("luz").src = "imagens/lampada-apagada.jpg";
}

/* Calcula o IMC corporal */
function calcularIMC() {

    var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;
    var altura = +formulario.altura.value;

    var imc = kilos / (altura * altura);

    formulario.imc.value = imc.toFixed(2);


}

/* Função que recupera os os dados digitados no campo input e calcula o IMC */
$(document).ready(function () {
    $(".botaoUm").click(function () {
        var kilo = $("#id_kilo").val();
        var altura = $("#id_altura").val();
        var imc = kilo / (altura * altura);
        $("#id_imc").val( imc.toFixed(2) );        
    });
});

/* Função que limpa os campos input para um novo calculo */
$(document).ready(function () {
    $(".botaoDois").click(function () {
        $("#id_kilo").val("");
        $("#id_altura").val("");
        $("#id_imc").val("");
    });
});

/* Função que muda a cor do campo selecionado */
$(document).ready(function () {
    $("#id_kilo").focus(function () {
        $(this).css("background", "yellow");
    }).blur( function () {
        $(this).css("background", "white");
    });
    
    $("#id_altura").focus(function () {
        $(this).css("background", "yellow");
    }).blur( function () {
        $(this).css("background", "white");
    });
    
    
});

/* Var, function, return 
 function dividir(x,y) {
 var a = x/y;
 return a;
 }
 
 alert(dividir(6,2));
 */

/* Estruturas condicionais 
 var passou = false;
 
 if ( passou ) {
 alert("Contratado(a)");
 } else {
 alert("Estude mais!");
 }
 
 */

/* Objeto String 
 
 var x = new String("Texto dentro, de texto, de aspas");
 var rotulo = new String("Exemplos de Objeto String");
 var re = /[a-e]/;
 
 document.writeln("<p>" + rotulo.fontcolor("Red") + "</p>");
 
 document.writeln("Funções" + "<br /> <br />");
 document.writeln(x + "<br />");
 document.writeln(x.length + "<br />");
 document.writeln(x.charAt(x.length - 1) + "<br />");
 document.writeln(x.charCodeAt(x.length - 1) + "<br />");
 document.writeln(x.concat(" JavaScript") + "<br />");
 document.writeln(String.fromCharCode(115, 123, 234) + "<br />");
 document.writeln(x.indexOf("dentro") + "<br />");
 document.writeln(x.lastIndexOf("texto") + "<br />");
 document.writeln(x.match(re) + "<br />"); // retorna as ocorrencias de uma expressão regular
 document.writeln(x.replace("texto", "txt") + "<br /> <hr>"); // altera um texto na sua String
 
 document.writeln("Funções de recorte" + "<br /> <br />");
 document.writeln(x.substring(5, 8) + "<br />"); // Extrai os caracteres entre dois indices especificados
 document.writeln(x.substr(5, 8) + "<br />"); // Recebe o indice inicial do comprimento da subString
 document.writeln(x.slice(5, 8) + "<br />"); 
 document.writeln(x.split(",")[0] + "<br /> <hr>");
 
 
 document.writeln("Funções de Conversao de caractere" + "<br /> <br />");
 document.writeln(x.toLowerCase() + "<br />"); // Converte as letras em minusculas
 document.writeln(x.toUpperCase() + "<br /> <hr>"); // Converte as letras em maiusculas
 
 document.writeln("Funções para alterações visuais" + "<br /> <br />");
 document.writeln(x.big() + "<br />");
 document.writeln(x.blink() + "<br />");
 document.writeln(x.sup() + "<br />");
 document.writeln(x.strike() + "<br />");
 document.writeln(x.bold() + "<br />");
 document.writeln(x.italics() + "<br />");
 document.writeln(x.small() + "<br />");
 document.writeln(x.link("http://www.xti.com.br") + "<br />");
 document.writeln(x.fontcolor("blue") + "<br />");
 
 */

/* Array Indexado
 var paises = ["Brasil", "Russia", "India", "china"];
 
 alert(paises.join("**"));
 */