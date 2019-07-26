import styled from 'styled-components/native';

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const Logo = styled.Image`
  max-width: 100px;
`;

export const SubTitle = styled.Text`
  color: gray;
  font-size: 11px;
  font-weight: bold;
`;
