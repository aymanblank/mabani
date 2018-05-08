import HomePage from './HomePage'
import { connect } from 'react-redux'
import { setLoggedInUser } from '../../../actions'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
  })

const mapDispatchToProps = dispatch =>
  ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
