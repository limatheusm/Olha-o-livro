import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    Button,
    Dimensions
} from 'react-native';

import ImageHeader from '../ImageHeader';
import MaterialDetails from '../MaterialDetails';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { material: this.props.navigation.state.params.material };
        this.toDonatorDetailsScreen = this.toDonatorDetailsScreen.bind(this);
    }

    static navigationOptions = {
        title: 'Detalhes'
    }

    toDonatorDetailsScreen() {
        this.props.navigation.navigate('DonatorDetails', { donator: this.state.material.donator })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageHeader
                    imageURL={this.state.material.imageURL}
                    title={this.state.material.title}
                    local={this.state.material.local}
                />
                <MaterialDetails
                    material={this.state.material}
                    navigation={this.props.navigation}
                    toDonatorDetailsScreen={this.toDonatorDetailsScreen}
                />
            </View>
        )
    }
}