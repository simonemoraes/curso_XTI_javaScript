/*
    autor: Simone Louzada Moraes
    descrição: Declarações e Estruturas
    Aula 30: Objeto Date
 */

var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novenbro", "Dezembro"];
var data = new Date("jan/17/2015 13:18:30");
/* Metodo get */
//alert(data.getDate()); // retorna o dia do mes
//alert(dias[data.getDay()]); // retorna o dia da semana
//alert(data.getFullYear()); // retorna o dia o ano com quatro digitos
//alert(data.getHours()); // retorna o dia as horas
//alert(data.getMilliseconds()); // retorna a quantidade de milisegundos
//alert(data.getMinutes()); // retorna a quantidade de minutos
//alert(mes[data.getMonth()]); // retorna o mes
//alert(data.getSeconds()); // retorna a quantidade de segundos
//alert(data.getTime()); // retorna a quantidade total de milisegundos
//alert(data.getTimezoneOffset()); // retorna a diferença de horas do Brasil e gnt
//alert(Date.parse(data)); // retorna o numero de milissegundos de uma data espessifica

/* Metodo set*/
data.setFullYear(2016);

//alert(data); // retorna a quantidade de minutos

alert(data.toLocaleDateString());




