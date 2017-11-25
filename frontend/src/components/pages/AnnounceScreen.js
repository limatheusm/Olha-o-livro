import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import { Picker, Item, Button, Label, Input, Container, Content, Form } from 'native-base';

import { Material } from '../../business/model/material';
import { UserDonator } from '../../business/model/user';

export default class AnnounceScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      material: {},
      title: '',
      description: '',
      imgURL: '',
      local: '',
      type: '',
      sharingType: '',
      category: ''
    }
  }

  static navigationOptions = {
    title: 'Anunciar'
  }

  onValuePickerTypeChange(type) {
    this.setState({ ...this.state, type });
  }

  onValuePickerSharingTypeChange(sharingType) {
    this.setState({ ...this.state, sharingType });
  }

  onValuePickerCategoryChange(category) {
    this.setState({ ...this.state, category });
  }

  announceMaterial() {
    let material = new Material(1);
    material.title = this.state.title;
    material.type = this.state.sharingType;
    material.description = this.state.description;
    material.imageURL = this.state.imgURL;
    material.local = this.state.local;
    material.date = "10/10/2017";
    material.UserDonator = new UserDonator();
    material.heart = 54;

    this.setState({ ...this.state, material })
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>URL da Imagem</Label>
              <Input
                onChangeText={imgURL => this.setState({ ...this.state, imgURL })}
                value={this.state.imgURL}
              />
            </Item>
            <Item stackedLabel>
              <Label>Título</Label>
              <Input
                onChangeText={title => this.setState({ ...this.state, title })}
                value={this.state.title}
              />
            </Item>
            <Item stackedLabel>
              <Label>Descrição</Label>
              <Input
                onChangeText={description => this.setState({ ...this.state, description })}
                value={this.state.description}
                multiline={true}
                style={{ paddingBottom: 15, paddingTop: 15 }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Universidade/Escola</Label>
              <Input
                onChangeText={local => this.setState({ ...this.state, local })}
                value={this.state.local}
              />
            </Item>
            <Item>
              <Label>Tipo do Material</Label>
              <Picker
                style={styles.picker}
                mode="dropdown"
                placeholder="Selecionar"
                headerBackButtonText="Voltar"
                iosHeader="Tipo do Material"
                selectedValue={this.state.type}
                onValueChange={this.onValuePickerTypeChange.bind(this)}
              >
                <Item label="Livro" value="book" />
                <Item label="PDF" value="pdf" />
                <Item label="Apostila física" value="apostille" />
              </Picker>
            </Item>
            <Item>
              <Label>Tipo do Compartilhamento</Label>
              <Picker
                style={styles.picker}
                mode="dropdown"
                placeholder="Selecionar"
                headerBackButtonText="Voltar"
                iosHeader="Tipo do Compartilhamento"
                selectedValue={this.state.sharingType}
                onValueChange={this.onValuePickerSharingTypeChange.bind(this)}
              >
                <Item label="Doação" value="donation" />
                <Item label="Empréstimo" value="loan" />
              </Picker>
            </Item>
            <Item>
              <Label>Categoria</Label>
              <Picker
                style={styles.picker}
                mode="dropdown"
                placeholder="Selecionar"
                headerBackButtonText="Voltar"
                iosHeader="Categoria"
                selectedValue={this.state.category}
                onValueChange={this.onValuePickerCategoryChange.bind(this)}
              >
                <Item label="Programação" value="code" />
                <Item label="Matemática" value="math" />
                <Item label="Línguas" value="lang" />
              </Picker>
            </Item>
            <Button
              info
              block
              style={styles.button}
              onPress={() => this.announceMaterial()}
            >
              <Text style={styles.textButton}> Anunciar! </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  picker: {

  },
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