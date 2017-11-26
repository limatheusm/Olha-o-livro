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
    super(props)
    this.state = {
      donator: this.props.navigation.state.params.donator,
      name: this.props.navigation.state.params.donator.name,
      mail: this.props.navigation.state.params.donator.mail,
      phone: this.props.navigation.state.params.donator.phone,
      imageURL: this.props.navigation.state.params.donator.imageURL,
      from: this.props.navigation.state.params.donator.from
    }
  }

  static navigationOptions = {
    title: 'Editar Conta'
  }

   editAccount() {
    donator = this.state.donator;
    donator.name = this.state.name;
    donator.mail = this.state.mail;
    donator.phone = this.state.phone;
    donator.imageURL = this.state.imageURL;
    donator.from = this.state.from;

    this.setState({ ...this.state, donator })
    //console.log(donator)
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
              <Text style={styles.textButton}> Atualizar! </Text>
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