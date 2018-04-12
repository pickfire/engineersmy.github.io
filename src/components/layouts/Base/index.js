// Base is the default header-footer layout that would be reuse in most pages

import React from 'react'
import './index.css'

// AppComponents
import Header from 'components/atoms/Header'
import Body from 'components/atoms/Body'
import Footer from 'components/atoms/Footer'
import Navbar from 'components/atoms/Navbar'

// TODO: Remove this
// import AddTodo from 'containers/AddTodo'
// import VisibleTodoList from 'containers/VisibleTodoList'

const Base = (props) => {
  return (
    <div className='base'>
      <Header brand={props.brand}/>
      <Navbar {...props} items={props.navbars}/>
      <Body>{props.children}</Body>
      <Footer/>
    </div>
  )
}



export default Base