import React from 'react'
import './Header.css'
import logo from '../../Resouces/evangadi-logo-home.png'

function Header() {
  return (
      <div className='header'>
          <div className='header__wrapper'>
          <img className='logo' alt='' src={logo}/>
          <div className='header__right'>
              <div className='home'>
                  Home
              </div>
              <div className='how it works'>How it Works</div>
              <button className='signin'>SIGN IN</button>
              </div>
          </div>
      </div>
  )
}

export default Header