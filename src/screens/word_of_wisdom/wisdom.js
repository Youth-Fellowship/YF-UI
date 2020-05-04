import React, { Component } from 'react';
import { StatusBar, View, FlatList, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';


export default class Wisdom extends Component {
    render() {
        return (
            <View>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View>
              <Text>Word of Wisdom</Text>
            </View>
          </View>
        )
    }
}

Wisdom.navigationOptions = {
    title: 'Word of Wisdom',
    headerStyle: {
        backgroundColor: '#9862B6',
        paddingBottom:15
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      },

  };