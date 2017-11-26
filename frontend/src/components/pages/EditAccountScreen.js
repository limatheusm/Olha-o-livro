import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Picker, Item, Button, Label, Input, Container, Content, Form } from 'native-base';

import { Material } from '../../business/model/material';
import { UserDonator } from '../../business/model/user';

export default class EditMaterialScreen extends Component {
  constructor(props) {
    super(props);
    let donator = this.props.navigation.state.params.donator;
    this.state = {
      donator: donator,
      name: donator.name,
      mail: donator.mail,
      phone: donator.phone,
      imageURL: donator.imageURL,
      from: donator.from
    }
  }

  static navigationOptions = {
    title: 'Editar Conta'
  }

  editAccount() {
    let donator = this.state.donator;
    donator.name = this.state.name;
    donator.mail = this.state.mail;
    donator.phone = this.state.phone;
    donator.imageURL = this.state.imageURL;
    donator.from = this.state.from;

    this.setState({ ...this.state, donator })
    // Atualiza no BD
    //console.log(donator)
  }

  deleteAccount() {
    // Deleta conta do BD
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
              danger
              block
              style={{ marginHorizontal: 20 }}
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