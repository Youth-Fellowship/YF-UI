import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Search from './search';

export default function AppBar({heading, showSearch}) {
  const show = showSearch;
    return (
        <View style={style.titleStyle}>
            {show ? (
            <TouchableOpacity onPress={()=>{alert('nothing')}}>
            <Search style={style.search}/>
            </TouchableOpacity>
              ) : null}
            <Text style={style.titleText}>
            {heading}
            </Text>
        </View>
    )
}
const style= StyleSheet.create({
    titleStyle: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#9862B6",
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        borderWidth:2,
        borderColor:'#EBCEEE',
      },
      titleText: {
        color: "white",
        fontWeight: "bold",
        marginLeft:5
      },
      search:{
      }
})
