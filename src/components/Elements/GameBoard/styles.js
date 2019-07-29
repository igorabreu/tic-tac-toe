import styled from 'styled-components/native';

export const BoardWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 290px;
  padding: 35px;
`;

export const Board = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const SquareOption = styled.View`
  width: 33%;
  height: 33%;
  border-color: ${props =>
    props.matchResult
      ? props.theme.color.mediumGray
      : props.theme.color.veryDarkGray};
  display: flex;
  justify-content: center;
  align-items: center;  
  ${props =>
    props.borderLeft
      ? `border-left-width: 6px;
        `
      : ''}
  ${props =>
    props.borderTop
      ? `border-top-width: 6px;
        `
      : ''}
  ${props =>
    props.borderBottom
      ? `border-bottom-width: 6px;
        `
      : ''}
  ${props =>
    props.borderRight
      ? `border-right-width: 6px;
        `
      : ''}
`;

export const ChoosedIcon = styled.Image`
  width: 30px;
`;
