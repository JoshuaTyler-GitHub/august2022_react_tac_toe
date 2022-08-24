function GameTile(props) {
  const { tile, onClick } = props;
  return (
    <button
      className='bg-dark border col-4 p-3 text-light'
      style={{ height: '100px', width: '100px' }}
      onClick={onClick}
    >
      {tile}
    </button>
  );
}
export default GameTile;
