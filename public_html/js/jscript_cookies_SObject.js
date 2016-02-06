/*
 Autor: Simone Louzada Moraes
 Descrição: Cookies JavaScript
 Obs: são informações que ficam armazenadas no computatdor do usuario
 só podem ser armazedos 20 cookies por dominio.
 */

window.onload = function() {
    
    var gravar = document.getElementById("gravar");
    var exibir = document.getElementById("exibir");
    var texto = document.getElementById("texto");
    
    // Grava a entrada de texto no localStorage
    gravar.onclick = function () {
        localStorage.setItem( "meuTexto", texto.value );
    };
    
    // Exibe o texto armazenado no localStorage
    exibir.onclick = function () {
        
       texto.value = localStorage.getItem( "meuTexto" );
    };
};