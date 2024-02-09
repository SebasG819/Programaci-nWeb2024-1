import React from "react"
import '../../../src/style.css'
export function NavBar(){


    const Navi = [{

        iconshare: "https://cdn-icons-png.flaticon.com/512/1843/1843061.png",
        iconmessage: "https://cdn.icon-icons.com/icons2/2596/PNG/512/message_unread_icon_155130.png",
        iconmail: "https://cdn.icon-icons.com/icons2/494/PNG/512/inbox_icon-icons.com_48285.png",
        buttonText:"Crear",
        imagebutton: "https://static.thenounproject.com/png/2146857-200.png",
        profileimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IdvqEqsy_AAeceGATK3Ws8vjv_c9YcZf_TE5zvem2_686_qnZHiJMe1_b-lsxMwPKPA&usqp=CAU"
    }
    ]
    return(
        
        
        

            <section className="Navbar">
            {Navi.map((card) => (
                
                <nav className="NavigationBar">
                <div className="ContainerAll">
                {card.profileimg && <img src={card.profileimg} alt="Photo_Profile" className = "Photo_ProfileNav" />}
                <div className="ContainerIcon">
                {card.iconshare && <img src={card.iconshare} alt="Transmition_Icon" className = "Icon" />}
                {card.iconmessage && <img src={card.iconmessage} alt="Message_Icon" className = "Icon" />}
                {card.iconmail && <img src={card.iconmail} alt="Mail_Icon" className = "Icon" />}
                </div>
                </div>
                <div>
                <button className="ButtonLive"><img src={card.imagebutton} alt="Mail_Icon" className = "LiveIcon"></img> {card.buttonText} </button>
                </div>

                 </nav>
                 
                 
            ))}
            
          
            
        </section> 

    )
}