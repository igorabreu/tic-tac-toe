import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  height: 100%;
`;

export const HomeWrapper = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

export const TextContent = styled.Text`
  font-family: "${props => props.theme.font}";
  font-size: 10px;
`;
