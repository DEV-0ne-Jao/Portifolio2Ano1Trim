/* Soli Deo Gloria */

function mudarModo() {
    let estilo = document.getElementById("EstiloPagina");

    if(estilo.href.includes("ModoEscuro.css") ) {
        estilo.href = "../CSS/ModoClaro.css";
    } else if(estilo.href.includes("ModoClaro.css") ) {
        estilo.href = "../CSS/ModoEscuro.css";
    }
}