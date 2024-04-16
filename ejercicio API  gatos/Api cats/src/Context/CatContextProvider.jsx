import { CatContext } from './CatContext'
import React from 'react';
import { useState, useRef } from 'react'

export function CatContextProvider ({ children }) {
  const [error, setError] = useState(null)
  const [catImg, setCatImg] = useState('')
  const [catFact, setCatFact] = useState('')
  const [isLoading, setIsLoading] = useState(false) 

// To show initial message
  const isFirstTime = useRef(true)

//Provides the values of the previously defined states and functions
  return (
    <CatContext.Provider value={{
      error,
      setError,
      catFact,
      setCatFact,
      catImg,
      setCatImg,
      isLoading,
      setIsLoading,
      isFirstTime
    }}
    >
      {children}  
    </CatContext.Provider>
  )
}
