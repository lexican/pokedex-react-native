import React from 'react';
import {IStat} from '../../types/types';
import {capitalizeAllWordsSepByDash} from '../../utils/utils';
import {Slider} from '@miblanchard/react-native-slider';

import {
  BaseStatsTitle,
  BaseStatsTitleContainer,
  PokemonDetailsBaseStatsCon,
  StatItemContainer,
  StatItemTitle,
  StatItemTitleContainer,
  StatItemValue,
} from './PokemonDetailsBaseStats.style';

type IProps = {
  stats: IStat[];
};

export default function PokemonDetailsBaseStats({stats}: IProps) {
  return (
    <PokemonDetailsBaseStatsCon>
      <BaseStatsTitleContainer>
        <BaseStatsTitle>Base stats</BaseStatsTitle>
      </BaseStatsTitleContainer>
      {stats.map(stat => {
        return <StatItem stat={stat} key={stat.title} />;
      })}
    </PokemonDetailsBaseStatsCon>
  );
}

type IProp = {
  stat: IStat;
};

export const StatItem = ({stat}: IProp) => {
  const getTrackColor = () => {
    const value = stat.value / 100;
    if (value >= 0.67) return 'green';
    if (value > 0.33) return '#EEC218';
    return '#CD2873';
  };
  const {title, value} = stat;
  return (
    <StatItemContainer>
      <StatItemTitleContainer>
        <StatItemTitle>{capitalizeAllWordsSepByDash(title)}</StatItemTitle>
        <StatItemValue>{value}</StatItemValue>
      </StatItemTitleContainer>
      <Slider
        value={value / 100}
        onValueChange={() => {}}
        minimumTrackTintColor={getTrackColor()}
        maximumTrackTintColor="#E8E8E8"
        thumbTintColor="transparent"
        disabled={true}
      />
    </StatItemContainer>
  );
};
