const dataAtual = new Date();

export function gerarDiaDaSemana() {

    // Obter a data atual
    const dataText = `${dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString()}`;

    return dataText;
}
