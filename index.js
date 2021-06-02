// Faz uma chamada para API de Pokemons
const makeRequest = () => {

    const data = fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then(response => response.json())
        .then(data => {
            return data;
        });

    return data;
}

const makeComponent = async () => {
    const container = document.getElementById('listContainer')

    const data = await makeRequest();

    const listPokemons = data.results.map((pokemon, index) => {
        return `<div class="poke">
        <div class="poke__thumbnail">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png" alt="" />
            <div class="poke__details">
                <div class="title">
                    <a><span>${pokemon.name}</span></a>
                </div>
            </div>
        </div>
    </div> `
    })
   
    container.innerHTML = listPokemons.join().replaceAll(",","");

}

makeComponent();

// makeRequest();