import React from 'react';
import { BoxWrapper, Box, Message } from './styles';

const renderBoxResult = matchResult => {
  switch (matchResult) {
    case 'draw':
      return (
        <Box>
          <Message>Draw</Message>
        </Box>
      );
    case 'playerOne':
      return (
        <Box>
          <Message>★ ★ ★ Player 1 Win ★ ★ ★</Message>
        </Box>
      );
    case 'playerTwo':
      return (
        <Box>
          <Message>★ ★ ★ Player 2 Win ★ ★ ★</Message>
        </Box>
      );
    default:
      return (
        <Box>
          <Message>Tap Start Button To Play</Message>
        </Box>
      );
  }
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
