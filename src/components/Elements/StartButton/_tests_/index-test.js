import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import StartButton from '../';

it('renders correctly', () => {
  const startButton = renderer.create(<StartButton />).toJSON();
  expect(startButton).toMatchSnapshot();
});
