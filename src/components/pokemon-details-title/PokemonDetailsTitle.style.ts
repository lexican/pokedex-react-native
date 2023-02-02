import styled from 'styled-components/native';

export const PokemonDetailsTitleContainer = styled.View`
  height: 200px;
  background: #f3f9ef;
  padding-top: 23px;
  padding-left: 16px;
  padding-bottom: 14px;
  flex-direction: column;
  justify-content: space-between;
`;

export const PokemonDetailsInnerTitleContainer = styled.View``;
export const PokemonName = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #161a33;
`;

export const PokemonType = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #161a33;
`;

export const PokemonId = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #161a33;
`;

export const BackgroundIcon = styled.View`
  width: 176px;
  height: 176px;
  position: absolute;
  right: -50px;
  bottom: 0px;
  z-index: 1;
`;

export const PokemoneImage = styled.Image`
  height: 104px;
  z-index: 2;
  width: 136px;
  height: 125px;
  position: absolute;
  right: 16px;
  bottom: 0px;
`;
