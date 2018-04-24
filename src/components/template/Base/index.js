// Base is the default header-footer layout that would be reuse in most pages

import React from 'react'
import './index.css'

// AppComponents
import Header from 'components/atoms/Header'
import Body from 'components/atoms/Body'
import Footer from 'components/atoms/Footer'
import Navbar from 'components/atoms/Navbar'

const Base = ({ brand, navbars, children, footer, location }) => {
  return (
    <div className='base'>
      <Header brand={brand} />
      <Navbar location={location} items={navbars} />
      <Body>{children}</Body>
      <Footer footer={footer} />
    </div>
  )
}

export default Base
