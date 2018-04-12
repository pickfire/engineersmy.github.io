import React from 'react'

import { Link } from 'react-router-dom'

import Base from 'containers/Base'

const Home = (props) => (
  <Base>
		<h1>Home Page!</h1>

		<Link to="/hello">Go to Hello Page</Link>
	
	</Base>
)

export default Home
