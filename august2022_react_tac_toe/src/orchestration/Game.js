class Game {
  constructor(forceUpdate) {
    this.state = {
      nextMove: 'X',
      moves: [],
      tiles: Array(9).fill(''),
      forceUpdate,
    }
  }

  move(tileIndex) {
    const { state } = this;
    const { forceUpdate, nextMove } = state;
    this.state.tiles[tileIndex] = String(nextMove);
    this.state.nextMove = nextMove === 'X' ? 'O' : 'X';
    forceUpdate();
  }
}
export default Game;