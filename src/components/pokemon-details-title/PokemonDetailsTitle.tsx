import React from 'react';
import {
  BackgroundIcon,
  PokemonDetailsTitleContainer,
  PokemonDetailsInnerTitleContainer,
  PokemoneImage,
  PokemonId,
  PokemonName,
  PokemonType,
} from './PokemonDetailsTitle.style';
import {
  capitalise,
  convertPokemonTypesToString,
  convertToIdHash,
} from '../../utils/utils';

import PokemonBackgroundIcon from '../../../assets/icons/pokemon-background.svg';

type IProp = {
  name: string;
  types: string[];
  id: number;
  imageUrl: string;
};

export default function PokemonDetailsTitle({
  name,
  types,
  id,
  imageUrl,
}: IProp) {
  return (
    <PokemonDetailsTitleContainer>
      <PokemonDetailsInnerTitleContainer>
        <PokemonName>{capitalise(name)}</PokemonName>
        <PokemonType>{convertPokemonTypesToString(types)}</PokemonType>
      </PokemonDetailsInnerTitleContainer>
      <PokemonId>{convertToIdHash(id)}</PokemonId>
      <BackgroundIcon>
        <PokemonBackgroundIcon />
      </BackgroundIcon>
      <PokemoneImage source={{uri: imageUrl}} />
    </PokemonDetailsTitleContainer>
  );
}
