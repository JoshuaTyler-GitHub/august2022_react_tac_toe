import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Game from './orchestration/Game';
import './styles/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: new Game(() => this.forceUpdate()),
    }
  }

  render() {
    const { state } = this;
    const { game } = state;

    return (
      <div className="App container-fluid">
        {/* Header */}
        <Header/>
  
        {/* GameBoard */}
        <GameBoard
          game={game}
        />
  
        {/* Time Travel */}
      </div>
    );
  }
}

export default App;
