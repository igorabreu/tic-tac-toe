import React from 'react';
import iconCircle from '../../../assets/images/circle-icon.png';
import iconCircleDisabled from '../../../assets/images/disabled-circle-icon.png';
import iconX from '../../../assets/images/x-icon.png';
import iconXDisabled from '../../../assets/images/disabled-x-icon.png';
import {
  PlayerWrapper,
  PlayerDescription,
  PlayerName,
  TeamName,
  RoundsCount,
  CountIcon,
} from './styles';

const PlayerStatus = ({ playerOne, playerPickers }) => (
  <PlayerWrapper>
    <PlayerDescription>
      <PlayerName>{`Player ${playerOne ? '1' : '2'}`}</PlayerName>
      <TeamName>{`${playerOne ? 'Red' : 'Green'} team`}</TeamName>
    </PlayerDescription>
    <RoundsCount>
      {// creates array of remaining pickers based on number of pickers
      Array.apply(null, new Array(4 - playerPickers.length)).map(
        (item, index) => {
          return (
            <CountIcon
              key={index}
              source={playerOne ? iconCircleDisabled : iconXDisabled}
              resizeMode={'contain'}
            />
          );
        },
      )}
      {playerPickers.map((picked, index) => {
        return (
          <CountIcon
            key={index}
            source={playerOne ? iconCircle : iconX}
            resizeMode={'contain'}
          />
        );
      })}
    </RoundsCount>
  </PlayerWrapper>
);

export default PlayerStatus;
