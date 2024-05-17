import {Form, CardGif } from '../../Components/Index';
import { useGifContext } from '../../Hooks/useGifContext';
import'../Home/Home.css'
export const Home = () => {
  const { searchResults } = useGifContext();

  return (
    <div className='home'>
      <Form />
      <div className='search-results'>
        {searchResults.map(gif => (
          <CardGif key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

