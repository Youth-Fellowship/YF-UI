
import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet,} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class AccordFlatUse extends Component{
    
    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }

  render() {
    // console.log('data',this.state.data)
    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-right'} size={30} color={'#5E5E5E'} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={{}}>
                    <FlatList
                    data={this.state.data}
                    keyExtractor={(item) =>  item.no.toString()}
                    scrollEnabled={true}
                    renderItem={({item}) => 
                        <View>
                            <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnInActive : styles.btnActive]} onPress={()=>this.onClick(item.no.toString())}>
                                <Text style={[styles.font, styles.itemInActive]} >{item.title}</Text>
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

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}


const styles = StyleSheet.create({
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
        fontWeight:'bold',
        // color: '#5E5E5E',
        color:'blue'
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
        borderColor: '#5E5E5E',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        // backgroundColor: 'gray',
        backgroundColor:'#C7C7C7'
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: 'gray',
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
    }
    
});
