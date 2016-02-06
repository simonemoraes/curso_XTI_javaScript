/*
    Autor: Simone Louzada Moraes
    Descrição: Declarações e Estruturas
    Aula 30: Objeto Match
    Obs: Objeto RegExp(Regular Expression)
    
    Regular Expression
    (REGEXP, REGEX, RE)

    Expressões Regulares - padrões para busca e substituição
 */

/*Crindo a expressão regular com a sintaxe literal
var regex = /"JavaScript"/;
var string = "JavaScript";
*/

/*Crindo a expressão regular com o operador new
var regex = new RegExp("Javascript","i");
var string = "JavaScript";

document.writeln("<h1>Resultados</h1><br />" + "<h3>RegExp test(): " + regex.test(string) + "</h3><br />");
*/

var x = new String("");


/* FUNÇÕES E MODIFICADORES*/
var string = "Qual é o doce mais doce que o doce";
x = "* FUNÇÕES E MODIFICADORES *";

document.writeln("<h4>" + x.fontcolor("blue") + "</h4>");
document.writeln("<h3>RegExp test(): " + (/javascript/.test("JavaScript")) + "</h3><br />");// Retorna se o padrão aconteceu ou não, Sem modificador
document.writeln("<h3>RegExp test(): " + (/javascript/i.test("JavaScript")) + "</h3><br />");// Retorna se o padrão aconteceu ou não, Com modificador
document.writeln("<h3>RegExp exec(): " + (/doce/ig.exec(string)) + "</h3><br />");// Retorna a primeira ocorrencia de conteuda na string informada que atenda a expressão regular
document.writeln("<h3>RegExp Match(): " + (string.match(/doce/ig)) + "</h3><br />");// Retorna todas ocorrencia de conteuda na string informada que atenda a expressão regular

/* METACARACTERES */
x = "* METACARACTERES * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");
document.writeln("<h3>RegExp . : " + (/./.test("Pier21")) + "</h3><br />");
document.writeln("<h3>RegExp \w : " + (/\w/.test("Pier21")) + "</h3><br />");
document.writeln("<h3>RegExp \s : " + (/\s/.test("Pier 21")) + "</h3><br />");// procura por espaço
document.writeln("<h3>RegExp \d : " + (/\d/.test("Pier21")) + "</h3><br />");// procura por numero
document.writeln("<h3>RegExp \^ : " + (/\^21/.test("Pier21")) + "</h3><br />");// procura uma ocorrencia no inicio
document.writeln("<h3>RegExp \$ : " + (/\d$/.test("Pier21")) + "</h3><br />");// procura uma ocorrencia no final
document.writeln("<h3>RegExp \$ : " + (/\d\d\d\d\d\-\d\d\d$/.test("25561-162")) + "</h3><br />");// expressão para verificar se o cep está sendo informado no padrão correto

/* QUANTIFICADORES */
x = "* QUANTIFICADORES * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");
document.writeln("<h3>RegExp * : " + (/\d*/.test("Pier21")) + "</h3><br />"); // verificando se existe a ocorrencia de digitos de zero ou mais
document.writeln("<h3>RegExp + : " + (/\d+/.test("Pier21")) + "</h3><br />"); // verificando se existe pelo uma ocorrencia ou mais
document.writeln("<h3>RegExp ? : " + (/\d?/.test("Pier21")) + "</h3><br />"); // verificando se existe a ocorrencia de digitos de zero ou uma vez
document.writeln("<h3>RegExp {} : " + (/\d{2}/.test("Pier21")) + "</h3><br />"); // pode se declarar a quantidade de vez que quer que apareça
document.writeln("<h3>RegExp Avalidação de Cep : " + (/^\d{5}\-\d{3}$/.test("25561-162")) + "</h3><br />");// expressão para verificar se o cep está sendo informado no padrão correto com quantificadores
document.writeln("<h3>RegExp Avalidação de Data : " + (/^\d{2}\/\d{2}\/\d{4}$/.test("12/02/2016")) + "</h3><br />");// expressão para verificar se o data está sendo informado no padrão correto com quantificadores
document.writeln("<h3>RegExp Avalidação de email : " + (/\w+@\w+\.\w{2,3}/.test("simone.moraes77@gmail.com")) + "</h3><br />");// expressão para verificar se o email está sendo informado no padrão correto com quantificadores

/* Agrupadores - Caracteres Opcionais */
x = "* Agrupadores - Caracteres Opcionais * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");
document.writeln("<h3>RegExp [a-z] : " + (/c[ae]u/.test("cau")) + "</h3><br />");
document.writeln("<h3>RegExp [0-9] : " + (/\d[\d\.]*/.test("23.45")) + "</h3><br />");

/* Buscas e substituições */
var string = "Qual é o doce mais doce que o doce";

x = "* Buscas e substituições * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");

document.writeln("<h3>RegExp Match: " + (string.match(/doce/ig)) + "</h3><br />");
document.writeln("<h3>RegExp Replace: " + (string.replace(/doce/ig, "DOCINHO")) + "</h3><br />");// O replace modifica a palavras encontrada

string = "O rato roeu a roupa do rei de roma";
document.writeln("<h3>RegExp Match: " + (string.match(/r[a-z]/ig)) + "</h3><br />");
document.writeln("<h3>RegExp Replace: " + (string.replace(/r[a-z]/ig, "XXXX")) + "</h3><br />");// O replace modifica a palavras encontrada


x = "Exercitando * ";
document.writeln("<br /><br /><h4>" + x.fontcolor("blue") + "</h4>");

var url = "www.xti.com.br/clientes-2011.html";
// "http://www.xti.com.br/2011/clientes.jsp";

var re = /www.xti.com.br\/\w{2,}-\d{4}\.html/;
document.writeln("<h3>RegExp: " + re.test(url) + "</h3><br />");
var re = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/;
document.writeln("<h3>RegExp: " + url.replace(re, "http://$1/$3/$2.jsp") + "</h3><br />");