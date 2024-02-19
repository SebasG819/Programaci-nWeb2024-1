import React from 'react'
import "./NavbarDesktop.css"
export function NavbarDesktop(){


    const NaviDesk = [{

        iconlogo : "https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png",
        followtext: "Siguiendo",
        exploretext: "Explorar",
        iconmore: "https://cdn-icons-png.flaticon.com/512/149/149947.png",
        inputsearch: "Buscar",
        iconsearch: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png",
        iconcrown: "https://seeklogo.com/images/P/prime-gaming-logo-61A701B3F5-seeklogo.com.png",
        iconmail: "https://cdn.icon-icons.com/icons2/494/PNG/512/inbox_icon-icons.com_48285.png",
        iconmessage: "https://cdn.icon-icons.com/icons2/2596/PNG/512/message_unread_icon_155130.png",
        iconbits: "https://cdn-icons-png.freepik.com/512/8810/8810390.png",
        buttonText:"Mira sin anuncios",
        imageprime: "https://endlessicons.com/wp-content/uploads/2013/06/battery-icon-614x460.png",
        profileimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IdvqEqsy_AAeceGATK3Ws8vjv_c9YcZf_TE5zvem2_686_qnZHiJMe1_b-lsxMwPKPA&usqp=CAU"
    }
    ]
    return(
        

            <section className="NavbarDesktop">
            {NaviDesk.map((card) => (
                
                <nav className="NavigationBarDesktop">
                <div className='firspart-nav'>
                {card.iconlogo && <img src={card.iconlogo} alt="Photo_Logo" className = "photo-logo" />}
                <h1 className='text-nav'>{card.followtext}</h1>
                <h1 className='text-nav'>{card.exploretext}</h1>
                {card.iconmore && <img src={card.iconmore} alt="Photo_More" className = "icon" />}
                </div>
                <div className='searchbar'>
                <input type={card.inputsearch} className = "input-search" />
                {card.iconsearch && <img src={card.iconsearch} alt="Photo_Search" className = "icon" />}
                </div >
                <div className='lastpart-nav'>
                {card.iconcrown && <img src={card.iconcrown} alt="Crown_Icon" className = "icon" />}
                {card.iconmail && <img src={card.iconmail} alt="Mail_Icon" className = "icon" />}
                {card.iconmessage && <img src={card.iconmessage} alt="Message_Icon" className = "icon" />}
                {card.iconbits && <img src={card.iconbits} alt="Bits_Icon" className = "icon" />}
                <div className='button-photo'>
                <button className="button-prime">
                <img src={card.imageprime} alt="Batery_Icon" className = "batery-icon"></img> 
                {card.buttonText} 
                </button>
                {card.profileimg && <img src={card.profileimg} alt="Photo_Profile" className = "profile-navdesk" />}
                </div>
                
                </div>
                
                
                 </nav>
                 
                 
            ))}
            
          
            
        </section> 

    )
}