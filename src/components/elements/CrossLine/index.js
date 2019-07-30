import React from 'react';
import { CrossLineWinner } from './styles';
import arraysEqual from '../../../utils/arraysAreEqual';
import crossLineCases from '../../../utils/crossLineCases';

const returnCrossLineByResult = result => {
  let crossLineCase = [];
  crossLineCases.map((caseResult, index) => {
    if (arraysEqual(result, caseResult.case)) {
      crossLineCase = caseResult;
    }
  });
  return crossLineCase;
};

const CrossLine = ({ matchResult, result }) => (
  <CrossLineWinner
    crossLineCase={returnCrossLineByResult(result)}
    playerWinner={matchResult}
  />
);

export default CrossLine;
