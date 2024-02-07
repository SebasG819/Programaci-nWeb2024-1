import React from "react"
import LiveIcon from "../../Images/LiveIcon.png"
import Mailbox_Icon from "../../Images/Mailbox_Icon.png"
import MessageIcon from "../../Images/MessageIcon.png"
import Share_Screen from "../../Images/Share_Screen.png"
export function NavBar(){
    return(
        <nav>
            <img className = "Icon" src= {Share_Screen} alt="Share_Screen" />
            <img className = "Icon" src= {MessageIcon} alt="Message" />
            <img className = "Icon" src={Mailbox_Icon} alt="Notification_Mailbox" />
            <button className = "ButtonLive" ><img className = "LiveIcon" src={LiveIcon} alt="" /> Crear </button>
        </nav>
    )
}