import { NavBar, FavoriteCardGif } from '../../Components/Index';
import { useGifContext } from '../../Hooks/useGifContext';
import '../Favorites/Favorites.css'

export const Favorites = () => {
 const { favoriteGifs } = useGifContext();

  return (
    <div className='favorites'>
      <h2>Favorite GIFs</h2>
      <div className='favorite-gifs'>
        {favoriteGifs.map(gif => (
          <FavoriteCardGif key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

