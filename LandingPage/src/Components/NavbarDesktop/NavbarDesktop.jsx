import React, { useState } from 'react'
import './NavbarDesktop.css'
import NaviDesk from '../../constants/navbardesktop'
import HamburguerOne from '../HamburguerOne/HamburguerOne'

export function NavbarDesktop () {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = (event) => {
    setShowMenu(!showMenu)
  }

  return (

    <section className='NavbarDesktop'>
      {NaviDesk.map((card, id) => (

        <nav className='NavigationBarDesktop' key={id}>
          <div className='firspart-nav'>
            {card.iconlogo && <img src={card.iconlogo} alt='Photo_Logo' className='photo-logo' />}
            <h1 className='text-nav'>{card.followtext}</h1>
            <h1 className='text-nav'>{card.exploretext}</h1>
            {card.iconmore && <button onClick={handleClick} className='icon-more'><img src={card.iconmore} alt='Photo_More' className='icon' /></button>}
          </div>
          <section>
            {!showMenu ? null : <HamburguerOne />}
          </section>
          <div className='searchbar'>
            <input type={card.inputsearch} className='input-search' />
            {card.iconsearch && <img src={card.iconsearch} alt='Photo_Search' className='icon' />}
          </div>
          <div className='lastpart-nav'>
            {card.iconcrown && <img src={card.iconcrown} alt='Crown_Icon' className='icon' />}
            {card.iconmail && <img src={card.iconmail} alt='Mail_Icon' className='icon' />}
            {card.iconmessage && <img src={card.iconmessage} alt='Message_Icon' className='icon' />}
            {card.iconbits && <img src={card.iconbits} alt='Bits_Icon' className='icon' />}
            <div className='button-photo'>
              <button className='button-prime'>
                <img src={card.imageprime} alt='Batery_Icon' className='batery-icon' />
                {card.buttonText}
              </button>
              {card.profileimg && <img src={card.profileimg} alt='Photo_Profile' className='profile-navdesk' />}
            </div>

          </div>

        </nav>

      ))}

    </section>

  )
}
