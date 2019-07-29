import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ButtonWrapper, StyledButton, ButtonText } from './styles';

const StartButton = ({
  isGameStarted = true,
  handleStartPress,
  isGameFinished,
}) => (
  <ButtonWrapper>
    <TouchableWithoutFeedback onPress={() => handleStartPress()}>
      <StyledButton isGameFinished={isGameFinished}>
        <ButtonText>{`Start ${isGameStarted ? 'New' : ''} Game`}</ButtonText>
      </StyledButton>
    </TouchableWithoutFeedback>
  </ButtonWrapper>
);

export default StartButton;
