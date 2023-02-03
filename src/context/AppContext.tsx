import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  useState,
  createContext,
  FC,
  useMemo,
  useContext,
  useEffect,
} from 'react';
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

  useEffect(() => {
    retrieveData();
  }, []);

  const favouritePokemon = (pokemon: IPokemon) => {
    storeData([...pokemons, pokemon]);
    setPokemons([...pokemons, pokemon]);
  };
  const unFavouritePokemon = (pokemon: IPokemon) => {
    const tempPokemons: IPokemon[] = pokemons.filter(
      poke => poke.id != pokemon.id,
    );
    storeData(tempPokemons);
    setPokemons(tempPokemons);
  };
  const isFavouritedPokemon = (pokemon: IPokemon): boolean => {
    const poke = pokemons.find(poke => poke.id === pokemon.id);
    return poke ? true : false;
  };

  const storeData = async (pokemons: IPokemon[]) => {
    try {
      await AsyncStorage.setItem('pokemons', JSON.stringify(pokemons));
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('pokemons');
      if (value !== null) {
        const data = JSON.parse(value);
        setPokemons([...data]);
      }
    } catch (error) {
      console.log(error);
    }
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
