import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Picker, Item, Button, Label, Input, Container, Content, Form } from 'native-base';

export default class EditMaterialScreen extends Component {
  static navigationOptions = {
    title: 'Editar Material'
  }

  constructor(props) {
    super(props);
    const material = this.props.navigation.state.params.material;
    this.state = {
      material,
      title: material.title,
      description: material.description,
      imageURL: material.imageURL,
      local: material.local,
      type: material.type,
      sharingType: material.sharingType,
      category: material.category
    };
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

  editMaterial() {
    const material = this.state.material;
    material.title = this.state.title;
    material.type = this.state.sharingType;
    material.description = this.state.description;
    material.imageURL = this.state.imageURL;
    material.local = this.state.local;
    material.date = '10/10/2017';
    material.UserDonator = this.state.material.donator;
    material.heart = this.state.material.donator;

    this.setState({ ...this.state, material });
    // Atualiza no BD
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
                multiline
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
                placeholder={this.state.type}
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
                placeholder={this.state.sharingType}
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
                placeholder={this.state.category}
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
              onPress={() => this.editMaterial()}
            >
              <Text style={styles.textButton}> Atualizar </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
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
