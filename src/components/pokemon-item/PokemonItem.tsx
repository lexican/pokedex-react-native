import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from '../../navigation/navigation';
import {IPokemon} from '../../types/types';
import {
  capitalise,
  convertPokemonTypesToString,
  convertToIdHash,
} from '../../utils/utils';
import {
  PokemoneImage,
  PokemonFooter,
  PokemonId,
  PokemonItemContainer,
  PokemonItemInnerContainer,
  PokemonName,
  PokemonType,
} from './PokemonItem.style';

type IProp = {
  pokemon: IPokemon;
  index: number;
  navigateToPokemonDetails: (pokemon: IPokemon) => void;
};

export default function PokemonItem({
  pokemon,
  index,
  navigateToPokemonDetails,
}: IProp) {
  const {id, name, imageUrl, types} = pokemon;
  return (
    <PokemonItemContainer
      index={index}
      onPress={() => {
        navigateToPokemonDetails(pokemon);
      }}>
      <PokemonItemInnerContainer index={index}>
        <PokemoneImage source={{uri: imageUrl}} />
        <PokemonFooter>
          <PokemonId>{convertToIdHash(id)}</PokemonId>
          <PokemonName>{capitalise(name)}</PokemonName>
          <PokemonType>{convertPokemonTypesToString(types)}</PokemonType>
        </PokemonFooter>
      </PokemonItemInnerContainer>
    </PokemonItemContainer>
  );
}
