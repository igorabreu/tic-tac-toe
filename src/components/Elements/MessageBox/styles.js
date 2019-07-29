import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const BoxWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  margin-bottom: ${Dimensions.get('window').height * 0.008}px;
`;

export const Box = styled.View`
  width: 100%;
  height: 35px;
  background-color: ${props =>
    props.isPlayerOne
      ? props.theme.color.lightRed
      : props.theme.color.lightGreen};
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ResultBox = styled.View`
  width: 100%;
  height: 35px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  ${props =>
    props.matchResult === 'draw'
      ? `background-color: ${props.theme.color.lightBlue}`
      : ''}
  ${props =>
    props.matchResult === 'playerOne' || props.matchResult === 'playerTwo'
      ? `background-color: ${props.theme.color.yellow}`
      : ''}
  ${props =>
    props.matchResult === 'default'
      ? `background-color: ${props.theme.color.lightGray}`
      : ''}
`;

export const Message = styled.Text`
  color: ${props => props.theme.color.white};
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "${props => props.theme.font}";
`;
