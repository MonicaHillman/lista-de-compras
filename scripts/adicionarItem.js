import { criarItemDaLista } from './criarItemDaLista.js';
import { verificarListaVazia } from './verificarListaVazia.js';

// Função para adicionar um item à lista
export function adicionarItem() {
    let item = document.getElementById("itemInput").value;

    if (item === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Criar listItem
    let listItem = criarItemDaLista(item);



    // Adicionar o novo item à lista de compras
    document.getElementById("listaDeCompras").appendChild(listItem);

    // Limpar o valor do input
    document.getElementById("itemInput").value = "";

    // Verificar se a lista está vazia e exibir a mensagem apropriada
    verificarListaVazia(document.getElementById("listaDeCompras"));
}
