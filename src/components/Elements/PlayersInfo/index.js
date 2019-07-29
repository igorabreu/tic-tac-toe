import React from 'react';
import { PlayersContainer, SeparationBox } from './styles';
import PlayerStatus from '../PlayerStatus';

const PlayersInfo = ({ pickers }) => (
  <PlayersContainer>
    <PlayerStatus playerOne playerPickers={pickers.playerOne} />
    <SeparationBox />
    <PlayerStatus playerPickers={pickers.playerTwo} />
  </PlayersContainer>
);

export default PlayersInfo;
