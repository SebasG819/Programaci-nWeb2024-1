import React from 'react'
import './HamburguerProfile.css'
import HamburguerProfile from '../../constants/hamburguerprofile'
export default function HamburguerProfi () {
  return (

    <section className='container-hambu'>
      {HamburguerProfile.map((card, id) => (
        <section className='hambur-profi-sec' key={id}>
          {card.imgprofile && <img src={card.imgprofile} alt='Photo_Profile' className='profile-hambu' />}
          <h1 className='hambu-name'>{card.titleprofile}</h1>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon1} alt='' className='icon-hambu-pro' />
            {card.title1}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon2} alt='' className='icon-hambu-pro' />
            {card.title2}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon3} alt='' className='icon-hambu-pro' />
            {card.title3}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon4} alt='' className='icon-hambu-pro' />
            {card.title4}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon5} alt='' className='icon-hambu-pro' />
            {card.title5}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon6} alt='' className='icon-hambu-pro' />
            {card.title7}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon8} alt='' className='icon-hambu-pro' />
            {card.title8}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon9} alt='' className='icon-hambu-pro' />
            {card.title9}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon10} alt='' className='icon-hambu-pro' />
            {card.title10}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon11} alt='' className='icon-hambu-pro' />
            {card.title11}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon12} alt='' className='icon-hambu-pro' />
            {card.title12}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon13} alt='' className='icon-hambu-pro' />
            {card.title13}
          </button>
          <button className='hambu-button-profi'>
            <img style={{ maxWidth: '6%' }} src={card.icon14} alt='' className='icon-hambu-pro' />
            {card.title14}
          </button>

        </section>

      ))}

    </section>

  )
}
