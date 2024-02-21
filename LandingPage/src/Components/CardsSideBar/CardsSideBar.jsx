import React from 'react'
import './CardsSideBar.css'
import Cardside from '../../constants/CardsSide'

export function CardSide () {
  return (
    <section className='containers-card'>
      {Cardside.map((card, id) => (
        <section className='cards-side' key={id}>

          {card.imgprofile && <img src={card.imgprofile} alt='Photo_Profile' className='profile-img' />}
          <section className='text-card'>
            <h2 className='title-side'>{card.tittle}</h2>
            <h1 className='description-side'> {card.description} </h1>
          </section>
          <div className='circle' />
          <p className='views-side'> {card.views} </p>

        </section>
      ))}

    </section>
  )
}
