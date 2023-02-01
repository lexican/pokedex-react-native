export type IPokemon = {
  id: number;
  name: string;
  imageUrl: string;
  height?: number;
  weight?: number;
  types: string[];
  stats: IStat[];
};

export type IPokemonResponse = {
  url: string;
  name: string;
};

export type IStat = {
  title: string;
  value: number;
};
