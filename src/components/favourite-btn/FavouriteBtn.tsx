import React from 'react';
import {FavouriteButton, FavouriteButtonTitle} from './FavouriteBtn.style';
type IProp = {
  isFavourite?: boolean;
};
export default function FavouriteBtn({isFavourite = false}: IProp) {
  return (
    <FavouriteButton isFavourite={isFavourite}>
      <FavouriteButtonTitle isFavourite={isFavourite}>
        {isFavourite ? 'Remove from favourites' : 'Mark as favourite'}
      </FavouriteButtonTitle>
    </FavouriteButton>
  );
}
