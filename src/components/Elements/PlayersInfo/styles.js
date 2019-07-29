import styled from 'styled-components/native';

export const PlayersContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  padding: 0px 20px;
`;

export const SeparationBox = styled.View`
  width: 100%;
  height: 6px;
  border-radius: 1px;
  background-color: ${props => props.theme.color.lightGray};
`;
