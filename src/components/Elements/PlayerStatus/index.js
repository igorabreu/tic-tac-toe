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

const PlayerStatus = ({ playerOne }) => (
  <PlayerWrapper>
    <PlayerDescription>
      <PlayerName>{`Player ${playerOne ? '1' : '2'}`}</PlayerName>
      <TeamName>{`${playerOne ? 'Red' : 'Green'} team`}</TeamName>
    </PlayerDescription>
    {playerOne ? (
      <RoundsCount>
        <CountIcon source={iconCircle} resizeMode={'contain'} />
        <CountIcon source={iconCircleDisabled} resizeMode={'contain'} />
        <CountIcon source={iconCircle} resizeMode={'contain'} />
        <CountIcon source={iconCircleDisabled} resizeMode={'contain'} />
      </RoundsCount>
    ) : (
      <RoundsCount>
        <CountIcon source={iconX} resizeMode={'contain'} />
        <CountIcon source={iconXDisabled} resizeMode={'contain'} />
        <CountIcon source={iconX} resizeMode={'contain'} />
        <CountIcon source={iconXDisabled} resizeMode={'contain'} />
      </RoundsCount>
    )}
  </PlayerWrapper>
);

export default PlayerStatus;
