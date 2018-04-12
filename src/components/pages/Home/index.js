import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './index.css'

// Layout
import Base from 'containers/Base'

// Molecules
import Card from 'components/molecules/Card'

const Home = (props) => (
  <Base {...props}>
		<h1>Videos</h1>
		<Card/>
		<Card/>

		<br/>
		<br/>

		<div className="container">
			<h3>Hello World</h3>

			<p className="container-description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper tortor eget elit iaculis sollicitudin. Praesent porta vehicula augue. Suspendisse rhoncus felis id turpis molestie, et gravida ipsum euismod. Praesent gravida ac est vel porttitor. Vestibulum fermentum maximus purus sit amet faucibus. Phasellus vitae arcu ultrices, vulputate urna quis, volutpat massa. Morbi orci sem, venenatis vulputate auctor sit amet, volutpat et tellus. Sed semper porta arcu, ac eleifend ex rhoncus vel. Maecenas leo sapien, laoreet id ipsum et, aliquam mattis odio. Duis egestas cursus libero, in vehicula ante dictum et. Nunc mollis dolor vel ex sollicitudin ullamcorper. Vivamus dictum maximus gravida. Cras rutrum molestie commodo. Nunc id orci at tortor vulputate porttitor.
			</p>
		</div>
	</Base>
)

export default Home
