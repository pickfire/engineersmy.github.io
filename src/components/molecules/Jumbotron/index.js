import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import Code from 'components/atoms/Code'

const Jumbotron = ({ heading, subheading, slackUrl }) => (
  <div className='jumbotron'>
    <Code />
    <div className='jumbotron-heading'>{heading}</div>
    <br />
    <div className='jumbotron-subheading'>{subheading}</div>
    <br />
    <br />
    <div>Find us on Slack</div>
    <br />
    <a className='button-slack' href={slackUrl}><i className='fa fa-slack' /> Slack</a>
  </div>
)

Jumbotron.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  slackUrl: PropTypes.string.isRequired
}

export default Jumbotron
