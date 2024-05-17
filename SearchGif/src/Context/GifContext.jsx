import { createContext, useState } from 'react'
export const GifContext = createContext();

export const GifProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteGifs, setFavoriteGifs] = useState([]);

  const addToFavorites = (gif) => {
    setFavoriteGifs((prevFavorites) => [...prevFavorites, gif]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteGifs((prevFavorites) => prevFavorites.filter((gif) => gif.id !== id));
  };

  return (
    <GifContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        loading,
        setLoading,
        favoriteGifs,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
