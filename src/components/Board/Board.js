import React from 'react'
import Player from '../Player/Player'
import Stack from '../Stack/Stack'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import './Board.css'

const board = (props) => {
  return (
    <div className="Board">
      <Player id="player1"/>
      <div className="Board__center">
        <Stack id="stack6"/>
        <Stack id="stack7"/>
      </div>
      <Player id="player2"/>
    </div>
  )
}

export default DragDropContext(HTML5Backend)(board)