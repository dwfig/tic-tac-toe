import React from 'react';

const GameInfo = props =>{

  return (
    <div className="gameInfo">
      <p>{props.statusMessage}</p>
      <span
        className="resetButton"
        onClick = {(e) => window.location.reload()}>
        Reset!
      </span>
    </div>
  )
}

export default GameInfo
