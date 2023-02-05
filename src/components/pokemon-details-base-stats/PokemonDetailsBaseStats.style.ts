import styled from 'styled-components/native';
import {NotoSans_Regular} from '../../constants/constant';

export const PokemonDetailsBaseStatsCon = styled.View`
  margin-top: 20px;
  background-color: #ffffff;
`;

export const BaseStatsTitleContainer = styled.View`
  padding-horizontal: 16px;
  padding-vertical: 12px;

  border-bottom-color: #e2e2e2;
  border-bottom-width: 2px;
`;

export const BaseStatsTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #161a33;
  font-family: ${NotoSans_Regular};
`;

export const StatItemContainer = styled.View`
  padding-left: 16px;
  padding-top: 16px;
`;

export const StatItemTitleContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StatItemTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #6b6b6b;
  margin-right: 6px;
  font-family: ${NotoSans_Regular};
`;

export const StatItemValue = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #161a33;
  font-family: ${NotoSans_Regular};
`;
