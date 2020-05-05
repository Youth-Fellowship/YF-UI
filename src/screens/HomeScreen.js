
import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';

import { StyledTextRegular } from '../components/StyledText';


export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    };
  }

  render() {
    return (
      <View style={style.contentStyle}>
        <StyledTextRegular style={style.textContentstyle}
          suppressHighlighting={false}
          selectable={true}
          selectionColor={Platform.OS === 'android' ? 'purple' : null}> {this.state.content}
        </StyledTextRegular>
      </View>
    );
  }

}

HomeScreen.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#9862B6',
    fontFamily: 'JosefinSans-Bold',
    fontWeight: '200'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'JosefinSans-Regular',
    fontFamily: 'JosefinSans-Bold',
    fontWeight: '200'
  },
};

const style = StyleSheet.create({
  hymnChangeStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    marginHorizontal: 130,
    borderRadius:13
  },
  contentStyle: {
    flex: 6,
    paddingTop: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textContentstyle:{
    textAlign:'justify',
    fontSize:20,
  },
  container: {
    flex: 1
  },
});

