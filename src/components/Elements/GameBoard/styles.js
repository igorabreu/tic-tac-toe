import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const BoardWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${Dimensions.get('window').height * 0.38};
`;

export const Board = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${Dimensions.get('window').height * 0.3}px;
  height: ${Dimensions.get('window').height * 0.3}px;
`;

export const SquareOption = styled.View`
  width: 33%;
  height: 33%;
  border-color: ${props =>
    props.matchResult
      ? props.theme.color.mediumGray
      : props.theme.color.veryDarkGray};
  display: flex;
  justify-content: center;
  align-items: center;  
  ${props =>
    props.borderLeft
      ? `border-left-width: 7px;
        `
      : ''}
  ${props =>
    props.borderTop
      ? `border-top-width: 7px;
        `
      : ''}
  ${props =>
    props.borderBottom
      ? `border-bottom-width: 7px;
        `
      : ''}
  ${props =>
    props.borderRight
      ? `border-right-width: 7px;
        `
      : ''}
`;

export const ChoosedIcon = styled.Image`
  width: 30px;
`;
