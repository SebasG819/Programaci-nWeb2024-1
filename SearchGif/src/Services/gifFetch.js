
export async function fetchGifs(searchTerm) {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=KDRPYBhbmm5cVq6ZDkSkF9QZ2SZ6IxlH&q=${searchTerm}&limit=20&lang=es`);
      const data = await response.json();
      return data.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        imageUrl: gif.images.fixed_height.url
      }));
    } catch (error) {
      console.error('Error fetching data from API:', error);
      throw error; 

    }
  }
  