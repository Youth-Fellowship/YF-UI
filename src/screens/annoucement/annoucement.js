import React, { Component } from "react";
import {
  StatusBar,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import RECORD from "../../components/annoucement_export_list";

import { StyledTextRegular } from "../../components/StyledText";

export default class Annoucement extends Component {
  scrollShow = true;
  constructor(props) {
    super(props);
    const data = RECORD["RECORDS"];
    this.state = {
      allNews: data,
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Annoucement",
    headerStyle: {
      backgroundColor: "#9862B6",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  });

  render() {
    
  return <View style={style.container}>{this.newList()}</View>;
  }

  newList() {
    return (
      <View style={{}}>
        <FlatList
          data={this.state.allNews}
          renderItem={(item) => this.news(item)}
          keyExtractor={(item) => item.AnnoucementID}
          style={{ paddingTop: 10 }}
        />
      </View>
    );
  }

  news = ({ item }) => {
    const {
        AnnoucementTitle,
        AnnouncementMessage,
        PostedBy,
        PostedDate,
      } = item;
    return (
      <View style={style.content}>
        <StyledTextRegular style={style.context}>
          {AnnoucementTitle}
        </StyledTextRegular>
        <StyledTextRegular style={style.context}>
          {AnnouncementMessage}
        </StyledTextRegular>
        <StyledTextRegular style={style.context}>
          {PostedDate}
        </StyledTextRegular>
      </View>
    );
  };
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topic: {
    flexDirection: "row",
  },
  btext: {
    flexDirection: "row",
    marginBottom: 4,
    backgroundColor: "#a9a9a9",
  },
  content: {
    flexBasis: 300,
    marginHorizontal: 6,
    padding:20
  },
  context: {
    textAlign: "justify",
    textDecorationColor: "#678",
    fontSize: 15,
  },
  pt: {
    flexBasis: 60,
  },
});
