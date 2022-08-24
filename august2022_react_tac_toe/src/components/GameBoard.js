import GameTile from './GameTile';

function GameBoard(props) {
  const { game } = props;
  const { state: gameState } = game;
  const { tiles } = gameState;
  return (
    <div className='bg-light row'>
      {tiles.map((tile, index) => 
        <GameTile
          key={index}
          tile={tile}
          onClick={() => game.move(index)}
        />
      )}
    </div>
  );
}

export default GameBoard;
