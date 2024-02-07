import React from "react"
import './CardsOnline.css'
import Iso_img from "../../Images/Iso_img.png"
import Pal_Img from "../../Images/Pal_Img.jpg"
import DeiV_Img from "../../Images/DeiV_Img.png"
import Fifa_Img from "../../Images/Fifa_Img.jpg"
import Mix_Img from "../../Images/Mix.jpg"
export function CardsOnline(){

    const CardsOnline = [{

        tittle: "Bienvenido al nuevo stream",
        imagebanner: "https://sm.ign.com/ign_es/news/v/valorant-e/valorant-episode-7-act-3-new-agent-iso-all-abilities-explain_jycn.jpg",
        imageprofile: "https://yt3.googleusercontent.com/On2byUrC-sLMMzRfP5qoNL3DpXkI84FNxW6pHxmYqIexdmgs2AlD7l_rXkBw3BdkccNpEP35=s900-c-k-c0x00ffffff-no-rj",
        description: "Probando el nuevo agente de Valorant",
        category:"Valorant",
        buttonText:"Español"
    },
    {
        tittle: "Streamer de calidad",
        imagebanner: "https://www.mundodeportivo.com/alfabeta/hero/2024/01/palworld-falta-funciones.jpg",
        imageprofile: "https://yt3.googleusercontent.com/On2byUrC-sLMMzRfP5qoNL3DpXkI84FNxW6pHxmYqIexdmgs2AlD7l_rXkBw3BdkccNpEP35=s900-c-k-c0x00ffffff-no-rj",
        description:"Pokemones con armas",
        category:"Palworld",
        buttonText:"Español"

    },
    {
        tittle: "Duos fortnite",
        imagebanner: "https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/WGW4G6H3I5EGPMAYTFA2SVPAKE.jpg",
        imageprofile: "https://yt3.googleusercontent.com/On2byUrC-sLMMzRfP5qoNL3DpXkI84FNxW6pHxmYqIexdmgs2AlD7l_rXkBw3BdkccNpEP35=s900-c-k-c0x00ffffff-no-rj",
        description: "Fornachos con Perez",
        category:"Fortnite",
        buttonText:"Español"

    }

];

    return(
        <section className="CardsOnlineContainer">
            {CardsOnline.map((card) => (
                <section className="CardsOnline">
                <h1 className="Tittles">{card.tittle}</h1>
                {card.imagebanner && <img src={card.imagebanner} alt="Photo_Banner" className = "Banner_img" />}
                {card.imageprofile && <img style= {{maxWidth: "6%"}}src={card.imageprofile} alt="Photo_Profile" className = "Profile_img" />}
                <p className="Description"> {card.description} </p>
                <p className="Category"> {card.category} </p>
                <button className="Tags"> {card.buttonText} </button>

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
