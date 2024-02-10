import React from 'react'
import './CardsChanels.css'
export function CardsChanels(){

    const CardsChanels = [{

        tittle: "Bienvenido al nuevo stream",
        imageprofile: "https://yt3.googleusercontent.com/On2byUrC-sLMMzRfP5qoNL3DpXkI84FNxW6pHxmYqIexdmgs2AlD7l_rXkBw3BdkccNpEP35=s900-c-k-c0x00ffffff-no-rj",
        description: "Probando el nuevo agente de Valorant"
    },
]

return(
    <section className="CardsChanelsContainer">
        {CardsChanels.map((card) => (
            <section className="CardsChanels">
            <h1 className="Tittles">{card.tittle}</h1>
            {card.imageprofile && <img style= {{maxWidth: "10%"}}src={card.imageprofile} alt="Photo_Profile" className = "Profile_img" />}
            <p className="Description"> {card.description} </p>
    
            </section>
             
        ))}
        
      
        
    </section> 
)

}