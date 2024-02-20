import React from 'react'
import './NavBarDown.css'
import NavDown from '../../constants/navbardown'

export function NavbarDown () {
  return (

    <section className='NavbarDownCont'>
      {NavDown.map((card, id) => (
        <nav className='NavigationDown' key={id}>
          <div className='ContainerIconDown'>
            {card.iconheart && <img src={card.iconheart} alt='Photo_Profile' className='IconDown' />}
            {card.iconcompass && <img src={card.iconcompass} alt='Transmition_Icon' className='IconDown' />}
            {card.iconcopy && <img src={card.iconcopy} alt='Message_Icon' className='IconDown' />}
            {card.iconsearch && <img src={card.iconsearch} alt='Mail_Icon' className='IconDown' />}
          </div>
        </nav>

      ))}

    </section>

  )
}
