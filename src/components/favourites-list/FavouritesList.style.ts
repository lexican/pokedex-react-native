import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const height = Dimensions.get('window').height - 200;

export const FlatListContainer = styled.View`
  height: ${height}px;
  margin-bottom: 100px;
`;

export const Seperator = styled.View`
  height: 12px;
  width: 10px;
`;
