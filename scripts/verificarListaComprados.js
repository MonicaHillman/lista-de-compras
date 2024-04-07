export function verificarListaComprados(lista) {

    if (lista.childElementCount === 0) {
        document.getElementById("containerListaComprados").style.display = "none";
    } else {
        document.getElementById("containerListaComprados").style.display = "block";
    }
}