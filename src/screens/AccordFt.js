
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, ActivityIndicator} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { StyledTextRegular, StyledTextMedium, StyledTextBold } from '../components/StyledText';

export default class AccordFt extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
            loaded:false,
            loading:false,
        }
    }

  render() {
    // console.log('data',this.state.data)
    return (
       <View style={styles.mainViewWrapper}>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand(this.props.title)}>
                <StyledTextBold style={[styles.title]}>{this.props.title}</StyledTextBold>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-right'} size={30} color={'#8957a5'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
        {this.state.loading && (
          <View style={styles.loader}>
            <ActivityIndicator size="small"  style={styles.loader} color="#0c9" />
          </View>
        )}
            {
                this.state.loaded && 
                <View style={{}}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item) =>  item.no.toString()}
                        scrollEnabled={true}
                        renderItem={({item}) =>
                        <View>
                            <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnInActive : styles.btnActive]} onPress={()=>this.onClick(item.no.toString())}>
                                <StyledTextBold style={[styles.font, styles.itemInActive]} >{item.title}</StyledTextBold>
                                {/* <Icon name={'check-circle'} size={24} color={ item.value ? '#C7C7C7' : 'green'} /> */}
                            </TouchableOpacity>
                            <View style={styles.childHr}/>
                        </View>
                    }
                    />
                </View>
            }

       </View>
    )
  }

  me(){
      return 'me'
  }

  onClick=(no)=>{
    const result = this.state.data.filter(hymn => hymn.no == no);
    const {navigate} = this.props.navigate
     navigate('HymnContent', {data:result})
    // alert(`work in progress ${index} and ${this.state.page}`);
  }

  toggleExpand=(val)=>{
    console.log("val", val);
    this.setState({
      expanded: !this.state.expanded,
    });
     if (!this.state.loaded) {
      this.setState({
        loading: !this.state.loading,
      });
      fetch(`https://shrouded-coast-84333.herokuapp.com/hymns/?category=${val}`)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            loaded:!this.state.loaded,
            loading:!this.state.loading,
            data: responseJson.hymns,
          });
        })
        .catch((error) => console.log(error)); //to catch the errors if any
    }else{
      this.setState({
        loaded: !this.state.loaded,
      });
    }
  };
}


const styles = StyleSheet.create({
    mainViewWrapper: {
        backgroundColor: '#e9e9e9'
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 14,
        color:'#8957a5', //9862B6',
    },
    itemActive:{
        fontSize: 12,
        color: 'green',
    },
    itemInActive:{
        fontSize: 12,
        color: '#5E5E5E',
    },
    btnActive:{
        borderColor: 'green',
    },
    btnInActive:{
        borderColor: '#5E5E5E'
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:100,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor:'#C7C7C7',
        backgroundColor: '#ffffff',
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 10,
        borderRadius: 5,
        elevation: 2
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: 'white',
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor:'#C7C7C7',
        width:'100%',
    },
    colorActive:{
        borderColor: 'green',
    },
    colorInActive:{
        borderColor: '#5E5E5E',
    },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 100,
  },

});
