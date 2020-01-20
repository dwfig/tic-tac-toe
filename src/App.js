import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './Containers/GameContainer.js'
import GameInfo from './Containers/GameInfo.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      boardState : ["empty","empty","empty","empty","empty","empty","empty","empty","empty"],
      currentPlayer : "X",
      gameWon: false
    }
  }
  render(){
    return (
    <>
      <GameContainer boardState = {this.state.boardState}/>
      <GameInfo
        currentPlayer = {this.state.currentPlayer}
        gameWon = {this.state.gameWon}
      />
    </>
  )}
}

export default App;
