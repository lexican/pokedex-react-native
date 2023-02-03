import React, {useState, createContext, FC, useMemo, useContext} from 'react';
import {IPokemon} from '../types/types';

export const AppStateContext = createContext<IStateContext>(undefined as never);

type IStateContext = {
  pokemons: IPokemon[];
  favouritePokemon: (pokemon: IPokemon) => void;
  unFavouritePokemon: (pokemon: IPokemon) => void;
  isFavouritedPokemon: (pokemon: IPokemon) => boolean;
};

type IProp = {
  children: JSX.Element;
};

export const AppStateProvider: FC<IProp> = ({children}) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const favouritePokemon = (pokemon: IPokemon) => {
    setPokemons([...pokemons, pokemon]);
  };
  const unFavouritePokemon = (pokemon: IPokemon) => {
    const tempPokemons = pokemons.filter(poke => poke.id != pokemon.id);
    setPokemons(tempPokemons);
  };
  const isFavouritedPokemon = (pokemon: IPokemon): boolean => {
    const poke = pokemons.find(poke => poke.id === pokemon.id);
    return poke ? true : false;
  };
  const value = useMemo(
    () => ({
      pokemons,
      favouritePokemon,
      unFavouritePokemon,
      isFavouritedPokemon,
    }),
    [pokemons],
  );
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export function useAppStateContext(): IStateContext {
  return useContext(AppStateContext);
}
