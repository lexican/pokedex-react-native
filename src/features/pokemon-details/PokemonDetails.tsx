import BackArrow from '../../../assets/icons/back-arrow.svg';

import React from 'react';
import {
  AppBackArrow,
  PokemonDetailsAppBar,
  PokemonDetailsContainer,
  PokemonDetailsScrollView,
} from './PokemonDetails.style';
import PokemonDetailsTitle from '../../components/pokemon-details-title/PokemonDetailsTitle';
import PokemonDetailsBodyInfo from '../../components/pokemon-details-body-info/PokemonDetailsBodyInfo';
import PokemonDetailsBaseStats from '../../components/pokemon-details-base-stats/PokemonDetailsBaseStats';

type IProp = {
  route: any;
  navigation: any;
};

export default function PokemonDetails({route, navigation}: IProp) {
  const goBack = () => {
    navigation.goBack();
  };
  const {name, types, id, imageUrl, height, weight, stats} =
    route.params.pokemon;
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
      <PokemonDetailsScrollView>
        <PokemonDetailsTitle
          name={name}
          types={types}
          id={id}
          imageUrl={imageUrl}
        />
        <PokemonDetailsBodyInfo height={height} weight={weight} />
        <PokemonDetailsBaseStats stats={stats} />
      </PokemonDetailsScrollView>
    </PokemonDetailsContainer>
  );
}
