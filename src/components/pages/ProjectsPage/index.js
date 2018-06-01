import ProjectsPage from './ProjectsPage'
import { connect } from 'react-redux'
import { setProjects } from '../../../actions'

const mapStateToProps = state =>
  ({
    connectionStatus: state.connectionStatus,
    projects: state.projects,
  })

const mapDispatchToProps = dispatch =>
  ({
    setProjects: (projects) => dispatch(setProjects(projects))
  })

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage)
