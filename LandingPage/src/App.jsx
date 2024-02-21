import React from 'react'
import { NavBar } from './Components/NavBar/Navbar'
import { Body } from './Components/Body/Body'
import { CardsOnline } from './Components/CardsOnline/CardsOnline'
import { TittleClips } from './Components/TittleClips/TittleClips'
import { CardsFamous } from './Components/FamousClips/FamousClips'
import { CategoryTittle } from './Components/CategoryTittle/CategoryTittle'
import { CardsLike } from './Components/CardsLike/CardsLike/'
import { TittleRecom } from './Components/TittleRecom/TittleRecom'
import { ChanelsTittle } from './Components/ChanelsTittle/ChanelsTittle'
import { CardsChanels } from './Components/CardsChanels/CardsChanels'
import { NavbarDown } from './Components/NavBarDown/NavBarDown'
import { NavbarDesktop } from './Components/NavbarDesktop/NavbarDesktop'
import { FirstSideBar } from './Components/SideBarDesk/SideBarDesk'
import { CardSide } from './Components/CardsSideBar/CardsSideBar'
import { RecomTitleDesk } from './Components/RecomTitleDesk/RecomTitleDesk'
import { Carouselogic } from './Components/Carousel/Carousel'
export default function App () {
  return (
    <>

      <NavBar />
      <Body />

      <NavbarDesktop />
      <FirstSideBar />
      <CardSide />
      <RecomTitleDesk />
      <CardSide />
      <Carouselogic />
      <CardsOnline />
      <TittleClips />
      <CardsFamous />
      <CategoryTittle />
      <CardsLike />
      <TittleRecom />

      <ChanelsTittle />
      <CardsChanels />
      <NavbarDown />

    </>
  )
}
