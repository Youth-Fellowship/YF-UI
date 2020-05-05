import React, { Component } from 'react';
import TabBarIcon from  '../components/TabBarIcon';

export default class Search extends Component {

    render() {
        return (
            <TabBarIcon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
        )
    }
}

