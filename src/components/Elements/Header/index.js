import React from 'react';
import gympassLogo from '../../../assets/images/logo.png';
import { HeaderContent, Logo, SubTitle } from './styles';

const MainHeader = () => (
  <HeaderContent>
    <Logo source={gympassLogo} />
    <SubTitle>Developers Challenge</SubTitle>
  </HeaderContent>
);

export default MainHeader;
