import React from 'react'

// Styles
import './index.css'

// Molecules
import Jumbotron from 'components/molecules/Jumbotron'

// Organisms
import Base from 'components/organisms/Base'
import Community from 'components/organisms/Community'

const Home = (props) => (
  <Base {...props}>
    <Jumbotron
      heading='engineers.my'
      subheading='An open community for developers/designers to share, collaborate and improve the tech community in Malaysia.'
      slackUrl='https://engineersmy.herokuapp.com/'
    />

    <br />

    <div className='event-holder'>
      <h1 className='event-holder-title'>Events Today</h1>

      <div><i className='fa fa-calendar-o' /> There are 10 events today...</div>

      <br />

      <div className='event'>
        <div className='event-dot' />
        <div className='event-info'><b>5:45 p.m.</b> Data Science for Kids</div>
      </div>

      <br />
      <br />

      <small>Want to contribute to our event page?</small>
      <br />
    </div>

    <div>
      <h1>Meetups Area</h1>

      <div>Find out where we do our meetup...</div>
    </div>

    <div>
      <h1><i className='fa fa-camera' /> Volunteer for Recording/Meetups</h1>

      <div>Wanna help out at local meetups and learn new stuff? Volunteer here!</div>
    </div>

    <Community />

    <br />
  </Base>
)

export default Home
