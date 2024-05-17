import './CardGif.css';
import { useGifContext } from '../../Hooks/useGifContext';

export function CardGif({ gif }) {
  const { addToFavorites } = useGifContext();

  const handleAddToFavorites = () => {
    addToFavorites(gif);
  };

  return (
    <div className='Card'>
      <img src={gif.imageUrl} alt={gif.title} />
      <h4>{gif.title}</h4>
      <button onClick={handleAddToFavorites}>Save Gif</button>
    </div>
  );
}

