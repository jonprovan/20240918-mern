const helloWorld = () => {
    console.log('Hello, World!');
}

const getPokemon = () => {
    const pokemon = [ 'Shaymin', 'Snorlax', 'Amoongus', 'Pikachu', 'Darkrai' ];
    return pokemon[Math.floor(Math.random() * 5)];
}

module.exports = [ helloWorld, getPokemon ];