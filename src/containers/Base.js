import { connect } from 'react-redux'
import BaseComponent from 'components/layouts/Base'

const mapStateToProps = (state) => ({
	brand: state.brand
})

const Base = connect(
  mapStateToProps,
)(BaseComponent)

export default Base
