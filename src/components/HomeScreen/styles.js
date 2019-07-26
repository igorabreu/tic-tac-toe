import styled from 'styled-components/native';

export const HomeWrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TextContent = styled.Text`
  font-family: "${props => props.theme.font}";
  font-size: 30px;
`;
