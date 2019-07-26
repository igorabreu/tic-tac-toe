import styled from 'styled-components/native';

export const Counter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 15px;
`;

export const Number = styled.Text`
  color: gray;
  font-size: 25px;
  font-weight: bold;
  margin-right: 5px;
`;

export const CounterText = styled.Text`
  color: gray;
  font-size: 12px;
  font-weight: bold;
  transform: translateY(-3px);
`;
