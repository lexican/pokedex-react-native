import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const height = Dimensions.get('window').height - 200;
export const PokemonListContainer = styled.View`
  padding-top: 16px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const FlatListContainer = styled.View`
  height: ${height}px;
  margin-bottom: 100px;
`;

export const PokemonFlatList = styled.FlatList``;

export const Seperator = styled.View`
  height: 12px;
  width: 10px;
`;

export const Loader = styled.ActivityIndicator`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 4;
`;
