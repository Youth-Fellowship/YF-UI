import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';

import AccordFtUse from '../AccordFtUse';

export default class HymnList extends Component {

  render() {
    return (
      <AccordFtUse navigate={this.props.navigation}/>
    );
  }

  };

  HymnList.navigationOptions = {
    title: 'List of Hymnals',
    headerStyle: {
      backgroundColor: '#9862B6',
      fontFamily: 'JosefinSans-Bold',
      fontWeight: '200'

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'JosefinSans-Bold',
      fontWeight: '200'
    },
  }