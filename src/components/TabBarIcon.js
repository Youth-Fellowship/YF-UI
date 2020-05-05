import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  const colorDef = props.color ? props.color : Colors.tabIconDefault;
  return (
    // <Ionicons
    //   name={props.name}
    //   size={26}
    //   style={{ marginBottom: -3 }}
    //   color={props.focused ? Colors.tabIconSelected : colorDef}
    // />
    <Icon
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : colorDef}
    />
  );
}
