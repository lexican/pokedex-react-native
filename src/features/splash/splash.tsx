import React from 'react';
import {
  FlexColumn,
  FlexRow,
  SplashContainer,
  SubTitle,
  Title,
} from './splash.style';
import Logo from '../../../assets/icons/logo.svg';

const Splash = (): JSX.Element => {
  return (
    <SplashContainer>
      <FlexRow>
        <Logo />
        <FlexColumn>
          <Title>Pokemon</Title>
          <SubTitle>Pokedex</SubTitle>
        </FlexColumn>
      </FlexRow>
    </SplashContainer>
  );
};

export default Splash;
