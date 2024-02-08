import React from 'react'
import './CardsLike.css'


export function CardsLike(){

    

    const CardsLike = [{

        imagebanner: "https://www.callofduty.com/content/dam/atvi/callofduty/legacy/blackops3/landing-digital/bo3-landig-bo3-boxart.jpg",
        tittle: "Call of Duty Black Ops 3",
        views: "40,5 k"
       
    },
];

    return(
        <section className="CardsOnlineLike">
            {CardsLike.map((card) => (
                <section className="CardsLike">
                    
                {card.imagebanner && <img src={card.imagebanner} alt="Photo_Banner" className = "BannerLike_img" />}
                <h1 className="TittleLike">{card.tittle}</h1>
                <p className='ViewsLike'> {card.views} </p>
                <div class="circle"></div>

                 </section>
                 
            ))}
            
          
            
        </section> 
    )
}