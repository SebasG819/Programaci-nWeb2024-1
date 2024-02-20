import React from 'react'
import './NavBar.css'
import Navi from '../../constants/navbarmobile'
export function NavBar () {
  return (

    <section className='Navbar'>
      {Navi.map((card, id) => (

        <nav className='NavigationBar' key={id}>
          <div className='ContainerAll'>
            {card.profileimg && <img src={card.profileimg} alt='Photo_Profile' className='Photo_ProfileNav' />}
            <div className='ContainerIcon'>
              {card.iconshare && <img src={card.iconshare} alt='Transmition_Icon' className='Icon' />}
              {card.iconmessage && <img src={card.iconmessage} alt='Message_Icon' className='Icon' />}
              {card.iconmail && <img src={card.iconmail} alt='Mail_Icon' className='Icon' />}
            </div>
          </div>
          <div>
            <button className='ButtonLive'><img src={card.imagebutton} alt='Mail_Icon' className='LiveIcon' /> {card.buttonText} </button>
          </div>

        </nav>

      ))}

    </section>

  )
}
