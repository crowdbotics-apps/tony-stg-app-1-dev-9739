import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen810805Navigator from '../features/BlankScreen810805/navigator';
import BlankScreen710804Navigator from '../features/BlankScreen710804/navigator';
import BlankScreen610796Navigator from '../features/BlankScreen610796/navigator';
import BlankScreen510723Navigator from '../features/BlankScreen510723/navigator';
import BlankScreen410722Navigator from '../features/BlankScreen410722/navigator';
import BlankScreen310652Navigator from '../features/BlankScreen310652/navigator';
import BlankScreen010441Navigator from '../features/BlankScreen010441/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen810805: { screen: BlankScreen810805Navigator },
BlankScreen710804: { screen: BlankScreen710804Navigator },
BlankScreen610796: { screen: BlankScreen610796Navigator },
BlankScreen510723: { screen: BlankScreen510723Navigator },
BlankScreen410722: { screen: BlankScreen410722Navigator },
BlankScreen310652: { screen: BlankScreen310652Navigator },
BlankScreen010441: { screen: BlankScreen010441Navigator },

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
