import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen110807Navigator from '../features/BlankScreen110807/navigator';
import BlankScreen010802Navigator from '../features/BlankScreen010802/navigator';
import BlankScreen010799Navigator from '../features/BlankScreen010799/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen110807: { screen: BlankScreen110807Navigator },
BlankScreen010802: { screen: BlankScreen010802Navigator },
BlankScreen010799: { screen: BlankScreen010799Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
