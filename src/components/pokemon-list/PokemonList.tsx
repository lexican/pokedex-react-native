import React, {useRef} from 'react';
import {
  FlatListContainer,
  PokemonListContainer,
  Seperator,
} from './PokemonList.style';
import PokemonItem from '../pokemon-item/PokemonItem';
import {IPokemon} from '../../types/types';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native';
import usePokemonHook from '../../hooks/use-pokemon-hook';

export default function PokemonList() {
  const {pokemons, doLoadMore, isLoading} = usePokemonHook();

  const onEndReachedCalledDuringMomentum = useRef(true);

  const onEndReachedHandler = ({distanceFromEnd}: any) => {
    if (!onEndReachedCalledDuringMomentum.current) {
      console.log('Loadmore');
      doLoadMore();
      onEndReachedCalledDuringMomentum.current = true;
    }
  };

  return (
    <PokemonListContainer>
      {isLoading && <Text>Loading ...</Text>}
      <FlatListContainer>
        <FlatList<IPokemon>
          numColumns={3}
          data={pokemons}
          renderItem={({item, index}: {item: IPokemon; index: number}) => (
            <PokemonItem pokemon={item} index={index} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Seperator />}
          onEndReachedThreshold={0.2}
          onEndReached={onEndReachedHandler}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum.current = false;
          }}
        />
      </FlatListContainer>
    </PokemonListContainer>
  );
}
