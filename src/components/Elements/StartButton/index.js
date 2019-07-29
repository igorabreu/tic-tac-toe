import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ButtonWrapper, StyledButton, ButtonText } from './styles';

const StartButton = ({
  isGameStarted = true,
  handleStartPress,
  matchResult,
}) => (
  <ButtonWrapper>
    <TouchableWithoutFeedback onPress={() => handleStartPress()}>
      <StyledButton isGameFinished={matchResult}>
        <ButtonText>{`Start ${matchResult ? 'New' : ''} Game`}</ButtonText>
      </StyledButton>
    </TouchableWithoutFeedback>
  </ButtonWrapper>
);

export default StartButton;
