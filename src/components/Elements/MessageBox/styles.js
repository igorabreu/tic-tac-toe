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
  background-color: #e6e6f0;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Message = styled.Text`
  color: gray;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "${props => props.theme.font}";
`;
