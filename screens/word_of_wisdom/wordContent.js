import React, { Component } from 'react';
import { StatusBar, View, FlatList, StyleSheet, Text, TouchableOpacity, Platform, ScrollView } from 'react-native';
import RECORD from '../../components/WowJson';


export default class WordContent extends Component {
    scrollShow = true;
    constructor(props) {
        super(props);
        const todayDate = new Date();
        todayDate.setHours(1, 0, 0, 0);

        console.log('tod', todayDate, 'time', todayDate.getTime());
        // console.log('recs',RECORD['RECORDS'][0])
        const data = RECORD['RECORDS'];
        data.forEach(record => {
            let currentDate = new Date(record.WOWDate);
            // console.log('curr', todayDate, 'curretime', currentDate.getTime());
            if (todayDate.getTime() === currentDate.getTime()) {
                this.state = {
                    todayWord: record,
                }
                // this.setState({
                //     todayWord: record,  
                // })
            }

        });
        this.props.navigation.setParams({ title: this.state.todayWord.WOWTopic });
        //  console.log('nav' ,this.props.navigation)
    }


    formatDate(dateTime) {
        let date = '';
        for (let i = 0; i < dateTime.length; i++) {
            if (dateTime[i] == '/') {

                date = date.concat(dateTime[i].replace('/', '-'));
            }
            else {
                date = date.concat(dateTime[i]);
            }
        }
        // console.log('conca date',date)
        return date;
    }


    // componentDidMount() {
    //     const todayDate = new Date(1 / 8 / 2019);
    //     // console.log('recs',RECORD['RECORDS'][0])
    //     const data = RECORD['RECORDS'];
    //     data.forEach(record => {
    //         let currentDate = new Date(record.WOWDate);
    //         if ((todayDate.getFullYear() && todayDate.getMonth() && todayDate.getDate()) === (currentDate.getFullYear() && currentDate.getMonth() && currentDate.getDate())) {
    //             this.setState({
    //                 todayWord: record,
    //                 title:record.WOWTopic
    //             })
    //         }

    //     });
    // }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params ? navigation.state.params.title : navigation.state.key,
        headerStyle: {
            backgroundColor: '#9862B6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    })

    handleScroll = () =>{
        this.scrollShow = false
    }

    render() {
        const { WOWTopic, WOWDate, WOWBiblePassage, WOWMemoryVerse, WOWMessage, WOWPrayerPoint } = this.state.todayWord
        return (

            <View style={style.container}>
                {/** Topic heading */}
                {/* <View style={style.topic}>
                    <Text>Topic:</Text>
                    <Text>{WOWTopic}</Text>
                </View> */}
                {/** Bible Text */}

                <View style={style.btext}>
                    <Text style={{fontWeight:'800'}}>B/Text:</Text>
                    <Text>{WOWBiblePassage}</Text>
                </View>

                {/** M/V of the Wow */}
                <View style={style.btext}>
                    <Text style={{fontWeight:'800'}}>Memory verse:</Text>
                    <Text>{WOWMemoryVerse}</Text>
                </View>
                {/** Date of the Wow */}

                <View style={style.btext}>
                    <Text style={{fontWeight:'800'}}>Date:</Text>
                    <Text>{WOWDate}</Text>
                </View>

                {/** content of the Wow */}
                <ScrollView  onScroll={this.handleScroll} scrollEventThrottle={16} style={style.content}>
                    <Text style={style.context}>{WOWMessage}</Text>
                </ScrollView>

                {/** Prayer Point of the Wow */}

                <View style={style.pt}>
                    <Text style={{fontWeight:'800'}}>Prayer point:</Text>
                    <Text>{WOWPrayerPoint}</Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    topic: {
        flexDirection: 'row'
    },
    btext: {
        flexDirection: 'row',
        marginBottom: 4,
        backgroundColor:'#a9a9a9'
    },
    content: {
        flexBasis:300,
        marginHorizontal:6
    },
    context:{
        textAlign:'justify',
        textDecorationColor: '#678',
        fontSize:15
    },
    pt: {
        flexBasis:60,
    }
})