import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './index.css'

const Header = ({ brand }) => (
  <div className='header'>
    <Link className='brand' to='/'>{brand}</Link>
  </div>
)

// Default props
Header.propTypes = {
  brand: PropTypes.string.isRequired
}

export default Header
