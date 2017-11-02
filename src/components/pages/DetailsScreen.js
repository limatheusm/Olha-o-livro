import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Detalhes'
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Details: {params.material.title}</Text>
            </View>
        )
    }
}