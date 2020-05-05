import React, { Component } from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Announcement extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text> Date</Text>
                </View>
                <View>
                    <Text>
                        Announcement
                    </Text>
                </View>
                <View>
                    <Text>
                        Content
                    </Text>
                </View>
            </View>
        )
    }
}

const style= StyleSheet.create({
    dateStyle:{

    },
    titleStyle:{

    },
    contentStyle:{
        
    }

})
