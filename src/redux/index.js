// import {
//   addTodo,
//   toggleTodo,
//   setVisibilityFilter,
//   VisibilityFilters
// } from './action'

// import store from './store'

// console.log(store.getState())

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe()
import { createStore, combineReducers } from 'redux'
import { brand } from './app'

const app = combineReducers({
  brand
})

// The default state of the application
const INITIAL_STATE = {
  brand: 'engineers.my'
}

export default createStore(app, INITIAL_STATE)
