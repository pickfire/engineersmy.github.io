import { createStore, combineReducers } from 'redux'

// Reducers
import * as appReducers from 'redux/reducers/app'

const app = combineReducers({
  ...appReducers
})

// The default state of the application
const INITIAL_STATE = {
  brand: 'engineers.my',
  navbars: [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Videos',
      href: '/hello'
    }
  ],
  footer: 'Copyright © 2018 engineers.my'
}

export default createStore(app, INITIAL_STATE)
