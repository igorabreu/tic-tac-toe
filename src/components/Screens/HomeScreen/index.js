import React, { Component } from 'react';
import _ from 'lodash';
import MainHeader from '../../elements/Header';
import MatchCounter from '../../elements/MatchCounter';
import GameBoard from '../../elements/GameBoard';
import MessageBox from '../../elements/MessageBox';
import PlayersInfo from '../../elements/PlayersInfo';
import StartButton from '../../elements/StartButton';
import initialSquareOptions from './initalSquareOptions';
import checkIfWin from '../../../utils/checkIfWin';
import { SafeArea, HomeWrapper } from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameStarted: false,
      squareOptions: _.cloneDeep(initialSquareOptions),
      turnPlayer: 1,
      pickers: {
        playerOne: [],
        playerTwo: [],
      },
      matchResult: 'inital',
    };
    this.handlePlayerChoice = this.handlePlayerChoice.bind(this);
    this.handleStartPress = this.handleStartPress.bind(this);
    this.setMatchResult = this.setMatchResult.bind(this);
  }

  handlePlayerChoice(index) {
    const { squareOptions, turnPlayer, pickers, matchResult } = this.state;
    const newSquareOption = [...squareOptions];
    const newPickers = { ...pickers };
    const currentPlayer = turnPlayer === 1 ? 'playerOne' : 'playerTwo';

    //checks if game is finished
    if (matchResult) {
      return;
    }

    //checks if square is already picked
    if (newSquareOption[index].pickedBy !== null) {
      return;
    }

    newSquareOption[index].pickedBy = turnPlayer;
    newPickers[currentPlayer].push(index);

    //checks if current player won
    if (checkIfWin(newPickers[currentPlayer])) {
      this.setMatchResult(currentPlayer);
    }

    //checks if match was draw
    if (newPickers.playerOne.length + newPickers.playerTwo.length === 8) {
      this.setMatchResult('draw');
    }

    this.setState({
      squareOptions: newSquareOption,
      turnPlayer: turnPlayer === 1 ? 2 : 1,
      pickers: newPickers,
    });
  }

  setMatchResult(result) {
    this.setState({
      matchResult: result,
    });
  }

  handleStartPress() {
    this.setState({
      squareOptions: _.cloneDeep(initialSquareOptions),
      turnPlayer: 1,
      matchResult: null,
      pickers: {
        playerOne: [],
        playerTwo: [],
      },
    });
  }

  render() {
    return (
      <SafeArea>
        <HomeWrapper>
          <MainHeader />
          <MatchCounter />
          <GameBoard
            handlePlayerChoice={index => this.handlePlayerChoice(index)}
            {...this.state}
          />
          <MessageBox {...this.state} />
          <PlayersInfo {...this.state} />
          <StartButton
            handleStartPress={() => this.handleStartPress()}
            {...this.state}
          />
        </HomeWrapper>
      </SafeArea>
    );
  }
}

export default HomeScreen;
