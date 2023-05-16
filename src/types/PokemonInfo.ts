export interface InfoPokemons {
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonInfo {
  id: string;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
      url: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  weight: number;
}
