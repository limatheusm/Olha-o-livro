import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = { material: this.props.material }
        this._onPress = this._onPress.bind(this)
    }

    _onPress() {
        console.log(this.state.material.title)
        this.props.navigation.navigate('Details', { material: this.state.material })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View style={styles.item}>
                    <View style={styles.foto}>
                        <Image style={{ height: 100, width: 100 }} source={{ uri: this.state.material.imageURL }} />
                    </View>
                    <View style={styles.detalhesItens}>
                        <Text style={styles.txtTitulo}>{this.state.material.title}</Text>
                        <Text style={styles.txtValor}>{this.state.material.description}</Text>
                        <Text style={styles.txtDetalhes}> Local: {this.state.material.local}</Text>
                        <Text>Dt publicacao: {this.state.material.date}</Text>
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
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    foto: {
        height: 102,
        width: 102
    },
    detalhesItens: {
        marginLeft: 20,
        flex: 1
    },
    txtTitulo: {
        fontSize: 18,
        marginBottom: 5,
        color: 'blue'
    },
    txtValor: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetalhes: {
        fontSize: 16
    }
})