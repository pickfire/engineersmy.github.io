import React from 'react'

// Styles
import 'normalize.css'

// Dependencies
import './App.css'
import './redux'

// AppComponents
import Base from 'components/layouts/Base'

import Loader from 'components/atoms/Loader'

// TODO: Remove this
// import AddTodo from 'containers/AddTodo'
// import VisibleTodoList from 'containers/VisibleTodoList'

const App = ({ match: { params } }) => {
  return (
    <div className='App'>
      <Base>Hello world <Loader/></Base>
      {/* <AddTodo /> */}
      {/* <VisibleTodoList filter={params.filter || 'SHOW_ALL'} /> */}
    </div>
  )
}

export default App
