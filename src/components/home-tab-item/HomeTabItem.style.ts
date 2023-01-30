import styled from 'styled-components/native';

interface IProp {
  active: boolean;
}

interface IBadgeProp {
  showBadge: boolean;
}

export const TabItem = styled.TouchableOpacity`
  background: #ffffff;
  width: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TabTitle = styled.Text<IProp>`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${props => (props.active ? '#161a33' : '#6B6B6B')};
`;

export const TabIndicator = styled.View<IProp>`
  display: ${props => (props.active ? 'flex' : 'none')};
  background: #3558cd;
  height: 4px;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const FavouriteBadge = styled.View<IBadgeProp>`
  display: ${props => (props.showBadge ? 'flex' : 'none')};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: #3558cd;
  margin-left: 4px;
  align-items: center;
  justify-content: center;
`;

export const FavouriteBadgeTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;
