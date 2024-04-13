import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";

export function criarItemDaLista(item) {
    // Criar elementos HTML para o novo item
    let listItem = document.createElement("li");
    let spanItem = document.createElement("span");

    // Criar checkbox
    let checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkboxContainer");

    let checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkboxInput");
    checkboxInput.id = 'checkbox' + Date.now(); // Adicionar um identificador único usando a função Date.now()

    let labelCheckbox = document.createElement('label');
    labelCheckbox.setAttribute('for', checkboxInput.id); // Usar o ID do checkbox como referência para o label

    let customCheckbox = document.createElement("div");
    customCheckbox.classList.add("customCheckbox");

    labelCheckbox.appendChild(checkboxInput);
    labelCheckbox.appendChild(customCheckbox);

    // Adicionar checkbox dentro do spanItem
    checkboxContainer.appendChild(labelCheckbox);

    // Criar elemento de texto para o nome do item
    let itemText = document.createElement('p');
    itemText.classList.add('item-title')
    itemText.innerText = item;

    // Criar elemento de texto para a data
    let itemDate = document.createElement('p');
    itemDate.innerText = gerarDiaDaSemana();
    itemDate.setAttribute("class", "data")

    // Adicionar itemText e itemDate ao spanItem
    spanItem.appendChild(checkboxContainer);
    spanItem.appendChild(itemText);
    spanItem.appendChild(itemDate);

    // Adiciona a classe 'itemTextContainer' ao elemento spanItem
    spanItem.classList.add('itemTextContainer');

    labelCheckbox.addEventListener('click', function (event) {
        const currentCheckbox = event.currentTarget.querySelector('.checkboxInput');
        const currentCustomCheckbox = event.currentTarget.querySelector('.customCheckbox');
        const currentItemText = event.currentTarget.closest('li').querySelector('.item-title');

        if (currentCheckbox.checked) {
            currentCustomCheckbox.classList.add('checked');
            currentItemText.style.textDecoration = 'line-through';
            // Adicionar o item à lista de comprados
            document.getElementById("comprados").appendChild(listItem);
        } else {
            currentCustomCheckbox.classList.remove('checked');
            currentItemText.style.textDecoration = 'none';
            // Adicionar o item de volta à lista de compras original
            document.getElementById("listaDeCompras").appendChild(listItem);
        }

        verificarListaComprados(document.getElementById("comprados"));
        verificarListaVazia(document.getElementById("listaDeCompras"));
    });
    // Adicionar os elementos ao item da lista
    listItem.appendChild(spanItem);

    // Remover
    let botaoExcluir = document.createElement("button");
    let imgExcluir = document.createElement("img");
    imgExcluir.src = "img/delete.svg"; // Defina o caminho para a imagem que você quer usar
    imgExcluir.alt = "Remover"; // Texto alternativo para acessibilidade
    botaoExcluir.appendChild(imgExcluir); // Adiciona a imagem ao botão
    botaoExcluir.addEventListener("click", function () {
        excluirItem(listItem);
    });

    //Editar
    let botaoEditar = document.createElement("button");
    let imgEditar = document.createElement("img");
    imgEditar.src = "img/edit.svg"; // Defina o caminho para a imagem que você quer usar
    imgEditar.alt = "Editar"; // Texto alternativo para acessibilidade
    botaoEditar.appendChild(imgEditar); // Adiciona a imagem ao botão
    botaoEditar.addEventListener("click", function () {
        editarItem(listItem);
    });

    // Adicionar os botões ao item da lista
    listItem.appendChild(botaoExcluir);
    listItem.appendChild(botaoEditar);

    return listItem;
}
