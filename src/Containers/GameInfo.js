import React from 'react';

const GameInfo = props =>{

  return (
    <div className="gameInfo">
      <p>Ready for {props.currentPlayer} to make a move</p>
      <p>{props.gameWon ? `${props.currentPlayer} wins!` : "Game in Progress"}</p>
    </div>
  )
}

export default GameInfo
