const containerListaComprados = document.getElementById("containerListaComprados")

export function verificarListaComprados(lista) {

    if (lista.childElementCount === 0) {
        containerListaComprados.style.display = "none";
    } else {
        containerListaComprados.style.display = "block";
    }
}