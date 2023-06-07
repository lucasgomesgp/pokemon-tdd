const pokemon = {
  name: "bulbasaur",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    other: {
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
      },
    },
  },
  types: [
    {
      name: "grass",
    },
  ],
};
const urlsPokemons = {
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ],
};
export { pokemon, urlsPokemons };
