export function gerarDiaDaSemana() {
    let dataAtual = new Date();

    // Array com os nomes dos dias da semana
    let diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    // Obter o dia da semana como um número (de 0 a 6)
    let diaDaSemanaNumero = dataAtual.getDay();

    // Obter o nome do dia da semana usando o número obtido
    let nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaNumero];

    // Obter a data atual
    let dataText = `${nomeDoDiaDaSemana} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString()}`;

    return dataText;
}
