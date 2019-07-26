import { matchCounter } from '../actions';

const currentMatchCounter = (state = matchCounter, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return action.counter + 1;
    default:
      return state;
  }
};

export default currentMatchCounter;
