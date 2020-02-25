import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import ScreenFour from '../screens/ScreenFour';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const ScreenOneStack = createStackNavigator(
  {
    ScreenOne: ScreenOne
  },
  config
);

ScreenOneStack.navigationOptions = {
  tabBarLabel: 'ScreenOne',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-today' : 'md-today'}
    />
  )
};

ScreenOneStack.path = '';

const ScreenTwoStack = createStackNavigator(
  {
    ScreenTwo: ScreenTwo
  },
  config
);

ScreenTwoStack.navigationOptions = {
  tabBarLabel: 'ScreenTwo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  )
};

ScreenTwoStack.path = '';

const ScreenThreeStack = createStackNavigator(
  {
    ScreenThree: ScreenThree
  },
  config
);

ScreenThreeStack.navigationOptions = {
  tabBarLabel: 'ScreenThrees',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
    />
  )
};

ScreenThreeStack.path = '';

const ScreenFourStack = createStackNavigator(
  {
    ScreenFour: ScreenFour
  },
  config
);

ScreenFourStack.navigationOptions = {
  tabBarLabel: 'ScreenFour',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cash' : 'md-cash'}
    />
  )
};

ScreenFourStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ScreenOneStack,
  ScreenTwoStack,
  ScreenThreeStack,
  ScreenFourStack
});

tabNavigator.path = '';

export default tabNavigator;
