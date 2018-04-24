import { connect } from 'react-redux'
import BaseComponent from 'components/template/Base'

const mapStateToProps = (state) => ({
  brand: state.brand,
  navbars: state.navbars,
  footer: state.footer
})

const Base = connect(
  mapStateToProps
)(BaseComponent)

export default Base
