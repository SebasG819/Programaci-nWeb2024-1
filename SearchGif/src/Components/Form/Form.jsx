import './Form.css';
import { useState } from 'react';
import { useGifContext } from '../../Hooks/useGifContext';
import { SearchButton } from '../Button/SearchButton';
import { fetchGifs } from '../../Services/gifFetch';
import { Loader } from '../Loader/Loader'
import debounce from 'just-debounce-it'; 

export function Form() {
  const { loading, setLoading, setSearchTerm, searchResults, setSearchResults } = useGifContext();
  const [inputValue, setInputValue] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState(null);

  const delayedSearch = debounce(async (term) => {
    try {
      const gifs = await fetchGifs(term);
      if (gifs.length === 0) {
        setError(`No se encontraron resultados para "${term}"`);
      } else {
        setSearchResults(gifs);
      }
    } catch (error) {
      setError('Se produjo un error al buscar gifs.');
    } finally {
      setLoading(false);
      setShowLoading(false); 
    }
  }, 500); 

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value === '') {
      setSearchResults([]);
    }
    setShowLoading(value !== '' && !loading);
    setSearchTerm(value);
    delayedSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit}>
      <div className='input-wrapper'>
        <input
        className='inpu'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter search term"
        />
        </div>
        <SearchButton />
      </form>
      {showLoading && (
        <div className="loading">
          <Loader />
        </div>
      )}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
      {searchResults.length > 0 && (
        <div className="search-info">
          <p>{searchResults.length} results for "{inputValue}"</p>
        </div>
      )}
    </div>
  );
}
