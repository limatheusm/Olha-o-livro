import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert
} from 'react-native';
import { Container, Content, Form, Item, Icon, Input } from 'native-base';

import BusinessFacade from '../../business/BusinessFacade';

const MAIN_COLOR = new BusinessFacade().getMainColor();

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: 'user@olhaolivro.com', password: 'Lima1234567' };
    this.businessFacade = new BusinessFacade();
  }

  btnLogin() {
    this.businessFacade.loginUser({ 
      ...this.businessFacade.getUser('userDonator'),
      mail: this.state.mail,
      password: this.state.password 
    }, (isSuccess, res) => {
      if (isSuccess) {
        console.log(res);
        this.props.navigation.navigate('MyAccount');
      } else {
        Alert.alert(`Erro ao efetuar Login! ${res.message}`);
      }
    });
  }

  handleChangeMail(mail) {
    this.setState({ ...this.state, mail });
  }

  handleChangePassword(password) {
    this.setState({ ...this.state, password });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Icon active name='mail' style={styles.icon} />
              <Input
                style={styles.text}
                placeholder='Digite seu email'
                placeholderTextColor='white'
                onChangeText={this.handleChangeMail.bind(this)}
                value={this.state.mail}
              />
            </Item>
            <Item>
              <Icon active name='lock' style={styles.icon} />
              <Input
                style={styles.text}
                placeholder='Digite sua senha'
                placeholderTextColor='white'
                secureTextEntry
                onChangeText={this.handleChangePassword.bind(this)}
                value={this.state.password}
              />
            </Item>
            <View style={styles.buttonView}>
              <Button color='white' title="Entrar" onPress={this.btnLogin.bind(this)} />
              <Button color='white' title="Entrar com Google" onPress={() => false} />
              <Button color='white' title="Entrar com Facebook" onPress={() => false} />
              <Button
                color='white'
                title="Criar Conta"
                onPress={() => this.props.navigation.navigate('CreateAccount', { navigation: this.props.navigation })}
              />
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR
  },
  text: {
    color: 'white'
  },
  icon: {
    color: 'white'
  },
  buttonView: {
    marginTop: 20
  }
});
