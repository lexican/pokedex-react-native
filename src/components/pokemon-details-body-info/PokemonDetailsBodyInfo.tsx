import React from 'react';
import {calculateBMI} from '../../utils/utils';
import {
  BodyInfo,
  InfoSectionContainer,
  InfoTitle,
  InfoValue,
} from './PokemonDetailsBodyInfo.style';

type IProp = {
  height: number;
  weight: number;
};

export default function PokemonDetailsBodyInfo({height, weight}: IProp) {
  return (
    <BodyInfo>
      <InfoSection title={'Height'} value={height.toString()} />
      <InfoSection title={'Weight'} value={weight.toString()} />
      <InfoSection title={'BMI'} value={calculateBMI(weight, height)} />
    </BodyInfo>
  );
}

type InfoSectionProp = {
  title: string;
  value: string;
};

const InfoSection = ({title, value}: InfoSectionProp) => {
  return (
    <InfoSectionContainer>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </InfoSectionContainer>
  );
};
