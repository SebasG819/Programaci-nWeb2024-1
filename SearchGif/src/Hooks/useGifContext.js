import { useContext } from 'react';
import { GifContext } from '../Context/GifContext';

export const useGifContext = () => useContext(GifContext);
