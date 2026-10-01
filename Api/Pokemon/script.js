let input = document.getElementById("input");
let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");

async function buscarPokemon(nome) {
    try {
        let resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome.toLowerCase());

        if(!resposta.ok) {
            resultado.innerHTML = "<div class='erro'>Pokémon não encontrado.<br>Verifique o nome digitado.</div>";
            return;
        }

        let dados = await resposta.json();

        resultado.innerHTML = "";

        let pokemon = document.createElement("div");
        pokemon.classList.add("pokemon");

        let imagemDiv = document.createElement("div");
        imagemDiv.classList.add("imagem-pokemon");

        let imagemPokemon = document.createElement("img");
        imagemPokemon.src = dados.sprites.other["official-artwork"].front_default;

        imagemDiv.appendChild(imagemPokemon);

        let informacoes = document.createElement("div");
        informacoes.classList.add("informacoes");

        let numeroPokemon = document.createElement("span");
        numeroPokemon.classList.add("numero");
        numeroPokemon.innerHTML = "#" + dados.id;

        let nomePokemon = document.createElement("h2");
        nomePokemon.classList.add("nome-pokemon");
        nomePokemon.innerHTML = dados.name;

        let tipos = document.createElement("div");
        tipos.classList.add("tipos");

        for(let item of dados.types) {
            let tipo = document.createElement("span");
            tipo.classList.add("tipo");
            tipo.innerHTML = item.type.name;
            tipos.appendChild(tipo);
        }

        let dadosPokemon = document.createElement("div");
        dadosPokemon.classList.add("dados");

        let altura = document.createElement("div");
        altura.classList.add("dado");
        altura.innerHTML = "<strong>Altura</strong><span>" + (dados.height / 10) + " m</span>";

        let peso = document.createElement("div");
        peso.classList.add("dado");
        peso.innerHTML = "<strong>Peso</strong><span>" + (dados.weight / 10) + " kg</span>";

        let experiencia = document.createElement("div");
        experiencia.classList.add("dado");
        experiencia.innerHTML = "<strong>Experiência</strong><span>" + dados.base_experience + "</span>";

        let habilidades = document.createElement("div");
        habilidades.classList.add("habilidades");

        let textoHabilidades = "<strong>Habilidades</strong>";

        for(let habilidade of dados.abilities) {
            textoHabilidades += "<span>" + habilidade.ability.name + "</span> ";
        }

        habilidades.innerHTML = textoHabilidades;

        dadosPokemon.appendChild(altura);
        dadosPokemon.appendChild(peso);
        dadosPokemon.appendChild(experiencia);

        informacoes.appendChild(numeroPokemon);
        informacoes.appendChild(nomePokemon);
        informacoes.appendChild(tipos);
        informacoes.appendChild(dadosPokemon);
        informacoes.appendChild(habilidades);

        pokemon.appendChild(imagemDiv);
        pokemon.appendChild(informacoes);

        resultado.appendChild(pokemon);

    } catch (erro) {
        resultado.innerHTML = "<div class='erro'>Erro ao fazer a conexão com a API.</div>";
    }
}

botao.addEventListener("click", function() {
    buscarPokemon(input.value);
});