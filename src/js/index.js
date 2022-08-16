/*Clicar no cartão esconde o cartão aberto e abre o selecionado.

Temos que trabalhar com listagem e cartão do pokemon.


*/

//Criar duas variáveis para trabalhar com os elementos da tela.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

//Trabalhar com eventos de click do usuário.
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        //Remover classe aberto do cartão, só do cartão que está aberto.
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        //Ao clicar no pokemon da listagem pegamos o id dele para saber qual cartão mostrar.
        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idDoCartaoParaAbrir = 'cartao-'+idPokemonSelecionado;

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        //Remover a classe ativo do pokemon que marca o pokemon selecionado.

        const pokemonAtivoNaListagem = document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        //Adicionar a classe ativo no pokemon selecionado.

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add('ativo');

    });
});