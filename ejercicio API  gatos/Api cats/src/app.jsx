import React from 'react'
import { Header } from './Components/Header/header'
import { Facts } from './Components/Facts/facts'
import { Button } from './Components/Button/button'
import { CatContextProvider } from './Context/CatContextProvider'

export function App () {
  return (
    <div>
      <Header title='Random Cat Facts' />
      <main>
        <CatContextProvider>
          <Facts />
          <Button title='Get a new fact!' />
        </CatContextProvider>
      </main>
    </div>
  )
}

