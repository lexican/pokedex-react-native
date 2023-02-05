import styled from 'styled-components/native';
import {NotoSans_Regular} from '../../constants/constant';

type IProps = {
  isFavourite: boolean;
};

export const FavouriteButton = styled.TouchableOpacity<IProps>`
  position: absolute;
  z-index: 1000;
  padding: 16px;
  right: 16px;
  bottom: 74px;
  background-color: ${props => (props.isFavourite ? '#D5DEFF' : '#3558CD')};
  border-radius: 36px;
`;

export const FavouriteButtonTitle = styled.Text<IProps>`
  color: ${props => (props.isFavourite ? '#3558CD' : '#FFFFFF')};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  font-family: ${NotoSans_Regular};
`;
