import React from 'react'

import './index.css'

const ProfileCard = ({ name, biography, profileImg }) => (
  <div className='card'>
    <br />
    <div>
      <div className='card-img' style={{background: `url(${profileImg}) no-repeat center center / cover`}} />
    </div>
    <br />
    <div className='card-info'>
      <div className='card-info__name' title={name}>
        {name}
      </div>
      <br />
      <div>{biography}</div>
    </div>
    <br />
  </div>
)

export default ProfileCard
