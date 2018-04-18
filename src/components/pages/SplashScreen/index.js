import SplashScreen from './SplashScreen'
import { connect } from 'react-redux'
import { setLoggedInUser } from '../../../actions'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
  })

const mapDispatchToProps = dispatch =>
  ({
    setLoggedInUser: (user) => dispatch(setLoggedInUser(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
