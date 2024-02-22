import React from 'react'
import './CardsOnline.css'
import Cardsonline from '../../constants/cardsonline'
export function CardsOnline () {
  return (
    <section className='CardsOnlineContainer'>
      {Cardsonline.map((card, id) => (
        <section className='CardsOnline' key={id}>
          <h1 className='Tittles'>{card.tittle}</h1>
          {card.imagebanner && <img src={card.imagebanner} alt='Photo_Banner' className='Banner_img' />}
          {card.imageprofile && <img style={{ maxWidth: '20%' }} src={card.imageprofile} alt='Photo_Profile' className='Profile_img' />}
          <p className='Description'> {card.description} </p>
          <p className='Category'> {card.category} </p>
          <div class='CircleCard' />
          <p className='Spectators'> {card.spectator} </p>
          <button className='Tags'> {card.buttonText} </button>

        </section>

      ))}

    </section>
  )
}

// export function CardsOnline(props){
//     const{tittle, banner_img, profile_img, description, category, tags, } = props
//     return(
//         <section className="CardsOnline">
//             {
//                 CardsOnline.map((card) => {
//                     return <Card banner_img={card.banner_img} />

//                 })
//             }

//         </section>

//     )
// }
