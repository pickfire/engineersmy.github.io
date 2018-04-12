import { createStore, combineReducers } from 'redux'
import { brand, navbars } from './app'

const app = combineReducers({
  brand,
  navbars
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
  ]
}

export default createStore(app, INITIAL_STATE)
