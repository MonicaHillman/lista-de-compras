const mensagemListaVazia = document.getElementById("mensagemListaVazia");

// Função para verificar se a lista está vazia
export function verificarListaVazia(lista) {
    if (lista.childElementCount === 0) {
        // Se a lista de compras estiver vazia, exibe a mensagem
        mensagemListaVazia.style.display = "block";
    } else {
        // Se a lista de compras não estiver vazia, remove a mensagem

        mensagemListaVazia.style.display = "none";

    }
}