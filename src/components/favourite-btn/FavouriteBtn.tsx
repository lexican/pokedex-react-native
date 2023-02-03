import React from 'react';
import {FavouriteButton, FavouriteButtonTitle} from './FavouriteBtn.style';
type IProp = {
  isFavourite: boolean;
  onPress: () => void;
};
export default function FavouriteBtn({isFavourite, onPress}: IProp) {
  return (
    <FavouriteButton
      isFavourite={isFavourite}
      onPress={() => {
        onPress();
      }}>
      <FavouriteButtonTitle isFavourite={isFavourite}>
        {isFavourite ? 'Remove from favourites' : 'Mark as favourite'}
      </FavouriteButtonTitle>
    </FavouriteButton>
  );
}
