import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const CrossLineWinner = styled.View`
  background-color: ${props =>
    props.playerWinner === 'playerOne'
      ? props.theme.color.darkRed
      : props.theme.color.darkGreen};
  width: 110%;
  position: absolute;
  top: 50%;
  left: 0;
  height: 4px;
  transform: rotate(${props => props.crossLineCase.rotate}deg)
    translate(
      ${props =>
        Dimensions.get('window').width * props.crossLineCase.translateX}px,
      ${props =>
        props.crossLineCase.type === 2
          ? `${Dimensions.get('window').width *
              props.crossLineCase.translateY}px`
          : `${props.crossLineCase.translateY}px`}
    );
`;
