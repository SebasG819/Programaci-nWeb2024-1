import React from 'react'
import './CardsChanels.css'
export function CardsChanels(){

    const CardsChanels = [{

        tittle: "JRRPOM",
        imageprofile: "https://yt3.googleusercontent.com/On2byUrC-sLMMzRfP5qoNL3DpXkI84FNxW6pHxmYqIexdmgs2AlD7l_rXkBw3BdkccNpEP35=s900-c-k-c0x00ffffff-no-rj",
        description: "1 video nuevo"
    },
]

return(
    <section className="CardsChanelsContainer">
        {CardsChanels.map((card) => (
            <section className="CardsChanels">
             {card.imageprofile && <img style= {{maxWidth: "10%"}}src={card.imageprofile} alt="Photo_Profile" className = "Profile_imgChanel" />}
            <h1 className="TittlesChanels">{card.tittle}</h1>
            <p className="DescriptionChanel"> {card.description} </p>
    
            </section>
             
        ))}
        
      
        
    </section> 
)

}