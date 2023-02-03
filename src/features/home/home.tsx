import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import React, {useState} from 'react';
import FavouritesList from '../../components/favourites-list/FavouritesList';
import HomeAppbar from '../../components/home-app-bar/HomeAppBar';
import HomeTab from '../../components/home-tab/HomeTab';
import PokemonList from '../../components/pokemon-list/PokemonList';
import {RootStackParamList} from '../../navigation/navigation';
import {HomeContainer} from './Home.style';

type IProp = {
  navigation: NativeStackScreenProps<RootStackParamList, 'PokemonDetails'>;
};

export default function Home({navigation}: IProp) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <HomeContainer>
      <HomeAppbar />
      <HomeTab selectedIndex={currentIndex} onTabSelected={setCurrentIndex} />
      {currentIndex === 0 ? (
        <PokemonList navigation={navigation} />
      ) : (
        <FavouritesList navigation={navigation} />
      )}
    </HomeContainer>
  );
}
