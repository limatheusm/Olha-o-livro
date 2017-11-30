import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import { Picker, Item, Button, Label, Input, Container, Content, Form } from 'native-base';

import BusinessFacade from '../../business/BusinessFacade';

export default class EditMaterialScreen extends Component {
  static navigationOptions = {
    title: 'Editar Conta'
  }

  constructor(props) {
    super(props);
    const donator = this.props.navigation.state.params.donator;
    this.state = {
      donator,
      name: donator.name,
      mail: donator.mail,
      password: donator.password,
      phone: donator.phone,
      imageURL: donator.imageURL,
      from: donator.from
    };
    this.businessFacade = new BusinessFacade();
  }

  editAccount() {
    const donator = this.mountDonator();
    this.businessFacade.updateUser(donator, (isSuccess, res) => {
      if (isSuccess) {
        this.setState({ ...this.state, donator });
        Alert.alert('Conta atualizada com sucesso!');
        this.props.navigation.navigate('MyAccount');
      } else {
        Alert.alert(`Erro ao atualizar a conta! ${res.message}`);
      }
    });
  }

  deleteAccount() {
    // Deleta conta do BD
    this.businessFacade.deleteCurrentUser((isSuccess, res) => {
      if (isSuccess) {
        Alert.alert('Conta deletada com sucesso!');
        this.props.navigation.navigate('MyAccount');
      } else {
        Alert.alert(`Erro ao deletar a conta! ${res.message}`);
      }
    });
  }

  signOut() {
    console.log('[EditAccountScreen - signout]');
    this.businessFacade.signOut();
    this.props.navigation.navigate('MyAccount');
  }

  mountDonator() {
    const donator = this.state.donator;
    donator.name = this.state.name;
    donator.mail = this.state.mail;
    donator.phone = this.state.phone;
    donator.imageURL = this.state.imageURL;
    donator.from = this.state.from;
    return donator;
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>URL da Imagem</Label>
              <Input
                onChangeText={imageURL => this.setState({ ...this.state, imageURL })}
                value={this.state.imageURL}
              />
            </Item>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input
                onChangeText={name => this.setState({ ...this.state, name })}
                value={this.state.name}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                onChangeText={mail => this.setState({ ...this.state, mail })}
                value={this.state.mail}
              />
            </Item>
            <Item stackedLabel>
              <Label>Senha</Label>
              <Input
                onChangeText={password => this.setState({ ...this.state, password })}
                value={this.state.password}
              />
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input
                onChangeText={phone => this.setState({ ...this.state, phone })}
                value={this.state.phone}
              />
            </Item>
            <Button
              info
              block
              style={styles.button}
              onPress={() => this.editAccount()}
            >
              <Text style={styles.textButton}> Atualizar </Text>
            </Button>
            <Button
              info
              block
              style={styles.button}
              onPress={() => this.signOut()}
            >
              <Text style={styles.textButton}> Sair </Text>
            </Button>
            <Button
              danger
              block
              style={{ marginHorizontal: 20, marginBottom: 20 }}
              onPress={() => this.deleteAccount()}
            >
              <Text style={styles.textButton}> Deletar </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    color: 'black'
  }
});
