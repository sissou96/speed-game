import React from 'react';
import Board from './components/Board/Board'
import PickCards from './components/PickCards/PickCards'
import EndgameModal from './components/EndgameModal/EndgameModal'
import './App.css'

const app = (props) => {
  return (
    <div>
      <EndgameModal />
      <Board /> 
      <PickCards />
    </div>
  );
}

export default app;
