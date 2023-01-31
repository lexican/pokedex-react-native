import React, {useState} from 'react';
import HomeAppbar from '../../components/home-app-bar/HomeAppBar';
import HomeTab from '../../components/home-tab/HomeTab';
import PokemonList from '../../components/pokemon-list/PokemonList';
import {HomeContainer} from './Home.style';



export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <HomeContainer>
      <HomeAppbar />
      <HomeTab selectedIndex={currentIndex} onTabSelected={setCurrentIndex} />
      <PokemonList />
    </HomeContainer>
  );
}
