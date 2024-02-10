import React from "react"
import './NavBarDown.css'
export function NavbarDown(){


    const NavDown = [{

        iconheart: "https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-violet-1.png",
        iconcompass: "https://cdn-icons-png.flaticon.com/512/795/795653.png",
        iconcopy: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-content-copy_90004.png",
        iconsearch:"https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png",
    }
    ]
    return(
        
        
        

        <section className="NavbarDownCont">
        {NavDown.map((card) => (
            <nav className="NavigationBarDown">
             <div className="ContainerIcon">
            {card.iconheart && <img src={card.iconheart} alt="Photo_Profile" className = "Photo_ProfileNav" />}
            {card.iconcompass && <img src={card.iconcompass} alt="Transmition_Icon" className = "Icon" />}
            {card.iconcopy && <img src={card.iconcopy} alt="Message_Icon" className = "Icon" />}
            {card.iconsearch && <img src={card.iconsearch} alt="Mail_Icon" className = "Icon" />}
            </div>
             </nav>
             
             
        ))}
        
      
        
    </section> 

)
}