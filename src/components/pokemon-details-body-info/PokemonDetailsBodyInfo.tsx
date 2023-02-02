import React from 'react';
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
      <InfoSection title={'Height'} value={height} />
      <InfoSection title={'Weight'} value={weight} />
      <InfoSection title={'BMI'} value={0} />
    </BodyInfo>
  );
}

type InfoSectionProp = {
  title: string;
  value: number;
};

const InfoSection = ({title, value}: InfoSectionProp) => {
  return (
    <InfoSectionContainer>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </InfoSectionContainer>
  );
};
