import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { theme } from '../../../../_settings/style-theme';
import MatchCounter from '../';

it('renders correctly', () => {
  const matchCounter = renderer.create(<MatchCounter theme={theme} />).toJSON();
  expect(matchCounter).toMatchSnapshot();
});
