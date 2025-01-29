function calcularComodato() {
    let custoDispenser = parseFloat(document.getElementById("custo_dispenser").value);
    let vidaUtilDispenser = parseInt(document.getElementById("vida_util_dispenser").value);
    let qtdDispensers = parseInt(document.getElementById("qtd_dispensers").value);
    let custoPapel = parseFloat(document.getElementById("custo_papel").value);
    let consumoMensal = parseInt(document.getElementById("consumo_mensal").value);
    let manutencaoDispenser = parseFloat(document.getElementById("manutencao_dispenser").value);
    let duracaoContrato = parseInt(document.getElementById("duracao_contrato").value);
    let margemLucro = parseFloat(document.getElementById("margem_lucro").value) / 100;

    if (isNaN(custoDispenser) || isNaN(vidaUtilDispenser) || isNaN(qtdDispensers) ||
        isNaN(custoPapel) || isNaN(consumoMensal) || isNaN(manutencaoDispenser) ||
        isNaN(duracaoContrato) || isNaN(margemLucro)) {
        document.getElementById("resultado").innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    let custoMensalDispenser = (custoDispenser * qtdDispensers) / duracaoContrato;
    let custoMensalManutencao = manutencaoDispenser * qtdDispensers;
    let custoMensalPapel = consumoMensal * custoPapel;
    let precoMinimoPapel = (custoMensalDispenser + custoMensalManutencao + custoMensalPapel) / consumoMensal;
    let precoFinalPapel = precoMinimoPapel * (1 + margemLucro);

    document.getElementById("resultado").innerHTML = `
        <p>Custo mensal com dispensers: R$ ${custoMensalDispenser.toFixed(2)}</p>
        <p>Custo mensal com manutenção: R$ ${custoMensalManutencao.toFixed(2)}</p>
        <p>Custo mensal do papel higiênico: R$ ${custoMensalPapel.toFixed(2)}</p>
        <p>Preço mínimo do papel higiênico (por rolo): R$ ${precoMinimoPapel.toFixed(2)}</p>
        <p>Preço final do papel higiênico com margem de lucro: R$ ${precoFinalPapel.toFixed(2)}</p>
    `;
}