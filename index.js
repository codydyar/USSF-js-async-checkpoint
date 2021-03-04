fetch('https://pokeapi.co/api/v2/type/charmander') {
    const response = await fetch('https://pokeapi.co/api/v2/type/charmander');
    const data = await response.json();

    return data;
}
console.log(data)




