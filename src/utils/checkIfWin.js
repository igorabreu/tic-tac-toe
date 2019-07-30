import winningCases from './winningCases';

const checkIfWin = arrayOfPickers => {
  let result = {
    isWinner: false,
    case: null,
  };
  winningCases.map((winningCase, index) => {
    if (result.isWinner) {
      return;
    }
    if (winningCase.every(val => arrayOfPickers.includes(val))) {
      result.isWinner = true;
      result.case = winningCase;
    }
  });
  return result;
};

export default checkIfWin;
