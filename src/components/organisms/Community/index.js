import React from 'react'
import './index.css'

import ProfileCard from 'components/molecules/ProfileCard'

const Component = () => (
  <div className='community-holder'>
    <br />
    <div className='community-title-holder'>
      <h2>Community Manager</h2>
    </div>
    <div className='profile-holder'>
      <ProfileCard name='Chow Chee Leong' biography='Head of Engineering, Tuxuri' profileImg='assets/cheeleong.jpg' />
      <ProfileCard name='Manjunath Reddy' biography='Fullstack Developer, iFlix' profileImg='assets/manju.jpg' />
      <ProfileCard name='Michael Leow' biography='Backend Lead, Jirnexu' profileImg='assets/cheeleong.jpg' />
      <ProfileCard name='Alex Tan Hong Pin' biography='Developer Advocate, SeekAsia' profileImg='assets/alextanhongpin.jpg' />
    </div>
    <div className='community-holder-footer'>How do I be a community manager?</div>
    <br />
  </div>
)

export default Component
