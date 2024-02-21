import React, { useState } from 'react'
import './Carousel.css'
import Carousel from '../../constants/carousel'
import ArrowLeft from '../../Images/flecha-izquierda.png'
import ArrowRight from '../../Images/Flecha-derecha.png'

export function Carouselogic () {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === Carousel.length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? Carousel.length - 1 : current - 1)
    console.log(prevSlide)
  }

  return (
    <div className='slider'>
      <img className='LeftArrow' onClick={prevSlide} src={ArrowLeft} alt='left-Arrow' />
      <img className='RightArrow' onClick={nextSlide} src={ArrowRight} alt='Rigth-Arrow' />
      {
            Carousel.map((card, id) => {
              return current === id
                ? (
                  <section className='cards-carousel' key={id}>

                    {card.imagebanner && <img src={card.imagebanner} alt='Photo_Banner' className='banner-caro' />}
                    <section className='caro-info'>

                      {card.imageprofile && <img style={{ maxWidth: '20%' }} src={card.imageprofile} alt='Photo_Profile' className='profile-caro' />}
                      <a className='title-caro'>{card.tittle}</a>

                      <p className='catego-caro'> {card.category} </p>
                      <p className='spec-caro'> {card.spectator} </p>
                      <button className='tags-caro'> {card.buttonText} </button>
                      <p className='descri-caro'> {card.description} </p>
                    </section>

                  </section>

                  )
                : null
            })
  }
    </div>
  )
};
