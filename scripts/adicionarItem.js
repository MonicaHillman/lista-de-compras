import { criarItemDaLista } from './criarItemDaLista.js';
import { verificarListaVazia } from './verificarListaVazia.js';

const input = document.getElementById("itemInput");
const lista = document.getElementById("listaDeCompras")

// Função para adicionar um item à lista
export function adicionarItem(evt) {
    evt.preventDefault();
    const item = input.value;

    if (item === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Criar listItem
    const listItem = criarItemDaLista(item);


    // Adicionar o novo item à lista de compras
    lista.appendChild(listItem);

    // Limpar o valor do input
    input.value = "";

    // Verificar se a lista está vazia e exibir a mensagem apropriada
    verificarListaVazia(lista);
}
