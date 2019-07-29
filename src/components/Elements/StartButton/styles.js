import styled from 'styled-components/native';

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  margin-top: 48px;
`;

export const StyledButton = styled.View`
  border-radius: 25px;
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.isGameFinished
      ? props.theme.color.blue
      : props.theme.color.lightBlue};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "${props => props.theme.font}";
`;
