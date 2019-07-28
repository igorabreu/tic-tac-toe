import React from 'react';
import { BoardWrapper, Board, SquareOption, ChoosedIcon } from './styles';
import iconCircle from '../../../assets/images/circle-icon.png';
import iconX from '../../../assets/images/x-icon.png';

const GameBoard = () => (
  <BoardWrapper>
    <Board>
      <SquareOption borderRight borderBottom>
        <ChoosedIcon source={iconCircle} resizeMode={'contain'} />
      </SquareOption>
      <SquareOption borderRight borderBottom borderLeft>
        <ChoosedIcon source={iconX} resizeMode={'contain'} />
      </SquareOption>
      <SquareOption borderBottom borderLeft />
      <SquareOption borderTop borderRight borderBottom />
      <SquareOption borderTop borderRight borderBottom borderLeft />
      <SquareOption borderTop borderBottom borderLeft />
      <SquareOption borderTop borderRight />
      <SquareOption borderTop borderRight borderLeft />
      <SquareOption borderTop borderLeft />
    </Board>
  </BoardWrapper>
);

export default GameBoard;
