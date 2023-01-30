import React from 'react';
import HomeTabItem from '../home-tab-item/HomeTabItem';
import {HomeTabContainer} from './HomeTab.style';

interface IProp {
  selectedIndex: number;
  onTabSelected: (index: number) => void;
}

const HomeTab = ({selectedIndex, onTabSelected}: IProp) => {
  return (
    <HomeTabContainer>
      <HomeTabItem
        index={0}
        selectedIndex={selectedIndex}
        onTabSelected={onTabSelected}
        title="All Pokemons"
      />
      <HomeTabItem
        index={1}
        selectedIndex={selectedIndex}
        onTabSelected={onTabSelected}
        title="Favorites"
      />
    </HomeTabContainer>
  );
};

export default HomeTab;
