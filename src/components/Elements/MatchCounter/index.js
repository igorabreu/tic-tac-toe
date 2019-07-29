import React from 'react';
import { Counter, Number, CounterText } from './styles';

const MatchCounter = ({ counter }) => (
  <Counter>
    <Number>{counter}</Number>
    <CounterText>matches</CounterText>
  </Counter>
);

export default MatchCounter;
