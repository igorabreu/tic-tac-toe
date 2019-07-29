import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SafeArea = styled.SafeAreaView`
  height: 100%;
`;

export const HomeWrapper = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${Dimensions.get('window').height * 0.01}px
    ${Dimensions.get('window').width * 0.05}px;
`;
