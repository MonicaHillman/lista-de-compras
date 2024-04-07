// Importando a função verificarListaVazia do arquivo verificarListaVazia.js
import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaComprados } from './verificarListaComprados.js'

// Função para excluir item
const excluirItem = (element) => {
    let confirmacao = confirm("Tem certeza que deseja excluir este item?");
    if (confirmacao) {
        element.remove();
        verificarListaVazia(document.getElementById("listaDeCompras"));

        verificarListaComprados(document.getElementById("comprados"));
    }

}

// Exportando a função excluirItem
export { excluirItem };
