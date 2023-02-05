import styled from 'styled-components/native';
import {NotoSans_Regular} from '../../constants/constant';

export const BodyInfo = styled.View`
  height: 78px;
  background-color: #ffffff;
  padding: 16px;
  display: flex;
  flex-direction: row;
`;

export const InfoTitle = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #6b6b6b;
  margin-right: 48px;
  font-family: ${NotoSans_Regular};
`;

export const InfoValue = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #161a33;
  font-family: ${NotoSans_Regular};
`;

export const InfoSectionContainer = styled.View``;
