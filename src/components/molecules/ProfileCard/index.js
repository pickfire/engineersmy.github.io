import React from 'react'

import './index.css'

const ProfileCard = ({ name, biography }) => (
  <div className='card'>
    <br />
    <div>
      <div className='card-img' />
    </div>
    <br />
    <div className='card-info'>
      <div className='card-info__name'>
        {name}
      </div>
      <br />
      <div>{biography}</div>
    </div>
    <br />
  </div>
)

export default ProfileCard
