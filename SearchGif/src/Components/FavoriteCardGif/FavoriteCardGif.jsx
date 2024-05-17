import './FavoriteCardGif.css';
import { useGifContext } from '../../Hooks/useGifContext';

export function FavoriteCardGif({ gif }) {
  const { removeFromFavorites } = useGifContext();

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(gif.id);
  };

  return (
    <div className='FavoriteCard'>
      <img src={gif.imageUrl} alt={gif.title} />
      <h4>{gif.title}</h4>
      <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
    </div>
  );
}
