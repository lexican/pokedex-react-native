import styled from 'styled-components/native';

type IProp = {
  backgroundColor: string;
};

export const PokemonDetailsContainer = styled.SafeAreaView``;
export const AppBackArrow = styled.TouchableOpacity``;
export const PokemonDetailsAppBar = styled.View<IProp>`
  height: 57px;
  background: ${props => props.backgroundColor};
  padding: 17px;
  border-bottom-color: #e2e2e2;
  border-bottom-width: 2px;
`;
export const PokemonDetailsScrollView = styled.ScrollView`
  margin-bottom: 40px;
`;
