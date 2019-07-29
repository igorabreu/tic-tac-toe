import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ButtonWrapper, StyledButton, ButtonText } from './styles';

const StartButton = ({ handleStartPress, matchResult }) => (
  <ButtonWrapper>
    <TouchableWithoutFeedback onPress={() => handleStartPress()}>
      <StyledButton isGameFinished={matchResult}>
        <ButtonText>{`Start ${
          matchResult === 'default' ? '' : 'New'
        } Game`}</ButtonText>
      </StyledButton>
    </TouchableWithoutFeedback>
  </ButtonWrapper>
);

export default StartButton;
