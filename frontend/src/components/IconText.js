import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

export default class IconText extends Component {
    constructor(props) {
        super(props);
    }

    renderIcon() {
        switch (this.props.font) {
            case "Feather":
                return <Feather
                    name={this.props.name}
                    size={this.props.size}
                    style={{ color: this.props.color }}
                />
            case "FontAwesome":
                return <FontAwesome
                    name={this.props.name}
                    size={this.props.size}
                    style={{ color: this.props.color }}
                />
            case "Entypo":
                return <Entypo
                    name={this.props.name}
                    size={this.props.size}
                    style={{ color: this.props.color }}
                />
        }
    }

    render() {
        return (
            <View style={styles.iconView}>
                {this.renderIcon()}
                <Text style={{paddingLeft: 8, fontSize: this.props.fontSize}}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconView: {
        flexDirection: 'row',
        paddingBottom: 5,
    },
})