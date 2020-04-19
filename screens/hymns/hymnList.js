import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';

import AccordFtUse from '../AccordFtUse';

export default class HymnList extends Component {
 
  render() {
    // const {navigate} =this.props.navigation
    // console.log('nav', navigate)
    return (
    <AccordFtUse navigate={this.props.navigation}/>
    // <View>
    // <Button title="Go to Home" onPress={() => navigate('HymnContent')} />
    // </View>
    );
  }
  
  };
  
  HymnList.navigationOptions = {
    title: 'List of Hymnals',
    headerStyle: {
      backgroundColor: '#9862B6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }