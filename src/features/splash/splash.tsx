import React, {useEffect} from 'react';
import {
  FlexColumn,
  FlexRow,
  SplashContainer,
  SubTitle,
  Title,
} from './Splash.style';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../navigation/navigation';
import {Logo} from '../../components/logo/Logo';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Splash = ({navigation}: Props): JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout(timeout);
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
