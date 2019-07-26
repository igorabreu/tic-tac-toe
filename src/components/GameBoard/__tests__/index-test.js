import 'react-native';
import React from 'react';
import HomeScreen from '../';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const home = renderer.create(<HomeScreen />).toJSON();
  expect(home).toMatchSnapshot();
});
