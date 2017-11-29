import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
// Componente resposavel por renderizar a parte de Menu na aba de navegação MyAccount
export default class MyAccountNav extends Component {
  constructor(props) {
    super(props);
  }

  //Renderiza dois Texts que aguardam por um toque para retornar uma ação
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props._onPress('')}>
          <View style={styles.item}>
            <Text style={styles.txtStyle}>Meus Materias</Text>
            <Icon 
              ios='ios-arrow-forward'
              android="chevron-right"
              style={{ fontSize: 20, color: 'gray' }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props._onPress('edit')} >
          <View style={styles.item}>
            <Text style={styles.txtStyle}>Editar conta</Text>
            <Icon 
              ios='ios-arrow-forward'
              android="chevron-right"
              style={{ fontSize: 20, color: 'gray' }}
            />
          </View>
        </TouchableOpacity>
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
    fontSize: 15
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    borderColor: '#999',
    padding: 15,
  }
});
