import React from 'react';
import { PlayersContainer, SeparationBox } from './styles';
import PlayerStatus from '../PlayerStatus';

const PlayersInfo = () => (
  <PlayersContainer>
    <PlayerStatus playerOne />
    <SeparationBox />
    <PlayerStatus />
  </PlayersContainer>
);

export default PlayersInfo;
