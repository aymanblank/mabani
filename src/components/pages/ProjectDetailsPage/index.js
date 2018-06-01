import ProjectDetailsPage from './ProjectDetailsPage'
import { connect } from 'react-redux'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
    user: state.user,
    projects: state.projects,
    areaManagers: state.areaManagers
  })

const mapDispatchToProps = dispatch =>
  ({
    
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsPage)
