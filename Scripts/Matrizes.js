/* Soli Deo Gloria */

//Variáveis globais
let matriz = [];
let colorido = false;


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

    if (colorido) {
        const cores = [
            "#FF0000", //index 0  Cor: Vermelho
            "#00FF00", //index 1  Cor: Verde
            "#0000FF", //index 2  Cor: Azul
            "#000000", //index 3  Cor: Preto
            "#EEEEEE", //index 4  Cor: Branco acinzentado
            "#808080", //index 5  Cor: Cinza
            "#FFFF00", //index 6  Cor: Amarelo
            "#00FFFF", //index 7  Cor: Ciano
            "#FF00FF", //index 8  Cor: Magenta
            "#FFA500", //index 9  Cor: Laranja
            "#800000", //index 10 Cor: Vinho
            "#008000", //index 11 Cor: Verde escuro
            "#000080", //index 12 Cor: Azul marinho
            "#808000", //index 13 Cor: Verde oliva
            "#800080", //index 14 Cor: Roxo
            "#008080", //index 15 Cor: Verde azulado
            "#C0C0C0", //index 16 Cor: Prata
            "#A52A2A", //index 17 Cor: Marrom
            "#F0E68C", //index 18 Cor: Cáqui claro
            "#FFD700", //index 19 Cor: Dourado
            "#D2691E", //index 20 Cor: Chocolate
            "#DC143C", //index 21 Cor: Carmesim
            "#00CED1", //index 22 Cor: Turquesa escuro
            "#9400D3", //index 23 Cor: Violeta escuro
            "#B22222", //index 24 Cor: Vermelho tijolo
            "#228B22", //index 25 Cor: Verde floresta
            "#1E90FF", //index 26 Cor: Azul dodger
            "#ADFF2F", //index 27 Cor: Verde amarelado
            "#FF69B4", //index 28 Cor: Rosa choque
            "#CD5C5C", //index 29 Cor: Rosa indiano
            "#4B0082", //index 30 Cor: Índigo
            "#7FFF00", //index 31 Cor: Verde limão
            "#BA55D3", //index 32 Cor: Orquídea média
            "#B0C4DE", //index 33 Cor: Azul aço claro
            "#DAA520", //index 34 Cor: Dourado escuro
            "#5F9EA0", //index 35 Cor: Azul cadete
            "#9ACD32", //index 36 Cor: Verde amarelado escuro
            "#9932CC", //index 37 Cor: Roxo escuro
            "#FF4500", //index 38 Cor: Laranja avermelhado
            "#2E8B57", //index 39 Cor: Verde mar
            "#3CB371", //index 40 Cor: Verde médio
            "#87CEEB", //index 41 Cor: Azul céu claro
            "#FF1493", //index 42 Cor: Rosa profundo
            "#6495ED", //index 43 Cor: Azul centáurea
            "#40E0D0", //index 44 Cor: Turquesa
            "#FA8072", //index 45 Cor: Salmão claro
            "#B8860B", //index 46 Cor: Dourado queimado
            "#F5DEB3", //index 47 Cor: Trigo
            "#FFDEAD", //index 48 Cor: Amêndoa clara
            "#E9967A", //index 49 Cor: Salmão escuro
        ]

        for (let linha = 0; linha < quantasLinhas(matriz); linha++) {

            let tr = document.createElement("tr");
            for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
                let td = document.createElement("td");
                td.style.backgroundColor = cores[ matriz[linha][coluna] ];
                td.style.padding = "10px";

                tr.appendChild(td);
            }
            tabela.appendChild(tr);
        }
    } else {

        let codigo = "";

        for (let linha = 0; linha < quantasLinhas(matriz); linha++) {
            codigo += "<tr>";

            for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
                codigo += "<td>" + matriz[linha][coluna] + "</td>"
            }
            codigo += "</tr>"
        }
        tabela.innerHTML = codigo;

        /*
        for (let linha = 0; linha < quantasLinhas(matriz); linha++) {
            let tr = document.createElement("tr");

            for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
                let td = document.createElement("td");
                td.style.padding = "10px";
                td.textContent = matriz[linha][coluna]
                tr.appendChild(td);
            }
            tabela.appendChild(tr);
        }
    }*/
    }
}

function transporMatriz() {

    let novamatriz = []

    for (let linha = 0; linha < quantasColunas(matriz); linha++) {
        novamatriz[linha] = [];
    }

    for (let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            novamatriz[coluna][linha] = matriz[linha][coluna]
            /* Está ao contrario */
        }
    }

    matriz = novamatriz;
    printarMatriz();
}

function somarNumero() {

    let some = parseInt(document.getElementById("someNumero").value);

    for (let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            matriz[linha][coluna] += some

        }
    }
    printarMatriz();
}

function multiplicarNumero() {

    let multiplicador = parseInt(document.getElementById("multNumero").value);

    for (let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            matriz[linha][coluna] *= multiplicador

        }
    }
    printarMatriz();
}

function dividirNumero() {

    let divisor = parseInt(document.getElementById("divisorNumero").value);

    for (let linha = 0; linha < quantasLinhas(matriz); linha++) {
        for (let coluna = 0; coluna < quantasColunas(matriz); coluna++) {
            matriz[linha][coluna] /= divisor

        }
    }
    printarMatriz();
}













function trocarModoMatrizCor() {
    if (colorido == false) {
        colorido = true;
        printarMatriz();
    } else {
        colorido = false;
        printarMatriz();
    }
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