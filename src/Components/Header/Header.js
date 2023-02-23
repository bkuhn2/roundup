import React from 'react'
import { Link } from 'react-router-dom'
import'../Header/Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1 className='site-title'>Round Up</h1>
      </Link>
      <p className='tagline'>The News You Actually Want To Read: Art, Travel, Sports</p>
    </header>
  )
}

export default Header
