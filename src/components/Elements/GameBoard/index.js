import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import iconCircle from '../../../assets/images/circle-icon.png';
import iconX from '../../../assets/images/x-icon.png';
import { BoardWrapper, Board, SquareOption, ChoosedIcon } from './styles';

const GameBoard = ({ handlePlayerChoice, squareOptions, matchResult }) => (
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
              matchResult={matchResult}
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
