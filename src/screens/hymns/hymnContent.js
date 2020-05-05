import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Platform, StatusBar } from "react-native";
import { StyledTextRegular, StyledTextMedium } from '../../components/StyledText';
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
      <View style={{ paddingRight: 10, paddingLeft: 10, paddingBottom: 120, paddingTop: 20 }}>
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
        <StyledTextRegular style={item.stanza}>{item.stanza}</StyledTextRegular>
        <StyledTextRegular selectable={true} style={style.textContentstyle}>{item.lyric}</StyledTextRegular>
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.data[0].title,
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
  });

  render() {
    const songDetails = this.state.data[0];
    return (
      <View style={style.container}>
        <View style={style.heading}>
          <StyledTextRegular>{songDetails.heading}</StyledTextRegular>
          <StyledTextRegular>{songDetails.sub_heading}</StyledTextRegular>
          <StyledTextRegular>C&S {songDetails.no}</StyledTextRegular>
          <StyledTextRegular>bible_verse:{songDetails.bible_verse}</StyledTextRegular>
        </View>
        {this.content()}
        <View style={{}}></View>
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
    justifyContent:'flex-start',
  },
  stanza:{
    marginHorizontal:20,
  },
  container: {
    flex: 1,
  },
});
