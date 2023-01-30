import React, {useState} from 'react';
import HomeAppbar from '../../components/home-appbar/HomeAppBar';
import HomeTab from '../../components/home-tab/HomeTab';
import {HomeContainer} from './Home.style';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onTabSelected = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <HomeContainer>
      <HomeAppbar />
      <HomeTab selectedIndex={currentIndex} onTabSelected={setCurrentIndex} />
    </HomeContainer>
  );
}
