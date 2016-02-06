/*
    autor: Simone Louzada Moraes
    descrição: Declarações e Estruturas
    Aula 30: Objeto Match
    Obs: Objeto Match não tem construtor, é um objeto estático
 */


document.writeln("<h3>Math PI: " + Math.PI + "</h3><br />"); // retorna o valor de PI
document.writeln("<h3>Math abs: " + Math.abs(3) + "</h3><br />"); // retorna o valor absoluto
document.writeln("<h3>Math max: " + Math.max(2, 3.7, -5, 9, 1) + "</h3><br />"); // retorna o maior valor da lista
document.writeln("<h3>Math min: " + Math.min(2, 3.7, -5, 9, 1) + "</h3><br />"); // retorna o menor valor de uma lista
document.writeln("<h3>Math round: " + Math.round(3.7) + "</h3><br />"); // arredonda o valor informado para um numero inteiro mais proximo
document.writeln("<h3>Math flor: " + Math.floor(3.3) + "</h3><br />"); // arredonda o valor informado sempre para baixo
document.writeln("<h3>Math ceil: " + Math.ceil(3.3) + "</h3><br />"); // arredonda o valor informado sempre para cima
document.writeln("<h3>Math pow: " + Math.pow(2,2) + "</h3><br />"); // eleva um numero a uma determinada potencia
document.writeln("<h3>Math sqrt: " + Math.sqrt(64) + "</h3><br />"); // extrai a raiz quadrada de um numero

//retorna um numero randomico entre dois valores
var numero = Math.floor(Math.random() * 10+1);
document.writeln("<h3>Math random: " + numero + "</h3><br />"); 

document.writeln("<h3>Math exp: " + Math.exp(3) + "</h3><br />"); // eleva o numero de euler a potencia informada
document.writeln("<h3>Math log: " + Math.log(3) + "</h3><br />"); // extrai o logaritimo natural do numero informado
document.writeln("<h3>Math sin: " + Math.sin(3) + "</h3><br />"); // retorna o valor do seno do angulo informado
document.writeln("<h3>Math cos: " + Math.cos(3) + "</h3><br />"); // retorna o valor do coseno do angulo informado
document.writeln("<h3>Math tan: " + Math.tan(3) + "</h3><br />"); // retorna o valor da tangente do angulo informado
document.writeln("<h3>Math asin: " + Math.asin(0) + "</h3><br />"); 
document.writeln("<h3>Math acos: " + Math.acos(0) + "</h3><br />"); 
document.writeln("<h3>Math atan: " + Math.atan(0) + "</h3><br />"); 
document.writeln("<h3>Math atan2: " + Math.atan2(1,1) + "</h3><br />"); 
