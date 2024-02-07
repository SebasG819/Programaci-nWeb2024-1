import React from "react"
import { NavBar } from "./Components/NavBar/Navbar"
import { Body } from "./Components/Body/Body"
import { CardsOnline } from "./Components/CardsOnline/CardsOnline"
import { ProfileImg } from "./Components/ProfilePhoto/ProfilePhoto"
import { TittleClips } from "./Components/TittleClips/TittleClips"
import { CardsFamous } from "./Components/FamousClips/FamousClips"


export default function App(){
    
    
              
    return (
    <>  
        <ProfileImg/>
        <NavBar/>
        <Body/>
        <CardsOnline/>
        <TittleClips/>
        <CardsFamous/>
        
        
       
        
        </>
    )
}