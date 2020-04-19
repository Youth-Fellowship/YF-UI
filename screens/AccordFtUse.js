
import React, {Component} from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text, ActivityIndicator} from 'react-native';
import AccordFt from './AccordFt';
import AllHymns from '../components/HymnJson';
import ApiService from '../apiservice';

export default class AccordFtUse extends Component {
allMenu=[];

componentDidMount(){
  fetch("https://shrouded-coast-84333.herokuapp.com/hymns/categories")
  .then(response => response.json())
  .then((responseJson)=> {
    // console.log('result', responseJson.data);
    this.setState({
     loading: false,
     menu: responseJson.categories
    })
  })
  .catch(error=>console.log(error)) //to catch the errors if any
  }


  async getHymns(){
    try {
      const apiService = new ApiService();
      const result = await apiService.read('https://shrouded-coast-84333.herokuapp.com/hymns/');
      console.log('result', result);
    return result
  }
      catch (error) {
        console.log(error);
      }
  }

  constructor(props) {
    super(props);
    this.state = {
      menu:[],
      loading: true,
    };  
}
  

  render() {
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    else{
    return (
      <SafeAreaView style={styles.container}>
        { this.flist() }
        {/* <Button title="Go to Home" onPress={() => navigate('HymnContent')} /> */}
        </SafeAreaView>
    )};
  }

  Item({ item }) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }

  flist() {
    if(!this.state.loading){
    return (
        <View>
         <FlatList
          data={this.state.menu}
        renderItem={(item)=> this.renderAccordians(item)}
        keyExtractor={(item) => item}
        />
      </View>
    )
  }
  }


  renderAccordians=({item})=> {
        return (      
          <AccordFt 
                title = {item}
                data = {[]}
                navigate={this.props.navigate}
            />
            )
}
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#556',
   
  },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
});