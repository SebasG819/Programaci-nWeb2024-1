import React from 'react'
import "./NavbarDesktop.css"
export function NavbarDesktop(){


    const NaviDesk = [{

        iconlogo : "https://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png",
        followtext: "Siguiendo",
        exploretext: "Explorar",
        iconmore: "https://cdn-icons-png.flaticon.com/512/149/149947.png",
        inputsearch: "Buscar",
        iconsearch: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png",
        iconcrown: "https://cdn.icon-icons.com/icons2/931/PNG/512/crown_icon-icons.com_72445.png",
        iconmail: "https://cdn.icon-icons.com/icons2/494/PNG/512/inbox_icon-icons.com_48285.png",
        iconmessage: "https://cdn.icon-icons.com/icons2/2596/PNG/512/message_unread_icon_155130.png",
        iconbits: "https://cdn-icons-png.freepik.com/512/8810/8810390.png",
        buttonText:"Mira sin anuncios",
        imagebutton: "https://endlessicons.com/wp-content/uploads/2013/06/battery-icon-614x460.png",
        profileimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IdvqEqsy_AAeceGATK3Ws8vjv_c9YcZf_TE5zvem2_686_qnZHiJMe1_b-lsxMwPKPA&usqp=CAU"
    }
    ]
    return(
        

            <section className="NavbarDesktop">
            {NaviDesk.map((card) => (
                
                <nav className="NavigationBarDesktop">
                <div className="ContainerAllDesktop">
                {card.iconlogo && <img src={card.iconlogo} alt="Photo_Logo" className = "Photo_Logo" />}
                <h1>{card.followtext}</h1>
                <h1>{card.exploretext}</h1>
                {card.iconmore && <img src={card.iconmore} alt="Photo_More" className = "IconDesktop" />}
                <input type={card.inputsearch} />
                {card.iconsearch && <img src={card.iconsearch} alt="Photo_Search" className = "IconDesktop" />}
                {card.iconcrown && <img src={card.iconcrown} alt="Crown_Icon" className = "IconDesktop" />}
                {card.iconmail && <img src={card.iconmail} alt="Mail_Icon" className = "IconDesktop" />}
                {card.iconmessage && <img src={card.iconmessage} alt="Message_Icon" className = "IconDesktop" />}
                {card.iconbits && <img src={card.iconbits} alt="Bits_Icon" className = "IconDesktop" />}
                <button className="ButtonLive"><img src={card.imagebutton} alt="Batery_Icon" className = "BateryIcon"></img> {card.buttonText} </button>
                {card.profileimg && <img src={card.profileimg} alt="Photo_Profile" className = "Photo_ProfileNavDesktop" />}

                
                </div>
                
                 </nav>
                 
                 
            ))}
            
          
            
        </section> 

    )
}