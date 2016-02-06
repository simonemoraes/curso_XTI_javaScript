/*
 Autor: Simone Louzada Moraes
 Descrição: Eventos JavaScript
 Manipuladores de eventos: são as funçoes a serem executadas quando um evento acontecer
 Disparador de evento: é o proprio elemento html. Ex: botão, link
 */

/* DOM 0 
 
 window.onload = function() {
 var btn = document.getElementById("botao");
 btn.onclick = function() {um();};
 };
 
 
 function um() {alert('um');}
 */

/* DOM 2 */
/* addEventListener - adiciona evento*/
window.onload = function () {
    var btn = document.getElementById("botao");
    var div = document.getElementById("primeira");

/*
    btn.onclick = function (evt) {
        var oEvento = evt ? evt : window.event;
        alert(window.event.type);// Este evento é exclusivo do Internet Explore
        alert(oEvento.type);
    };
    btn.addEventListener("click", um, false);
    btn.addEventListener("click", dois, false);
*/

    btn.onclick = function ( e )  { 
        // this representa o proprietario da função ou metodo que está sendo processado.
        alert("botao"); 
        
        var evt = e ? e : window.event; // faz a verificação para o explore, chrome, safari, mozila...
        if( evt.stopPropagation() ) {
            evt.stopPropagation();// faz a verificação para edge
        } else {
            evt.cancelBubble = true;
        }
    };
    div.onclick = function ()  { alert("div"); };
    document.onclick = function() { alert( "document" ); };
    
};


/* removeEventListener - remove evento
 window.onload = function() {
 var btn = document.getElementById("botao");
 btn.removeEventListener("click", um, false);
 btn.removeEventListener("click", dois, false);
 
 };
 */

function um() {
    alert('um');
}
function dois() {
    alert('dois');
}
