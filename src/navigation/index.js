
import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// NAVIGATORS
import AppNavigator from './app-navigation/AppNavigation';
import LeftsidebarNavigator from './sidebar/Leftsidebar';

const RootNavigator = createSwitchNavigator(
    {
      App: AppNavigator,
      Scene:LeftsidebarNavigator
    },
    {
      initialRouteName: 'Scene',
    },
  );

  export default createAppContainer(RootNavigator);