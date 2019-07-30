import 'react-native';
import React from 'react';
import Header from '../';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const header = renderer.create(<Header />).toJSON();
  expect(header).toMatchSnapshot();
});
