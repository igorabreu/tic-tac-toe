import React from 'react';
import { BoxWrapper, Box, Message } from './styles';

const MessageBox = ({ turnPlayer, matchResult }) => (
  <BoxWrapper>
    {matchResult === 'draw' ? (
      <Box isPlayerOne={turnPlayer === 1}>
        <Message>Draw</Message>
      </Box>
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
