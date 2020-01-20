import React from 'react';

const GameInfo = props =>{

  return (
    <div className="gameInfo">
      <p>{props.statusMessage}</p>
      <p>Wins for X: {props.xScore}</p>
      <p>Wins for O: {props.oScore}</p>
      <span
        className="resetButton"
        onClick = {(e) => window.location.reload()}>
        Reset!
      </span>
    </div>
  )
}

export default GameInfo
