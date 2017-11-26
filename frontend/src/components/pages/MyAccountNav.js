import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback    
} from 'react-native';

// Componente resposavel por renderizar a parte de Menu na aba de navegação MyAccount
export default class MyAccountNav extends Component {
    constructor(props) {
        super(props)
    }
    
    //Renderiza dois Texts que aguardam por um toque para retornar uma ação
    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.props._onPress('')}>
                    <Text style={styles.txtStyle}>Meus Materias</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props._onPress('edit')} >
                    <Text style={styles.txtStyle}>Editar Conta</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // estilo da view do proprio componente
    container: {
      flex: 1
    },
    // estilo do componente Text
    txtStyle: {
        borderWidth: 0.5,
        backgroundColor: '#FFF',
        borderColor: '#999',
        padding: 15,
        flexDirection: 'row',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 1
    },
  })