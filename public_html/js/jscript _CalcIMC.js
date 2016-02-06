/*
 autor: Simone Louzada Moraes
 descrição: Calculando imc
 */

/* Função que recupera os os dados digitados no campo input e calcula o IMC */
$(document).ready(function () {
    $("#id_alerta").hide();
    $("#id_alerta").css("text-align", "center");

    $(".botaoUm").click(function () {
        var kilo = $("#id_kilo").val();
        var altura = $("#id_altura").val();
        var valorIndice = kilo / (altura * altura);

        $("#id_imc").val(valorIndice.toFixed(2));

        var imc = $("#id_imc").val();
        var classificacao = "";

        if (imc <= 20) {
            $("#id_alerta").fadeToggle();
            
            //classificacao = "Classificação: Abaixo do Peso!";
            classificacao = calcula(1);
            $("#id_alerta").text(classificacao);

        } else if (imc > 20 && imc <= 25) {
            $("#id_alerta").fadeToggle();

            classificacao = calcula(2);
            $("#id_alerta").text(classificacao);

        } else if (imc > 25 && imc <= 30) {
            $("#id_alerta").fadeToggle();

            classificacao = calcula(3);
            $("#id_alerta").text(classificacao);

        } else if (imc > 30 && imc <= 35) {
            $("#id_alerta").fadeToggle();

            classificacao = calcula(4);
            $("#id_alerta").text(classificacao);

        } else if (imc > 35 && imc <= 40) {
            $("#id_alerta").fadeToggle();

            classificacao = calcula(5);
            $("#id_alerta").text(classificacao);

        } else if (imc > 40 && imc <= 50) {
            $("#id_alerta").fadeToggle();

            classificacao = calcula(6);
            $("#id_alerta").text(classificacao);

        } else {
            $("#id_alerta").fadeToggle();

            classificacao = calcula(7);
            $("#id_alerta").text(classificacao);
        }

    });


    /* Função que limpa os campos input para um novo calculo */
    $(".botaoDois").click(function () {
        $("#id_alerta").hide();
        $("#id_kilo").val("");
        $("#id_altura").val("");
        $("#id_imc").val("");
    });

    /* Função que muda a cor do campo selecionado */
    $("#id_kilo").focus(function () {
        $(this).css("background", "yellow");
    }).blur(function () {
        $(this).css("background", "white");
    });

    $("#id_altura").focus(function () {
        $(this).css("background", "yellow");
    }).blur(function () {
        $(this).css("background", "white");
    });
});

function calcula (valor) {
    var cont = 1;
   
    var resultados = [[]]
    $("th").each(function (indiceColuna) {

        if (indiceColuna == 2) {

            $("td").each(function (index) {
                index = index + 1;

                if ((index % 3) == 0) {
                    var nomeLinha = $(this).text();

                    resultados[cont] = [cont, nomeLinha];
                    //alert(resultados[cont][1]);
                    cont = cont + 1;



                }
            });
        }
    });
    
     return resultados[valor][1];
   
}

