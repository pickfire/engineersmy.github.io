import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function classNames (...classes) {
  return classes.join(' ').trim()
}

const Navbar = ({ items, location }) => (
  <div className='navbar'>
    {
			items.map((item, i) => (
  <Link
    className={
						classNames(
							'navbar-item',
							location.pathname === item.href ? 'is-selected' : ''
						)
					}
    to={item.href}
    key={i}
				>
    {item.label}
  </Link>
			))
		}
  </div>
)

export default Navbar
