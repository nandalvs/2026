let pedido = [];

function adicionarBebida(nome, preco) {

    let bebida = pedido.find(function(item) {
        return item.nome === nome;
    });

    if (bebida) {
        bebida.quantidade++;
    } else {
        pedido.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    mostrarPedido();
}

function adicionarBebidaDigitada() {

    let campo = document.getElementById("bebida");
    let nome = campo.value;

    if (nome === "") {
        alert("Digite o nome de uma bebida!");
    } else {

        pedido.push({
            nome: nome,
            preco: 10,
            quantidade: 1
        });

        campo.value = "";

        mostrarPedido();
    }
}

function aumentarQuantidade(indice) {

    pedido[indice].quantidade++;

    mostrarPedido();
}

function diminuirQuantidade(indice) {

    pedido[indice].quantidade--;

    if (pedido[indice].quantidade === 0) {
        pedido.splice(indice, 1);
    }

    mostrarPedido();
}

function removerBebida(indice) {

    pedido.splice(indice, 1);

    mostrarPedido();
}

function mostrarPedido() {

    let lista = document.getElementById("lista-bebidas");
    let quantidade = document.getElementById("quantidade-total");
    let total = document.getElementById("valor-total");

    lista.innerHTML = "";

    let quantidadeTotal = 0;
    let valorTotal = 0;

    if (pedido.length === 0) {

        lista.innerHTML = "<p class='vazio'>Seu pedido está vazio.</p>";

    } else {

        pedido.forEach(function(item, indice) {

            quantidadeTotal += item.quantidade;
            valorTotal += item.preco * item.quantidade;

            let bebida = document.createElement("div");

            bebida.className = "bebida-item";

            bebida.innerHTML =
                "<img src='moji.png' alt='" + item.nome + "'>" +

                "<div class='bebida-nome'>" +
                "<h4>" + item.nome + "</h4>" +
                "<p>R$ " + item.preco.toFixed(2).replace(".", ",") + " cada</p>" +
                "</div>" +

                "<div class='quantidade'>" +
                "<button onclick='diminuirQuantidade(" + indice + ")'>−</button>" +
                "<span>" + item.quantidade + "</span>" +
                "<button onclick='aumentarQuantidade(" + indice + ")'>+</button>" +
                "</div>" +

                "<button class='remover' onclick='removerBebida(" + indice + ")'>Remover</button>";

            lista.appendChild(bebida);
        });
    }

    quantidade.innerHTML = quantidadeTotal + " itens";

    total.innerHTML = "R$ " + valorTotal.toFixed(2).replace(".", ",");
}