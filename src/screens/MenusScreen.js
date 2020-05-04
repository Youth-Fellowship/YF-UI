import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StyledTextRegular, StyledTextBold } from '../components/StyledText';

export default function MenusScreen() {

  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )

}
const DATA = [
  {
    id: '1',
    title: 'Word of Wisdom',
  },
  {
    id: '2',
    title: 'Hymnals',
  },
  {
    id: '3',
    title: 'Annoucement',
  },
];



  function Item({ title }) {
    return (
      <TouchableOpacity onPress = {() =>{alert('working')}}>
      <View style={styles.item}>
        <StyledTextBold style={styles.title}>{title}</StyledTextBold>
      </View>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: getStatusBarHeight(),
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });


MenusScreen.navigationOptions = {
  title: 'Menu',
  headerStyle: {
    backgroundColor: '#9862B6',
    fontFamily: 'JosefinSans-Regular'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'JosefinSans-Regular'
  },
};
