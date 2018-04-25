import React from 'react'

// Styles
import './index.css'

// Molecules
import Jumbotron from 'components/molecules/Jumbotron'

// Organisms
import Base from 'components/organisms/Base'
import Community from 'components/organisms/Community'
import Br from 'components/atoms/Break'

const Home = (props) => (
  <Base {...props}>

    <Jumbotron
      heading='engineers.my'
      subheading='An open community for developers/designers to share, collaborate and improve the tech community in Malaysia.'
      slackUrl='https://engineersmy.herokuapp.com/'
    />

    <br />

    <div className='event-holder'>
      <Br />
      <div className='event-holder-title'><i className='fa fa-calendar-o' /> Events Today</div>
      <Br />

      <div className='event'>
        <div className='event-dot' />
        <div className='event-info'><b className='event-time'>5:45 p.m.</b> - Data Science for Kids</div>
      </div>
      <Br px={10} />
      <div className='event'>
        <div className='event-dot' />
        <div className='event-info'><b className='event-time'>9:00 p.m.</b> - KualaLumpurJS</div>
      </div>

      <Br />

      <div className='event-holder-footer'>
        <small>Want to contribute to our event page?</small>
      </div>

      <Br />
    </div>

    <Br />

    <div className='meetup-holder'>
      <Br />

      <div className='meetup-holder-title'><i className='fa fa-map' /> Meetups Areas</div>
      <Br />

      <div>Find out where we do our meetup...</div>

      <Br />
    </div>

    <Br />

    <div className='volunteer-holder'>
      <Br />

      <div className='volunteer-holder-title'><i className='fa fa-camera' /> Volunteer for Recording/Meetups</div>
      <Br />

      <div>Wanna help out at local meetups and learn new stuff? Volunteer here!</div>
      <Br />

    </div>

    <Br />

    <Community />

    <br />
  </Base>
)

export default Home
