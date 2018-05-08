import LoginPage from '../LoginPage'
import SplashScreen from '../SplashScreen'
import HomePage from '../HomePage'
import routes from './routes'

import { StackNavigator } from "react-navigation";

const Router = StackNavigator(
  {
    [routes.LOGIN]: { screen: LoginPage },
    [routes.SPLASH]: { screen: SplashScreen },
    [routes.HOME]: { screen: HomePage },
  },
  {
    initialRouteName: routes.SPLASH,
  }
);
export default Router;