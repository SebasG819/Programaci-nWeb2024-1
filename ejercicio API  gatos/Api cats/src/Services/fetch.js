const FACT_URL = 'https://catfact.ninja/fact'
const IMG_URL = 'https://cataas.com/cat/says/'

// Fetch the fact
export const fetchFact = async () => {
  return fetch(FACT_URL)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from Fact API')
      }
      return res.json()
    })
    .then((data) => {
      const newFact = data.fact
      return newFact
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}

// Fetch the image
export const fetchImg = async ({ newImgText }) => {
  try {
  const imgUrl = `${IMG_URL}${newImgText}?fontSize=25&fontColor=white`;
    return imgUrl;

} catch (error) {
    console.log('No se obtuvo la imagen', error)
    throw error
}}
