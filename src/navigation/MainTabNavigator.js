import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

//import Icon from "react-native-vector-icons/MaterialIcons";


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MenusScreen from '../screens/MenusScreen';
import HymnList from '../screens/hymns/hymnList';
import HymnContent from '../screens/hymns/hymnContent';
import Wisdom from '../screens/word_of_wisdom/wisdom';
import WordContent from '../screens/word_of_wisdom/wordContent';
import Annoucement from '../screens/annoucement/annoucement';
import Colors from '../constants/Colors';

import { StyledTextBold, StyledTextRegular } from '../components/StyledText'
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
  tabBarLabel: <StyledTextRegular style={{fontSize: 13, textAlign: 'center'}}>Home</StyledTextRegular>,
  tabBarOptions: {
    showIcon: true
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
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
  tabBarLabel: <StyledTextRegular style={{fontSize: 13, textAlign: 'center'}}>Hymnals</StyledTextRegular>,
  tabBarOptions: {
    showIcon: true
  },
  tabBarIcon: ({ focused }) => (
    <Icon
      name="audiotrack"
      size={26}
      type="material"
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

HymnListStack.path = '';

const WisdomStack = createStackNavigator(
  { WordContent, Wisdom },
  config
);

WisdomStack.navigationOptions = {
  tabBarLabel: <StyledTextRegular style={{fontSize: 12, textAlign: 'center'}}>WOW</StyledTextRegular>,
  tabBarOptions: {
    showIcon: true
  },
  tabBarIcon: ({ focused }) => (
    <Icon focused={focused}
      name="note-text"
      size={26}
      type="material-community"
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

WisdomStack.path = '';

const AnnoucementStack = createStackNavigator(
  { Annoucement },
  config
);

AnnoucementStack.navigationOptions = {
  tabBarLabel: <StyledTextRegular style={{fontSize: 12, textAlign: 'center'}}>News</StyledTextRegular>,
  tabBarOptions: {
    showIcon: true
  },
  tabBarIcon: ({ focused }) => (
    <Icon focused={focused}
      name="newspaper"
      size={26}
      type="material-community"
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
  tabBarLabel: <StyledTextRegular style={{fontSize: 13, textAlign: 'center'}}>Menu</StyledTextRegular>,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'menu'} />
  ),
};

MenusStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HymnListStack,
  WisdomStack,
  AnnoucementStack,
  MenusStack,
});

tabNavigator.path = '';

export default tabNavigator;
