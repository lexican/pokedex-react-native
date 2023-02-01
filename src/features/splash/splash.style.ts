import styled from 'styled-components/native';

export const SplashContainer = styled.View`
  flex: 1;
  background: ${(props: {theme: {colors: {primary: string}}}) =>
    props.theme.colors.primary};
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
`;
