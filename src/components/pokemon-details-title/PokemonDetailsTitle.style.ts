import styled from 'styled-components/native';
import {NotoSans_Regular} from '../../constants/constant';
type IProp = {
  backgroundColor: string;
};
export const PokemonDetailsTitleContainer = styled.View<IProp>`
  height: 200px;
  padding-top: 23px;
  padding-left: 16px;
  padding-bottom: 14px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.backgroundColor};
`;

export const PokemonDetailsInnerTitleContainer = styled.View``;
export const PokemonName = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #161a33;
  font-family: ${NotoSans_Regular};
`;

export const PokemonType = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #161a33;
  font-family: ${NotoSans_Regular};
`;

export const PokemonId = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #161a33;
  font-family: ${NotoSans_Regular};
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
