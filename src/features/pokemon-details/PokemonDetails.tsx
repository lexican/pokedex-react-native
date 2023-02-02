import BackArrow from '../../../assets/icons/back-arrow.svg';

import React from 'react';
import {
  AppBackArrow,
  PokemonDetailsAppBar,
  PokemonDetailsContainer,
} from './PokemonDetails.style';
import PokemonDetailsTitle from '../../components/pokemon-details-title/PokemonDetailsTitle';
import PokemonDetailsBodyInfo from '../../components/pokemon-details-body-info/PokemonDetailsBodyInfo';

type IProp = {
  route: any;
  navigation: any;
};

export default function PokemonDetails({route, navigation}: IProp) {
  const goBack = () => {
    navigation.goBack();
  };
  const {name, types, id, imageUrl, height, weight} = route.params.pokemon;
  return (
    <PokemonDetailsContainer>
      <PokemonDetailsAppBar>
        <AppBackArrow
          onPress={() => {
            goBack();
          }}>
          <BackArrow />
        </AppBackArrow>
      </PokemonDetailsAppBar>
      <PokemonDetailsTitle
        name={name}
        types={types}
        id={id}
        imageUrl={imageUrl}
      />
      <PokemonDetailsBodyInfo height={height} weight={weight} />
    </PokemonDetailsContainer>
  );
}
