import React from 'react';
import BoardSquare from '../Components/BoardSquare.js'

const GameContainer = props =>{

  const generateBoardSquares = () => {
    return props.boardState.map((square, index) => {
      return(
        <BoardSquare
          key = {index}
          squareIndex={index}
          squareValue={square}
          handleSquareChange = {props.handleSquareChange}
          />
      )
    })
  }

  return (
    <div className="gameContainer">{generateBoardSquares()}</div>
  )
}

export default GameContainer
