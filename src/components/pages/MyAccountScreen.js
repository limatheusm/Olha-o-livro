import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class MyAccountScreen extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Minha Conta'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>My Account</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});