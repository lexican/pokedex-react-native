import styled from 'styled-components/native';

export const AppBar = styled.View`
  height: 57px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppBarTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #161a33;
  margin-left: 8px;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
