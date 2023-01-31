import React from 'react';
import {AppBar, AppBarTitle, FlexRow} from './HomeAppBar.style';
import Logo from '../../../assets/icons/logo.svg';

export default function HomeAppbar() {
  return (
    <AppBar>
      <FlexRow>
        <Logo height={24} width={24} />
        <AppBarTitle>Pokedex</AppBarTitle>
      </FlexRow>
    </AppBar>
  );
}
