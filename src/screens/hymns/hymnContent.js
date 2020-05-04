import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Platform, StatusBar } from "react-native";
import AppBar from '../../appBar/appBar';
import AccordFt from '../AccordFt'

export default class HymnContent extends Component {
  onPressHymn() {
    alert('please select an hymnals');
  }

  constructor(props) {
    super(props);
    const data = this.props.navigation.state.params.data;
    this.state = {
      showSearch: false,
      data: data,
    };
  }

  content() {
    return (
      <View style={{ paddingBottom:60}}>
        <FlatList
          data={this.state.data[0].lyrics}
          renderItem={(item) => this.Stanza(item)}
          keyExtractor={(item) => item.stanza.toString()}
        />
      </View>
    )
  }

  Stanza = ({ item }) => {
    return (
      <View style={style.flist}>
      <Text style={item.stanza}>{item.stanza}</Text>
      <Text selectable={true} style={style.textContentstyle}>{item.lyric}</Text>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data[0].title,
    headerStyle: {
      backgroundColor: '#9862B6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  render() {
    const songDetails = this.state.data[0];
    return (
      <View style={style.container}>
        <View style={style.heading}>
          <Text>{songDetails.heading}</Text>
          <Text>{songDetails.sub_heading}</Text>
          <Text>C&S {songDetails.no}</Text>
          <Text>bible_verse:{songDetails.bible_verse ?songDetails.bible_verse: '---'}</Text>
        </View>
        {/* <View style={style.contentStyle}>
          <Text style={
           style.textContentstyle}
           suppressHighlighting={false}
           selectable={true} 
           selectionColor={Platform.OS === 'android' ? 'purple' : null}> {this.state.content} </Text>
        </View> */}
        {this.content()}
      </View>
    );
  }
}


const style = StyleSheet.create({
  hymnChangeStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    marginHorizontal: 130,
    borderRadius: 13
  },
  contentStyle: {
    flex: 6,
    paddingTop: 10,
    alignItems: "center",
    paddingHorizontal: 20,

  },
  textContentstyle: {
    textAlign: 'justify',
    fontSize: 20,
    padding:10,
  },
  heading: {
    alignItems: 'center',
    marginBottom: 4
  },
  flist:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
  },
  stanza:{
    // marginRight:10
    // paddingRight:20
  },
  container: {
    flex: 1,
  },
});
