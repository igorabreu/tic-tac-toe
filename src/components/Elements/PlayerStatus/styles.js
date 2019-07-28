import styled from 'styled-components/native';

export const PlayerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const PlayerDescription = styled.View`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export const PlayerName = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "${props => props.theme.font}";
`;

export const TeamName = styled.Text`
  color: gray;
  font-size: 11px;
  font-weight: bold;
  font-family: "${props => props.theme.font}";
`;

export const RoundsCount = styled.View`
  width: 150px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CountIcon = styled.Image`
  width: 30px;
  margin-left: 8px;
`;
