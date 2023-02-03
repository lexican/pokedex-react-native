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
import FavouriteBtn from '../../components/favourite-btn/FavouriteBtn';

type IProp = {
  route: any;
  navigation: any;
  backgroundColor: string;
};

export default function PokemonDetails({route, navigation}: IProp) {
  const goBack = () => {
    navigation.goBack();
  };
  const {backgroundColor, pokemon} = route.params;
  const {name, types, id, imageUrl, height, weight, stats} = pokemon;

  return (
    <PokemonDetailsContainer>
      <PokemonDetailsAppBar backgroundColor={backgroundColor}>
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
          backgroundColor={backgroundColor}
        />
        <PokemonDetailsBodyInfo height={height} weight={weight} />
        <PokemonDetailsBaseStats stats={stats} />
      </PokemonDetailsScrollView>
      <FavouriteBtn />
    </PokemonDetailsContainer>
  );
}
