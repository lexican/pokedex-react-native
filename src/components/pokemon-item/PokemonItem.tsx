import React from 'react';
import {Text} from 'react-native';
import {IPokemon} from '../../types/types';
import {getPokemonImageBackgroundColors} from '../../utils/colors';
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
  navigateToPokemonDetails: (
    pokemon: IPokemon,
    backgroundColor: string,
  ) => void;
};

export default function PokemonItem({
  pokemon,
  index,
  navigateToPokemonDetails,
}: IProp) {
  const {id, name, imageUrl, types} = pokemon;
  const backgroundColor = getPokemonImageBackgroundColors(name[0]);

  return (
    <PokemonItemContainer
      index={index}
      onPress={() => {
        navigateToPokemonDetails(pokemon, backgroundColor);
      }}>
      <PokemonItemInnerContainer index={index}>
        <PokemoneImage
          source={{uri: imageUrl}}
          style={{
            backgroundColor: backgroundColor,
          }}
        />
        <PokemonFooter>
          <Text>{}</Text>
          <PokemonId>{convertToIdHash(id)}</PokemonId>
          <PokemonName>{capitalise(name)}</PokemonName>
          <PokemonType>{convertPokemonTypesToString(types)}</PokemonType>
        </PokemonFooter>
      </PokemonItemInnerContainer>
    </PokemonItemContainer>
  );
}
