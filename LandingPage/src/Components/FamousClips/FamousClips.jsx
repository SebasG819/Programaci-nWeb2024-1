import React from 'react'
import './FamousClips.css'
import Cardsfamous from '../../constants/famousclips'

export function CardsFamous () {
  return (
    <section className='CardsOnlineFamous'>
      {Cardsfamous.map((card, id) => (
        <section className='CardsFamous' key={id}>

          {card.imagebanner && <img style={{ maxHeight: '100%' }} src={card.imagebanner} alt='Photo_Banner' className='BannerClips_img' />}
          {card.imageprofile && <img style={{ maxWidth: '10%' }} src={card.imageprofile} alt='Photo_Profile' className='ProfileFS_img' />}
          <h1 className='Tittle'>{card.tittle}</h1>
          <h2 className='Name'> {card.name} </h2>

        </section>

      ))}

    </section>
  )
}
