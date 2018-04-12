import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

// Store
import store from './redux'

// Styles
import 'normalize.css'
import './index.css'

// Dependencies
import registerServiceWorker from './registerServiceWorker'

// Pages
import HomePage from 'components/pages/Home'
import HelloPage from 'components/pages/Hello'


const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hello' component={HelloPage} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

ReactDOM.render(
  <Root store={store} />,
document.getElementById('root'))

registerServiceWorker()
