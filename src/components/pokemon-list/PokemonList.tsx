import React from 'react';
import {PokemonListContainer, Seperator} from './PokemonList.style';
import PokemonItem from '../pokemon-item/PokemonItem';
import {data} from '../../data/data';
import {IPokemon} from '../../types/types';
import {FlatList} from 'react-native';

export default function PokemonList() {
  return (
    <PokemonListContainer>
      <FlatList<IPokemon>
        numColumns={3}
        data={data}
        renderItem={({item, index}: {item: IPokemon; index: number}) => (
          <PokemonItem pokemon={item} index={index} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Seperator />}
      />
    </PokemonListContainer>
  );
}
