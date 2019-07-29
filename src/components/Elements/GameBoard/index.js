import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { BoardWrapper, Board, SquareOption, ChoosedIcon } from './styles';
import iconCircle from '../../../assets/images/circle-icon.png';
import iconX from '../../../assets/images/x-icon.png';

const GameBoard = ({ handlePlayerChoice, squareOptions }) => (
  <BoardWrapper>
    <Board>
      {squareOptions.map((square, index) => {
        const { layoutBorders, pickedBy } = square;
        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => handlePlayerChoice(index)}
          >
            <SquareOption
              borderTop={layoutBorders[0]}
              borderRight={layoutBorders[1]}
              borderBottom={layoutBorders[2]}
              borderLeft={layoutBorders[3]}
            >
              {pickedBy ? (
                <ChoosedIcon
                  source={pickedBy === 1 ? iconCircle : iconX}
                  resizeMode={'contain'}
                />
              ) : null}
            </SquareOption>
          </TouchableWithoutFeedback>
        );
      })}
    </Board>
  </BoardWrapper>
);

export default GameBoard;
