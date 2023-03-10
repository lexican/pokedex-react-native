import {useEffect, useState} from 'react';
import axios from 'axios';
import {IPokemon, IPokemonResponse, IStat} from '../types/types';
import {baseUrl} from '../constants/constant';
import {capitalise} from '../utils/utils';

export default function usePokemonHook() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  const fetchPokemons = async () => {
    if (initialLoading) {
      setIsLoading(true);
    } else {
      setIsLoadingMore(true);
    }
    const results: IPokemon[] = [];
    try {
      const response = await axios.get(
        `${baseUrl}/pokemon?limit=12&offset=${offset}`,
      );

      const responseData: IPokemonResponse[] = response.data.results;

      for (const poke of responseData) {
        const response = await axios.get(poke.url);

        const types: string[] = [];
        const stats: IStat[] = [];

        response.data.types.forEach((type: any) => {
          types.push(capitalise(type.type.name));
        });

        response.data.stats.forEach((stat: any) => {
          stats.push({
            title: stat.stat.name,
            value: stat['base_stat'],
          });
        });

        const pokemon: IPokemon = {
          id: response.data.id,
          name: response.data.name,
          imageUrl:
            response.data.sprites.other['official-artwork']['front_default'],
          height: response.data.height,
          weight: response.data.weight,
          types: types,
          stats: stats,
        };
        results.push(pokemon);
      }
      const tempResult = [...pokemons, ...results];
      setPokemons(tempResult);
      if (initialLoading) {
        setInitialLoading(false);
        setIsLoading(false);
      } else {
        setIsLoadingMore(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const doLoadMore = () => {
    console.log('doLoadMore created .....');
    setOffset(pokemons.length);
  };
  return {
    pokemons,
    isLoading,
    doLoadMore,
    isLoadingMore,
  };
}
