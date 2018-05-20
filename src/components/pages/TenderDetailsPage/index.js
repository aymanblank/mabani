import TenderDetailsPage from './TenderDetailsPage'
import { connect } from 'react-redux'
import { approveTender, declineTender, addTenderNote } from '../../../actions'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
    user: state.user,
    tenders: state.tenders,
  })

const mapDispatchToProps = dispatch =>
  ({
    approveTender: (userId, tender) => approveTender(tender, userId, dispatch),
    declineTender: (userId, tender) => declineTender(tender, userId, dispatch),
    addNote: (userId, tender, note) => addTenderNote(tender, userId, note, dispatch),
  })

export default connect(mapStateToProps, mapDispatchToProps)(TenderDetailsPage)
