import { criarItemDaLista } from './criarItemDaLista.js';
import { editarItem } from './editarItem.js';
import { excluirItem } from './excluirItem.js';
import { gerarDiaDaSemana } from './gerarDiaDaSemana.js';
import { verificarListaComprados } from './verificarListaComprados.js';
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

    // Remover
    let botaoExcluir = document.createElement("button");
    let imgExcluir = document.createElement("img");
    imgExcluir.src = "../img/delete.svg"; // Defina o caminho para a imagem que você quer usar
    imgExcluir.alt = "Remover"; // Texto alternativo para acessibilidade
    botaoExcluir.appendChild(imgExcluir); // Adiciona a imagem ao botão
    botaoExcluir.addEventListener("click", function () {
        excluirItem(listItem);
    });

    //Editar
    let botaoEditar = document.createElement("button");
    let imgEditar = document.createElement("img");
    imgEditar.src = "../img/edit.svg"; // Defina o caminho para a imagem que você quer usar
    imgEditar.alt = "Editar"; // Texto alternativo para acessibilidade
    botaoEditar.appendChild(imgEditar); // Adiciona a imagem ao botão
    botaoEditar.addEventListener("click", function () {
        editarItem(listItem);
    });

    // Adicionar os botões ao item da lista
    listItem.appendChild(botaoExcluir);
    listItem.appendChild(botaoEditar);

    // Adicionar o novo item à lista de compras
    document.getElementById("listaDeCompras").appendChild(listItem);

    // Limpar o valor do input
    document.getElementById("itemInput").value = "";

    // Verificar se a lista está vazia e exibir a mensagem apropriada
    verificarListaVazia(document.getElementById("listaDeCompras"));
}
