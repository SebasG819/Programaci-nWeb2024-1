import './SearchButton.css'
import { useGifContext } from '../../Hooks/useGifContext';

export function SearchButton() {
    const { setSearchTerm } = useGifContext();

    const handleClick = () => {
    };
  
    return (
      <div className='sec-button'>
        <button onClick={handleClick}>Search</button>
      </div>
    );
  }
