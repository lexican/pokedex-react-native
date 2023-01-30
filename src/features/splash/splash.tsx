import React, {useEffect} from 'react';
import {
  FlexColumn,
  FlexRow,
  SplashContainer,
  SubTitle,
  Title,
} from './Splash.style';
import Logo from '../../../assets/icons/logo.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../navigation/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Splash = ({navigation}: Props): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

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
