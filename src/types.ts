export interface InfoPokemons {
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonInfo {
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{
    type: {
      name: string,
      url: string,
    }
  }>
}
