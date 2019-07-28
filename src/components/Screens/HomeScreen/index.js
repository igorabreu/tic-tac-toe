import React, { Component } from 'react';
import MainHeader from '../../Elements/Header';
import MatchCounter from '../../Elements/MatchCounter';
import GameBoard from '../../Elements/GameBoard';
import MessageBox from '../../Elements/MessageBox';
import PlayersInfo from '../../Elements/PlayersInfo';
import StartButton from '../../Elements/StartButton';
import { SafeArea, HomeWrapper } from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameFinished: true,
      isGameStarted: false,
    };
  }

  render() {
    const { isGameFinished, isGameStarted } = this.state;
    return (
      <SafeArea>
        <HomeWrapper>
          <MainHeader />
          <MatchCounter />
          <GameBoard />
          <MessageBox />
          <PlayersInfo />
          <StartButton {...this.state} />
        </HomeWrapper>
      </SafeArea>
    );
  }
}

export default HomeScreen;
