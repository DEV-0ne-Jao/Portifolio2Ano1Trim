/* Soli Deo Gloria */

let matriz = [];
function gerarNovaMatriz() {

    /* Se for 0 ou menor que 0 ou não estiver preenchido, retorna true */
    if (invalido(document.getElementById('linha').value)) {
        alert('Preencha o campo "linha" ');
        return;
    } else if (invalido(document.getElementById('coluna').value)) {
        alert('Preencha o campo "coluna" ');
        return;
    } else {

        let totalColunas = parseInt(document.getElementById('coluna').value);
        let totalLinhas = parseInt(document.getElementById('linha').value);

        matriz.length = 0;
        matriz = [];
        for (let i = 0; i < totalLinhas; i++) {
            matriz[i] = [];
        }

        for (let linha = 0; linha < totalLinhas; linha++) {
            for (let coluna = 0; coluna < totalColunas; coluna++) {
                matriz[linha][coluna] = null;
            }
        }

        printarMatriz();
    }
}

function colocarValoresMatriz() {

    if (isNaN(document.getElementById('numero').value)) {
        return;
    } else {

        let valor = Number(document.getElementById('numero').value);

        for (let linha = 0; linha < quantasLinhas(matriz); linha++) {
            for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
                if (matriz[linha][coluna] === null) {
                    matriz[linha][coluna] = valor;
                    printarMatriz();
                    return;
                }
            }
        }

        alert("A matriz já está cheia");

        /* O primeiro [] representa as linhas e o segundo [] representa as colunas */
    }
}

function printarMatriz() {

    let tabela = document.getElementById('tabela');
    tabela.innerHTML = "";
    let codigo = "";

    for (let linha = 0; linha < quantasLinhas(matriz); linha++) {

        codigo += "<tr>";
        for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            codigo += "<td>" + matriz[linha][coluna] + "</td>";
        }
        codigo += "</tr>";
    }
    tabela.innerHTML = codigo;
}

function transporMatriz() {

    let novamatriz = []

    for (let linha = 0; linha < quantasColunas(matriz); linha++) {
        novamatriz[linha] = [];
    }

    console.log(`gerou uma nova matriz cuja quantidade de linha é ${quantasLinhas(novamatriz)}`)

    for(let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for(let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            novamatriz[coluna][linha] = matriz[linha][coluna]
                  /* Está ao contrario */
        }
    }

    matriz = novamatriz;
    printarMatriz();
}

function somarNumero() {

    let some = parseInt(document.getElementById("someNumero").value);

    for(let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for(let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            matriz[linha][coluna] += some
                  /* Está ao contrario */
        }
    }
    printarMatriz();
}

function multiplicarNumero() {

    let multiplicador = parseInt(document.getElementById("multNumero").value);

    for(let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for(let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            matriz[linha][coluna] *= multiplicador
                  /* Está ao contrario */
        }
    }
    printarMatriz();
}

function dividirNumero() {

    let divisor = parseInt(document.getElementById("divisorNumero").value);

    for(let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for(let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            matriz[linha][coluna] /= divisor
                  /* Está ao contrario */
        }
    }
    printarMatriz();
}


function quantasLinhas(matrizona) {
    return matrizona.length;
}

function quantasColunas(matrizona) {
    return matrizona[0].length;
}

function invalido(parametro) {
    if (isNaN(parametro)) {
        return true;
    } else if (!isNaN(parametro)) {

        if (parametro <= 0) {
            return true;
        } else {
            return false;
        }
    }
}