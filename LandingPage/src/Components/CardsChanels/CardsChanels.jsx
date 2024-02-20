import React from 'react'
import './CardsChanels.css'
import Cardschanels from '../../constants/cardschanels'

export function CardsChanels () {
  return (
    <section className='CardsChanelsContainer'>
      {Cardschanels.map((card, id) => (
        <section className='CardsChanels' key={id}>
          {card.imageprofile && <img style={{ maxWidth: '10%' }} src={card.imageprofile} alt='Photo_Profile' className='Profile_imgChanel' />}
          <h1 className='TittlesChanels'>{card.tittle}</h1>
          <p className='DescriptionChanel'> {card.description} </p>
        </section>
      ))}
    </section>
  )
}
