import {FlatList} from 'react-native';
import React, {FC} from 'react';
import {FlatListContainer, Seperator} from './FavouritesList.style';
import {IPokemon} from '../../types/types';
import {useAppStateContext} from '../../context/AppContext';
import PokemonItem from '../pokemon-item/PokemonItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/navigation';
import {PokemonListContainer} from '../pokemon-list/PokemonList.style';

type IProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'PokemonDetails'>;
};

const FavouritesList: FC<IProps> = ({navigation}) => {
  const navigateToPokemonDetails = (
    pokemon: IPokemon,
    backgroundColor: string,
  ) => {
    navigation.navigate('PokemonDetails', {
      pokemon: pokemon,
      backgroundColor: backgroundColor,
    });
  };
  const {pokemons} = useAppStateContext();
  return (
    <PokemonListContainer>
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
          ListFooterComponentStyle={{marginTop: 20, marginBottom: 20}}
        />
      </FlatListContainer>
    </PokemonListContainer>
  );
};

export default FavouritesList;
