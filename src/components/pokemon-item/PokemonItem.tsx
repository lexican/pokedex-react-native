import React from 'react';
import {IPokemon} from '../../types/types';
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
  const {id, name, imageUrl} = pokemon;
  return (
    <PokemonItemContainer index={index}>
      <PokemonItemInnerContainer index={index}>
        <PokemoneImage source={{uri: imageUrl}} />
        <PokemonFooter>
          <PokemonId>{id}</PokemonId>
          <PokemonName>{name}</PokemonName>
          <PokemonType>Grass, Poison</PokemonType>
        </PokemonFooter>
      </PokemonItemInnerContainer>
    </PokemonItemContainer>
  );
}
