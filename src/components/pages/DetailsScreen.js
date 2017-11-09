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
import DetailsMaterial from '../DetailsMaterial';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Detalhes'
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{ flex: 1 }}>
                <ImageHeader
                    imageURL={params.material.imageURL}
                    title={params.material.title}
                    local={params.material.local}
                />
                <DetailsMaterial material={params.material}/>
            </View>
        )
    }
}