import 'react-native';
import React from 'react';
import MessageBox from '../';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const home = renderer.create(<MessageBox />).toJSON();
  expect(home).toMatchSnapshot();
});
