import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MenusScreen from '../screens/MenusScreen';
import HymnList from '../screens/hymns/hymnList';
import HymnContent from '../screens/hymns/hymnContent';
import Wisdom from '../screens/word_of_wisdom/wisdom';
import WordContent from '../screens/word_of_wisdom/wordContent';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'}
    />
  ),
};

HomeStack.path = '';

const HymnListStack = createStackNavigator(
  {
    HymnList: HymnList,
    HymnContent: HymnContent,
  },
  config
);

HymnListStack.navigationOptions = {
  tabBarLabel: 'Hymnals',
  tabBarIcon: ({ focused }) => (
    <MaterialIcons focused={focused} 
    name='audiotrack'
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

HymnListStack.path = '';

const WisdomStack = createStackNavigator(
  {
    WordContent:WordContent,
    Wisdom: Wisdom,
    // headerMode: 'none'
  },
  config
);

WisdomStack.navigationOptions = {
  tabBarLabel: 'WOW',
  tabBarIcon: ({ focused }) => (
    <MaterialCommunityIcons focused={focused} 
    name='bible'
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

WisdomStack.path = '';


const MenusStack = createStackNavigator(
  {
    Menus: MenusScreen,
  },
  config
);

MenusStack.navigationOptions = {
  tabBarLabel: 'Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'} />
  ),
};

MenusStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HymnListStack,
  WisdomStack,
  MenusStack,
});

tabNavigator.path = '';

export default tabNavigator;
