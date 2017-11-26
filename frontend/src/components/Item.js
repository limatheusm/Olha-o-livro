import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { mainColor } from '../business/util/colors'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = { material: this.props.material }
        this._onPress = this._onPress.bind(this)
    }

    _onPress() {
        if (this.props.editMaterial) {
            this.props.navigation.navigate('EditMaterial', { material: this.state.material })
        } else {
            this.props.navigation.navigate('Details', { material: this.state.material })
        }
    }

    render() {
        const { item, imageView, image, itemDetails, title, sharingType, localView, local } = styles
        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View style={item}>
                    <Image style={image} source={{ uri: this.state.material.imageURL }} />
                    <View style={itemDetails}>
                        <Text style={title}>{this.state.material.title}</Text>
                        <Text style={sharingType}>{this.state.material.sharingType}</Text>
                        <View style={localView}>
                            <Entypo
                                name='location-pin'
                                size={18}
                                style={{ color: mainColor }}
                            />
                            <Text style={local}>{this.state.material.local}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        backgroundColor: '#FFF',
        borderColor: '#999',
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        height: 100,
        borderRadius: 50,
        width: 100
    },
    itemDetails: {
        marginLeft: 20,
        marginTop: 10,
        flex: 1
    },
    title: {
        fontSize: 18,
        marginBottom: 5,
        color: 'black',
        fontWeight: 'bold'
    },
    local: {
        fontSize: 15
    },
    sharingType: {
        fontSize: 15,
        marginBottom: 5,
        marginLeft: 4
    },
    localView: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        marginTop: 0
    }
})