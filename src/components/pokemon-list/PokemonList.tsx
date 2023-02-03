import React, {useRef} from 'react';
import {
  FlatListContainer,
  Loader,
  PokemonListContainer,
  Seperator,
} from './PokemonList.style';
import PokemonItem from '../pokemon-item/PokemonItem';
import {IPokemon} from '../../types/types';
import {FlatList} from 'react-native';
import usePokemonHook from '../../hooks/use-pokemon-hook';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigation';

type IProp = {
  navigation: NativeStackScreenProps<RootStackParamList, 'PokemonDetails'>;
};

export default function PokemonList({navigation}: IProp) {
  const {pokemons, doLoadMore, isLoading, isLoadingMore} = usePokemonHook();

  const onEndReachedCalledDuringMomentum = useRef(true);

  const onEndReachedHandler = ({distanceFromEnd}: any) => {
    if (!onEndReachedCalledDuringMomentum.current) {
      console.log('Loadmore');
      doLoadMore();
      onEndReachedCalledDuringMomentum.current = true;
    }
  };

  const AppLoader = () => {
    return <Loader color="#3558CD" />;
  };

  const navigateToPokemonDetails = (
    pokemon: IPokemon,
    backgroundColor: string,
  ) => {
    navigation.navigate('PokemonDetails', {
      pokemon: pokemon,
      backgroundColor: backgroundColor,
    });
  };

  return (
    <PokemonListContainer>
      {isLoading && <AppLoader />}
      <FlatListContainer>
        <FlatList<IPokemon>
          numColumns={3}
          data={pokemons}
          renderItem={({item, index}: {item: IPokemon; index: number}) => (
            <PokemonItem
              pokemon={item}
              index={index}
              navigateToPokemonDetails={navigateToPokemonDetails}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Seperator />}
          onEndReachedThreshold={0.2}
          onEndReached={onEndReachedHandler}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum.current = false;
          }}
          ListFooterComponent={isLoadingMore ? <Loader /> : null}
          ListFooterComponentStyle={{marginTop: 20, marginBottom: 20}}
        />
      </FlatListContainer>
    </PokemonListContainer>
  );
}
