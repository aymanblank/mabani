import QuantitySubmissionPage from './QuantitySubmissionPage'
import { connect } from 'react-redux'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
    quantitySubmissions: state.quantitySubmissions,
  })

const mapDispatchToProps = dispatch =>
  ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(QuantitySubmissionPage)
