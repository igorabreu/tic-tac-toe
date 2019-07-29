import React, { Component } from 'react';
import _ from 'lodash';
import MainHeader from '../../elements/Header';
import MatchCounter from '../../elements/MatchCounter';
import GameBoard from '../../elements/GameBoard';
import MessageBox from '../../elements/MessageBox';
import PlayersInfo from '../../elements/PlayersInfo';
import StartButton from '../../elements/StartButton';
import initialSquareOptions from './initalSquareOptions';
import { SafeArea, HomeWrapper } from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameFinished: true,
      isGameStarted: false,
      squareOptions: _.cloneDeep(initialSquareOptions),
      turnPlayer: 1,
      pickers: {
        playerOne: [],
        playerTwo: [],
      },
    };
    this.handlePlayerChoice = this.handlePlayerChoice.bind(this);
    this.handleStartPress = this.handleStartPress.bind(this);
  }

  handlePlayerChoice(index) {
    const { squareOptions, turnPlayer, pickers } = this.state;
    const newSquareOption = [...squareOptions];
    const newPickers = { ...pickers };

    //checks if square is already picked
    if (newSquareOption[index].pickedBy !== null) {
      return;
    }

    newSquareOption[index].pickedBy = turnPlayer;
    newPickers[turnPlayer === 1 ? 'playerOne' : 'playerTwo'].push(index);

    this.setState({
      squareOptions: newSquareOption,
      turnPlayer: turnPlayer === 1 ? 2 : 1,
      pickers: newPickers,
    });
  }

  handleStartPress() {
    this.setState({
      squareOptions: _.cloneDeep(initialSquareOptions),
      turnPlayer: 1,
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
