import React from 'react';
import { BoxWrapper, Box, Message } from './styles';

const MessageBox = ({ turnPlayer }) => (
  <BoxWrapper>
    <Box isPlayerOne={turnPlayer === 1}>
      <Message>{`Player ${
        turnPlayer === 1 ? '1' : '2'
      } - It's your turn`}</Message>
    </Box>
  </BoxWrapper>
);

export default MessageBox;
