import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";

// Função para editar item
export const editarItem = (element) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        // Atualiza o texto do item existente
        let itemTextElement = element.querySelector('.item-title');
        itemTextElement.textContent = novoItem;

        // Verifica se o item original estava marcado como comprado
        const estavaComprado = element.querySelector('.checkboxInput').checked;

        // Se o item original estava marcado como comprado, marca o novo item como comprado também
        if (estavaComprado) {
            element.querySelector('.checkboxInput').checked = true;
            element.querySelector('.customCheckbox').classList.add('checked');
            itemTextElement.style.textDecoration = 'line-through';
        }

        // Atualiza data de criação pra data que foi editado
        const dataDeCriacao = element.querySelector(".data")

        dataDeCriacao.textContent = gerarDiaDaSemana();
    }
}
