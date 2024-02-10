import React from 'react'
import './CardsLike.css'


export function CardsLike(){

    

    const CardsLike = [{

        imagebanner: "https://www.callofduty.com/content/dam/atvi/callofduty/legacy/blackops3/landing-digital/bo3-landig-bo3-boxart.jpg",
        tittle: "Call of Duty: Black Ops 3",
        views: "40,5 k"
       
    },
    {
        imagebanner: "https://assets.2k.com/1a6ngf98576c/2VKN9QMtaSW9hkOkrTTYA9/3cf5a5435be5aaca2c61bb93e7a8513d/WWE_FRANCHISE-SKU-WWE23__1_.jpg",
        tittle: "WWE",
        views: "10,5 k"

    },
    {
        imagebanner: "https://upload.wikimedia.org/wikipedia/en/5/5b/F1_23_cover_art.jpg",
        tittle: "F1",
        views: "20,5 k"
    },
    {
        imagebanner: "https://upload.wikimedia.org/wikipedia/en/5/5b/F1_23_cover_art.jpg",
        tittle: "F1",
        views: "20,5 k"
    },
    {

        imagebanner: "https://www.callofduty.com/content/dam/atvi/callofduty/legacy/blackops3/landing-digital/bo3-landig-bo3-boxart.jpg",
        tittle: "Call of Duty: Black Ops 3",
        views: "40,5 k"
       
    },
    {

        imagebanner: "https://www.callofduty.com/content/dam/atvi/callofduty/legacy/blackops3/landing-digital/bo3-landig-bo3-boxart.jpg",
        tittle: "Call of Duty: Black Ops 3",
        views: "40,5 k"
       
    }
];

    return(
        <section className="CardsOnlineLike">
            {CardsLike.map((card) => (
                <section className="CardsLike">
                    
                {card.imagebanner && <img src={card.imagebanner} alt="Photo_Banner" className = "BannerLike_img" />}
                <h1 className="TittleLike">{card.tittle}</h1>
                <section className='Circleandviews'>
                <div class="circle"></div>
                <p className='ViewsLike'> {card.views} </p>
                </section>
                 </section>
                 
            ))}
            
          
            
        </section> 
    )
}