import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${Dimensions.get('window').height * 0.07};
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.color.lightGray};
`;

export const Logo = styled.Image`
  max-width: 100px;
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.color.darkGray};
  font-size: 11px;
  font-weight: bold;
  font-family: "${props => props.theme.font}";
`;
