import React from 'react';
import { BoxWrapper, Box, Message } from './styles';

const renderBoxResult = matchResult => {
  const results = {
    draw: 'Draw',
    playerOne: '★ ★ ★ Player 1 Win ★ ★ ★',
    playerTwo: '★ ★ ★ Player 2 Win ★ ★ ★',
    default: 'Tap Start Button To Play',
  };

  return (
    <Box>
      <Message>{results[matchResult]}</Message>
    </Box>
  );
};

const MessageBox = ({ turnPlayer, matchResult }) => (
  <BoxWrapper>
    {matchResult ? (
      renderBoxResult(matchResult)
    ) : (
      <Box isPlayerOne={turnPlayer === 1}>
        <Message>{`Player ${
          turnPlayer === 1 ? '1' : '2'
        } - It's your turn`}</Message>
      </Box>
    )}
  </BoxWrapper>
);

export default MessageBox;
