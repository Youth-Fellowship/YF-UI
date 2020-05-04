import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import  Picture from '../../components/Picture'

export default class GettingStarted extends Component {
    onPressButton = () =>{
        alert('getting started in a bit');
    }

  render() {
    return (
    <View style={{backgroundColor:'blue'}}>
      <View style={styles.container}>
        <Image source={Picture.img.firstIcon} style={{marginBottom:'4%'}} />
        <Text style={styles.thick}>Welcome</Text>
        <Text>- Create an account to get access to amazing content .</Text>
        <TouchableOpacity onPress={this.onPressButton} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Gettting Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  thick: {
    fontWeight: "bold",
    marginBottom: "4%",
    textAlign: "center",
    fontSize: 20
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:30,
    borderWidth:2,
    margin:6
  },
  button: {
    marginTop: '10%',
    width: 260,
    alignItems: "center",
    backgroundColor: "#CD1ADD",
    borderRadius:4
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});
