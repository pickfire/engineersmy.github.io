import React from 'react'
import './index.css'

import ProfileCard from 'components/molecules/ProfileCard'

const Component = () => (
  <div className='community-holder'>
    <br />
    <div className='community-title-holder'>
      <h1>Community Manager</h1>
    </div>
    <div className='profile-holder'>
      <ProfileCard name='Alex Tan Hong Pin' biography='Developer Advocate, SeekAsia' />
      <ProfileCard name='Michael Leow' biography='Backend Lead, Jirnexu' />
      <ProfileCard name='Chow Chee Leong' biography='Head of Engineering, Tuxuri' />
    </div>
    <div>How do I be a community manager?</div>
    <br />
  </div>
)

export default Component
