import React from 'react';
import MainHeader from '../Header';
import MachCounter from '../MachCounter';
import { SafeArea, HomeWrapper, TextContent } from './styles';

const HomeScreen = () => (
  <SafeArea>
    <HomeWrapper>
      <MainHeader />
      <MachCounter />
    </HomeWrapper>
  </SafeArea>
);

export default HomeScreen;
