import React from 'react';
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
};

export default function PokemonItem({pokemon, index}: IProp) {
  const {id, name, imageUrl, types} = pokemon;
  return (
    <PokemonItemContainer index={index}>
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
