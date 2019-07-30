import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import initialSquareOptions from '../../../../utils/initalSquareOptions';
import GameBoard from '../';

it('renders correctly', () => {
  const gameBoard = renderer
    .create(<GameBoard squareOptions={initialSquareOptions} />)
    .toJSON();
  expect(gameBoard).toMatchSnapshot();
});
