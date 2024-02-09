import React from 'react'
import './FamousClips.css'
import Demon_Img from "../../Images/Demon_Img.jpeg"
import Mix_Img from "../../Images/Mix.jpg"

export function CardsFamous(){

    const CardsFamous = [{

        tittle: "MVP en la champions",
        imagebanner: "https://files.bo3.gg/uploads/image/16660/image/webp-ee6e43af1545d0d38e2bcd14a5b23bb8.webp",
        imageprofile: "https://yt3.googleusercontent.com/On2byUrC-sLMMzRfP5qoNL3DpXkI84FNxW6pHxmYqIexdmgs2AlD7l_rXkBw3BdkccNpEP35=s900-c-k-c0x00ffffff-no-rj",
        name:"Jrrpom",
        duration: "00:25",
        time: "Hace 2 días",
        views: "405 vistas"
        

       
    },
];

    return(
        <section className="CardsOnlineFamous">
            {CardsFamous.map((card) => (
                <section className="CardsFamous">
                    
                {card.imagebanner && <img style= {{maxHeight: "100%"}} src={card.imagebanner} alt="Photo_Banner" className = "BannerClips_img" />}
                {card.imageprofile && <img style= {{maxWidth: "10%"}}src={card.imageprofile} alt="Photo_Profile" className = "ProfileFS_img" />}
                <h1 className="Tittle">{card.tittle}</h1>
                <h2 className='Name'> {card.name} </h2>
                <section className='Time'>
                    <p className='Timetext'> {card.duration}</p>
                </section>
                <section className='Ago'>
                    <p className='AgoText'> {card.time}</p>
                </section>
                <section className='Views'>
                    <p className='ViewsText'> {card.views}</p>
                </section>

                </section>
                 
            ))}
            
          
            
        </section> 
    )
}