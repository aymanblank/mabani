import TendersPage from './TendersPage'
import { connect } from 'react-redux'
import { setTenders } from '../../../actions'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
    tenders: state.tenders,
  })

const mapDispatchToProps = dispatch =>
  ({
    setTenders: (tenders) => dispatch(setTenders(tenders))
  })

export default connect(mapStateToProps, mapDispatchToProps)(TendersPage)
