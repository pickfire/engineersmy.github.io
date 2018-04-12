import React from 'react'
import './style.css'

const Header = ({ brand }) => (
	<div className="app-header">
		<div className="brand">{brand}</div>
	</div>
)

// Default props
Header.defaultProps = {
	brand: 'appName'
}

export default Header