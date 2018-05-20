import LoginPage from '../LoginPage'
import SplashScreen from '../SplashScreen'
import HomePage from '../HomePage'
import TendersPage from '../TendersPage'
import TenderDetailsPage from '../TenderDetailsPage'
import routes from './routes'

import { StackNavigator } from "react-navigation";

const Router = StackNavigator(
  {
    [routes.HOME]: { screen: HomePage },
    [routes.TENDERS]: { screen: TendersPage },
    [routes.LOGIN]: { screen: LoginPage },
    [routes.SPLASH]: { screen: SplashScreen },
    [routes.TENDER_DETAILS]: { screen: TenderDetailsPage },
  },
  // {
  //   initialRouteName: routes.SPLASH,
  // }
);
export default Router;