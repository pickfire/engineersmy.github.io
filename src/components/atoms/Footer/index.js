import React from 'react'

import PropTypes from 'prop-types'

import './index.css'

const Footer = ({ footer }) => (
  <div className='footer'>{footer}</div>
)

Footer.propTypes = {
  footer: PropTypes.string.isRequired
}

export default Footer
