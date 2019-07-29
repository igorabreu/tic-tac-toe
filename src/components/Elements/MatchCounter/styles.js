import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Counter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: ${Dimensions.get('window').height * 0.01};
`;

export const Number = styled.Text`
  color: ${props => props.theme.color.darkGray};
  font-size: 23px;
  font-weight: bold;
  margin-right: 3px;
  font-family: "${props => props.theme.font}";
`;

export const CounterText = styled.Text`
  color: ${props => props.theme.color.darkGray};
  font-size: 12px;
  font-weight: bold;
  transform: translateY(-3px);
  font-family: "${props => props.theme.font}";
`;
