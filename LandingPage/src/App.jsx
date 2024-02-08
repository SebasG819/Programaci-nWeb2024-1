import React from "react"
import { NavBar } from "./Components/NavBar/Navbar"
import { Body } from "./Components/Body/Body"
import { CardsOnline } from "./Components/CardsOnline/CardsOnline"
import { ProfileImg } from "./Components/ProfilePhoto/ProfilePhoto"
import { TittleClips } from "./Components/TittleClips/TittleClips"
import { CardsFamous } from "./Components/FamousClips/FamousClips"
import { CategoryTittle } from "./Components/CategoryTittle/CategoryTittle"
import { CardsLike } from "./Components/CardsLike/CardsLike/"
import { TittleRecom } from "./Components/TittleRecom/TittleRecom"


export default function App(){
    
    
              
    return (
    <>  
        <ProfileImg/>
        <NavBar/>
        <Body/>
        <CardsOnline/>
        <TittleClips/>
        <CardsFamous/>
        <CategoryTittle/>
        <CardsLike/>
        <TittleRecom/>
        <CardsOnline/>
        
        
       
        
        </>
    )
}