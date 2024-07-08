function executar() {
    let vitorias = document.getElementById("vitorias").value;
    let derrotas = document.getElementById("derrotas").value;

    calcular(vitorias, derrotas);
}

function calcular(vitorias, derrotas) {
    let  saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    exibirResultado(saldoVitorias, nivel);
}

function exibirResultado(saldoVitorias, nivel) {
    let resultado = document.querySelector("#resultado");

    resultado.textContent = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**.`;
}

function filtrarTeclas(event) {
    return (event.charCode >= 48 && event.charCode <= 57);
}