import 'react-native';
import React from 'react';
import MessageBox from '../';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const messageBox = renderer.create(<MessageBox />).toJSON();
  expect(messageBox).toMatchSnapshot();
});
