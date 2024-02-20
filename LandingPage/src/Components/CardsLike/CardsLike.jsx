import React from 'react'
import './CardsLike.css'
import Cardslike from '../../constants/cardslike'

export function CardsLike () {
  return (
    <section className='CardsOnlineLike'>
      {Cardslike.map((card, id) => (
        <section className='CardsLike' key={id}>

          {card.imagebanner && <img src={card.imagebanner} alt='Photo_Banner' className='BannerLike_img' />}
          <h1 className='TittleLike'>{card.tittle}</h1>
          <section className='Circleandviews'>
            <div class='circle' />
            <p className='ViewsLike'> {card.views} </p>
          </section>
        </section>
      ))}

    </section>
  )
}
