import React from 'react';

const BoardSquare = props =>{
  return (
    <div
      className = "boardSquare"
      onClick={(e) => props.handleSquareChange(props.squareIndex)}>
      <h1 className={`${props.squareValue}Square`} >{props.squareValue}</h1>
    </div>
  )
}

export default BoardSquare
