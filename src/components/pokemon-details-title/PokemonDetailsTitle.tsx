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

import PokemonIcon from '../pokemon-icon/PokemonIcon';

type IProp = {
  name: string;
  types: string[];
  id: number;
  imageUrl: string;
  backgroundColor: string;
};

export default function PokemonDetailsTitle({
  name,
  types,
  id,
  imageUrl,
  backgroundColor,
}: IProp) {
  return (
    <PokemonDetailsTitleContainer backgroundColor={backgroundColor}>
      <PokemonDetailsInnerTitleContainer>
        <PokemonName>{capitalise(name)}</PokemonName>
        <PokemonType>{convertPokemonTypesToString(types)}</PokemonType>
      </PokemonDetailsInnerTitleContainer>
      <PokemonId>{convertToIdHash(id)}</PokemonId>
      <BackgroundIcon>
        <PokemonIcon color={backgroundColor} />
      </BackgroundIcon>
      <PokemoneImage source={{uri: imageUrl}} />
    </PokemonDetailsTitleContainer>
  );
}
