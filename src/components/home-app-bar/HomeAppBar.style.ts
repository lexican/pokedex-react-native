import styled from 'styled-components/native';
import {NotoSans_Regular} from '../../constants/constant';

export const AppBar = styled.View`
  height: 57px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 2px;
`;

export const AppBarTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #161a33;
  margin-left: 8px;
  font-family: ${NotoSans_Regular};
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
