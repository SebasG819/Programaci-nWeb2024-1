import React from 'react'
import './RecomendChanels.css'
import CardsOnline from '../../constants/cardsonline'
export function RecomendChanels () {
  return (
    <section className='CardsRecomendContainer'>
      {CardsOnline.map((card, id) => (
        <section className='CardsRecomend' key={id}>
          <h1 className='Tittle'>{card.tittle}</h1>
          {card.imagebanner && <img src={card.imagebanner} alt='Photo_Banner' className='Banner_img' />}
          {card.imageprofile && <img style={{ maxWidth: '6%' }} src={card.imageprofile} alt='Photo_Profile' className='Profile_img' />}
          <p className='Description'> {card.description} </p>
          <p className='Category'> {card.category} </p>
          <button className='Tags'> {card.buttonText} </button>

        </section>

      ))}

    </section>
  )
}
