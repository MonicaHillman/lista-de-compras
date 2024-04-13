export function gerarDiaDaSemana() {
    let dataAtual = new Date();

    // Obter a data atual
    let dataText = `${dataAtual.toLocaleDateString('pt-BR', { weekday: 'long' })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString()}`;

    return dataText;
}
