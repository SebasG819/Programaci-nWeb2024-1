import React from 'react'
import './HamburguerOne.css'
import HamburguerOneNav from '../../constants/HamburguerOne'
export default function HamburguerOne () {
  return (

    <section className='container-hambu'>
      {HamburguerOneNav.map((card, id) => (
        <section className='hambur-sec' key={id}>
          <h1 className='hambu-tittle'>{card.title1}</h1>
          <button className='button-hambu'> {card.button1} </button>
          <button className='button-hambu'> {card.button2} </button>
          <button className='button-hambu'> {card.button3} </button>
          <button className='button-hambu'> {card.button4} </button>
          <button className='button-hambu'> {card.button5} </button>
          <button className='button-hambu'> {card.button6} </button>
          <button className='button-hambu'> {card.button7} </button>
          <button className='button-hambu'> {card.button8} </button>
          <button className='button-hambu'> {card.button9} </button>
          <button className='button-hambu'> {card.button10} </button>
          <button className='button-hambu'> {card.button11} </button>
          <button className='button-hambu'> {card.button12} </button>
          <h1 className='hambu-tittle'>{card.title2}</h1>
          <button className='button-hambu'> {card.button13} </button>
          <button className='button-hambu'> {card.button14} </button>
          <button className='button-hambu'> {card.button15} </button>
          <button className='button-hambu'> {card.button16} </button>
          <button className='button-hambu'> {card.button17} </button>
          <button className='button-hambu'> {card.button18} </button>
          <button className='button-hambu'> {card.button19} </button>
          <button className='button-hambu'> {card.button20} </button>
          <button className='button-hambu'> {card.button21} </button>
          <button className='button-hambu'> {card.button22} </button>

        </section>

      ))}

    </section>

  )
}
