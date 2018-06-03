import SubcontractorsPage from './SubcontractorsPage'
import { connect } from 'react-redux'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
    quantitySubmissions: state.quantitySubmissions,
  })

const mapDispatchToProps = dispatch =>
  ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(SubcontractorsPage)
