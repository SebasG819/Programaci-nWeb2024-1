import React from 'react';
import { useCallback, useEffect, useContext } from 'react'
import { fetchFact } from '../Services/fetch';
import { fetchImg } from '../Services/fetch';
import debounce from 'just-debounce-it' 
import { CatContext } from '../Context/CatContext'

// We define the custom useApp hook
export const useApp = () => {
  const context = useContext(CatContext) 
  
// We check if the context is present
  if (!context) {
    throw new Error('This component sould be within a GifsContextrovider Component') // Si el contexto no está presente, lanzamos un error
  }
  
  const {
    error,
    setError,
    catFact,
    setCatFact,
    catImg,
    setCatImg,
    isLoading,
    setIsLoading,
    isFirstTime
  } = context

// Effect to display a message if it is the first time the component is loaded
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = (catFact === '') 
    }
  }, [catFact])

// Function to handle the get new fact and image button event
  const handleBTN = () => {
    setIsLoading(true) 
    getFact() 
  }

// Function to get a new cat fact
  const getFact = useCallback(
    debounce(() => {
      fetchFact() 
        .then(newFact => {
          setCatFact(newFact) 
          const newImgText = newFact.split(' ').slice(0, 4).join(' ') 
          getImg(newImgText) 
        })
        .catch(e => setError(e)) 
    }, 500)
    , []) 

// Function to get a new cat image
  const getImg = useCallback(
    debounce((newImgText) => {
      fetchImg({ newImgText }) 
        .then(newImg => setCatImg(newImg)) 
        .catch(e => setError(e)) 
        .finally(() => setIsLoading(false)) 
    }, 500)
    , []) 

// Effects for debugging purposes
  useEffect(() => {
    console.log('getFact volvió a definirse') 
  }, [getFact])

  useEffect(() => {
    console.log('getImg volvió a definirse') 
  }, [getImg])

// We return the data and functions necessary for the component that uses this hook
  return (
    {
      error,
      catImg,
      catFact,
      isLoading,
      isFirstTime,
      handleBTN
    }
  )
}
