import winningCases from './winningCases';

const checkIfWin = arrayOfPickers => {
  let isWinner = false;
  winningCases.map((winningCase, index) => {
    if (isWinner) {
      return;
    }
    if (winningCase.every(val => arrayOfPickers.includes(val))) {
      return (isWinner = true);
    }
  });
  return isWinner;
};

export default checkIfWin;
