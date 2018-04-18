import LoginPage from '../LoginPage'
import SplashScreen from '../SplashScreen'
import routes from './routes'

import { StackNavigator } from "react-navigation";

const Router = StackNavigator(
  {
    [routes.LOGIN]: { screen: LoginPage },
    [routes.SPLASH]: { screen: SplashScreen },
  },
  {
    initialRouteName: routes.SPLASH,
  }
);
export default Router;