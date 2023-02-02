import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const width = (Dimensions.get('window').width - 24) / 3;

type IProp = {
  index: number;
};

export const PokemonItemContainer = styled.TouchableOpacity<IProp>`
  height: 186px;
  width: ${width}px;
`;

export const PokemonItemInnerContainer = styled.View<IProp>`
  height: 186px;
  margin-right: ${props => ((props.index + 1) % 3 != 0 ? '10px' : '0px')};
`;

export const PokemonFooter = styled.View`
  background: #ffffff;
  border-radius-bottom-left: 4px;
  border-radius-bottom-right: 4px;
  padding: 8px 9px;
`;

export const PokemoneImage = styled.Image`
  height: 104px;
  background: #f3f9ef;
`;

export const PokemonId = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6b6b6b;
`;

export const PokemonName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 2px;
`;

export const PokemonType = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6b6b6b;
  margin-top: 10px;
`;
