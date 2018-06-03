import LoginPage from '../LoginPage'
import SplashScreen from '../SplashScreen'
import HomePage from '../HomePage'
import TendersPage from '../TendersPage'
import ProjectsPage from '../ProjectsPage'
import TenderDetailsPage from '../TenderDetailsPage'
import ProjectDetailsPage from '../ProjectDetailsPage'
import SubcontractorsPage from '../SubcontractorsPage'
import QuantitySubmissionPage from '../QuantitySubmissionPage'
import routes from './routes'

import { StackNavigator } from "react-navigation";

const Router = StackNavigator(
  {
    [routes.HOME]: { screen: HomePage },
    [routes.TENDERS]: { screen: TendersPage },
    [routes.PROJECTS]: { screen: ProjectsPage },
    [routes.LOGIN]: { screen: LoginPage },
    [routes.SPLASH]: { screen: SplashScreen },
    [routes.TENDER_DETAILS]: { screen: TenderDetailsPage },
    [routes.PROJECT_DETAILS]: { screen: ProjectDetailsPage },
    [routes.SUBCONTRACTORS]: { screen: SubcontractorsPage },
    [routes.QUANTITY_SUBMISSION]: { screen: QuantitySubmissionPage },
  },
  // {
  //   initialRouteName: routes.SPLASH,
  // }
);
export default Router;