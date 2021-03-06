import React, { Component } from 'react';
import './App.css';
import GameContainer from './Containers/GameContainer.js'
import GameInfo from './Containers/GameInfo.js'

class App extends Component {
  constructor(props){
    super(props)
    // add something to state that just relays a status message
    // (resets when a move is made?)
    this.state = {
      boardState : ["E","E","E","E","E","E","E","E","E"],
      currentPlayer : "X",
      gameWon: false,
      statusMessage: "We're playing some tic-tac-toe!",
      oScore: 0,
      xScore: 0
    }
  }

  handleSquareChange = (squareIndex) => {
    // add a check to make sure the game isn't over
    // add a check to make sure the square isn't full already
    // this.victoryCheck()
    if (this.state.gameWon === false && this.state.boardState[squareIndex] === "E"){
      let newBoardState = this.state.boardState
      newBoardState[squareIndex] = this.state.currentPlayer
      this.setState({boardState : newBoardState})

      if(this.state.gameWon === true){
        this.handleVictory()
      } else if (this.state.gameWon === false){
        this.setState({statusMessage:"We're playing some tic-tac-toe!"})
        this.swapPlayer()
        this.victoryCheck()
      }

    } else {
      this.setState({statusMessage : "Please play in an empty square!"})
    }
    // this.victoryCheck()
  }

  swapPlayer(){
    if (this.state.currentPlayer === "X"){
      this.setState({currentPlayer: "O", statusMessage:"Ready for O to make a move..."})
    } else {
      this.setState({currentPlayer: "X", statusMessage:"Ready for X to make a move..."})
    }
  }

  victoryCheck = () => {
    let ticTacToes = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    // lots of victory conditions to check for
    // 012
    // 345
    // 678
    // specifically eight -- three across, three down, two diagonal
    ticTacToes.forEach(rowOfThree => {
      // console.log(this.state.boardState[ticTacToe[0]],this.state.boardState[ticTacToe[1]],this.state.boardState[ticTacToe[2]])
      let first = this.state.boardState[rowOfThree[0]]
      let second = this.state.boardState[rowOfThree[1]]
      let third = this.state.boardState[rowOfThree[2]]
      if (first === "X" && second === "X" && third === "X"){
        this.handleVictory("X")
        let newScore = this.state.xScore+1
        this.setState({gameWon: true, statusMessage: "Wow a decisive victory for X!", xScore: newScore})
      } else if (first === "O" && second === "O" && third === "O"){
        // foundVictory = true
        this.handleVictory("O")
        let newScore = this.state.oScore+1
        this.setState({gameWon: true , statusMessage: "O brings home a win!", oScore: newScore})
        // this.setState()
      }
    })

    if(!this.state.boardState.includes("E")){
      this.setState({gameWon: true, statusMessage: "Whoops, looks like no one wins this one..."})
    }
    // need ninth condition for all squares filled and no win

    return false
  }

  handleVictory = (player) => {
    console.log("we gotta victory")
  }

  handleReset = () => {
    this.setState({gameWon : false, boardState : ["E","E","E","E","E","E","E","E","E"]})
  }

  render(){
    return (
    <>
      <GameContainer
        boardState = {this.state.boardState}
        handleSquareChange = {this.handleSquareChange}
        />
      <GameInfo
        currentPlayer = {this.state.currentPlayer}
        gameWon = {this.state.gameWon}
        statusMessage = {this.state.statusMessage}
        oScore = {this.state.oScore}
        xScore = {this.state.xScore}
        handleReset = {this.handleReset}
      />
    </>
  )}
}

export default App;
