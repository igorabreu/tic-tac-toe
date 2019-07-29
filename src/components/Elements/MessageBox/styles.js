import styled from 'styled-components/native';

export const BoxWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  margin-bottom: 20px;
`;

export const Box = styled.View`
  width: 100%;
  height: 35px;
  background-color: ${props => (props.isPlayerOne ? '#f48170' : '#8ad4ca')};
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Message = styled.Text`
  color: white;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "${props => props.theme.font}";
`;
