import React from 'react';
import BoardSquare from '../Components/BoardSquare.js'

const GameContainer = props =>{

  const generateBoardSquares = () => {
    return props.boardState.map((square, index) => {
      return(
        <BoardSquare mapIndex={index} squareValue={square} />
      )
    })
  }

  return (
    <div className="gameContainer">{generateBoardSquares()}</div>
  )
}

export default GameContainer
