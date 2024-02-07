import React from "react"
import './ProfilePhoto.css'

import Photo_Profile from "../../Images/Photo_Profile.jpeg"
export function ProfileImg(){
    return(
        <div>
            <img className = "Photo_Profile" src =  {Photo_Profile} alt="Profile_Photo" />
        
        </div>
    )
}