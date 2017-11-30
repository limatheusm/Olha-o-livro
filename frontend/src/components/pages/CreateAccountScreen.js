import React, { Component } from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet
} from 'react-native';
import { Container, Content, Form, Item, Icon, Input } from 'native-base';

import BusinessFacade from '../../business/BusinessFacade';

const MAIN_COLOR = new BusinessFacade().getMainColor();

export default class CreateAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Matheus',
      mail: 'user@olhaolivro.com',
      password: 'Lima1234567',
      phone: '(83) 9 9999-9999',
      from: 'UFPB',
      imageURL: 'https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/20292831_1563732526991471_5299144803312892119_n.jpg?oh=82be979c7aebcc7dac4a9d6599e4e7a5&oe=5AA57AA0'
    };
    this.registerAccount = this.registerAccount.bind(this);
    this.businessFacade = new BusinessFacade();
  }

  registerAccount() {
    const user = this.businessFacade.getUser('userDonator');
    user.from = this.state.from;
    user.imageURL = this.state.imageURL;
    user.mail = this.state.mail;
    user.name = this.state.name;
    user.password = this.state.password;
    user.phone = this.state.phone;
    this.businessFacade.registerUser(user, (isSuccess, res) => {
      if (isSuccess) {
        Alert.alert('Conta criada com sucesso!');
        this.props.navigation.state.params.navigation.navigate('MyAccount');
      } else {
        Alert.alert(`Error! ${res.message}`);
      }
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Icon active name='person' style={styles.icon} />
              <Input
                style={styles.text}
                placeholder='Digite seu nome'
                placeholderTextColor='white'
                onChangeText={name => this.setState({ ...this.state, name })}
                value={this.state.name}
              />
            </Item>
            <Item>
              <Icon active name='mail' style={styles.icon} />
              <Input
                style={styles.text}
                placeholder='Digite seu email'
                placeholderTextColor='white'
                onChangeText={mail => this.setState({ ...this.state, mail })}
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
                onChangeText={password => this.setState({ ...this.state, password })}
                value={this.state.password}
              />
            </Item>
            <Item>
              <Icon active name='logo-whatsapp' style={styles.icon} />
              <Input
                style={styles.text}
                placeholder='Digite seu número'
                placeholderTextColor='white'
                onChangeText={phone => this.setState({ ...this.state, phone })}
                value={this.state.phone}
              />
            </Item>
            <Item>
              <Icon active name='ios-pin' style={styles.icon} />
              <Input
                style={styles.text}
                placeholder='Digite sua Universidade/Escola'
                placeholderTextColor='white'
                onChangeText={from => this.setState({ ...this.state, from })}
                value={this.state.from}
              />
            </Item>
            <Item>
              <Icon active ios='ios-image' android='md-image' style={styles.icon} />
              <Input
                style={styles.text}
                placeholder='Digite a url de sua foto'
                placeholderTextColor='white'
                onChangeText={imageURL => this.setState({ ...this.state, imageURL })}
                value={this.state.imageURL}
              />
            </Item>
            <View style={styles.buttonView}>
              <Button color='white' title="Criar" onPress={() => this.registerAccount()} />
              <Button color='white' title="Criar com Google" onPress={() => false} />
              <Button color='white' title="Criar com Facebook" onPress={() => false} />
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
