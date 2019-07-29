import React, { Component } from 'react';
import MainHeader from '../../Elements/Header';
import MatchCounter from '../../Elements/MatchCounter';
import GameBoard from '../../Elements/GameBoard';
import MessageBox from '../../Elements/MessageBox';
import PlayersInfo from '../../Elements/PlayersInfo';
import StartButton from '../../Elements/StartButton';
import initialSquareOptions from './initalSquareOptions';
import { SafeArea, HomeWrapper } from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameFinished: true,
      isGameStarted: false,
      squareOptions: initialSquareOptions,
      turnPlayer: 1,
      pickers: {
        playerOne: [],
        playerTwo: [],
      },
    };
    this.handlePlayerChoice = this.handlePlayerChoice.bind(this);
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
          <StartButton {...this.state} />
        </HomeWrapper>
      </SafeArea>
    );
  }
}

export default HomeScreen;
