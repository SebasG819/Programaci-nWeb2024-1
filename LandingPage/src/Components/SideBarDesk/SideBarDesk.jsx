import React from 'react'
import '../SideBarDesk/SideBarDesk.css'
export function FirstSideBar () {
  return (
    <>

      <section className='first-container'>
        <h1 className='side-firts-text'> Para ti </h1>
        <button className='button-icon'><img className='icon-button' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4Ebu5j6Zyv01M8yXxD-e7YseCjhFihtkQXb4ebU6xiIvEWEuL' alt='icon-desple' srcset='' /></button>
      </section>
      <section className='second-container'>
        <h1 className='side-second-text'> Canales que sigues </h1>
        <img className='sec-icon' src='https://cdn-icons-png.flaticon.com/512/28/28558.png' alt='' srcset='' />
      </section>

    </>

  )
}
