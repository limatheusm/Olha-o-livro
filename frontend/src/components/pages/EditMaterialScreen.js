import React, { Component } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import { 
  Picker, Item, 
  Button, Label, 
  Input, Container, 
  Content, Form, 
  CheckBox, Body,
  ListItem,
} from 'native-base';

import BusinessFacade from '../../business/BusinessFacade';

export default class EditMaterialScreen extends Component {
  static navigationOptions = {
    title: 'Editar Material'
  }

  constructor(props) {
    super(props);
    const material = this.props.navigation.state.params.material;
    this.businessFacade = new BusinessFacade();
    this.state = {
      material,
      title: material.title,
      description: material.description,
      imageURL: material.imageURL,
      local: material.local,
      type: material.type,
      sharingType: material.sharingType,
      category: material.category,
      available: material.available
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
    material.type = this.state.type;
    material.sharingType = this.state.sharingType;
    material.description = this.state.description;
    material.imageURL = this.state.imageURL;
    material.local = this.state.local;
    material.date = '10/10/2017';
    material.donator = this.state.material.donator._id;
    material.heart = this.state.material.donator;
    material.category = this.state.category;
    material.available = this.state.available;
    this.businessFacade.editMaterial(material, (isSuccess, res) => {
      if (isSuccess) {
        Alert.alert('Sucesso ao atualizar o material!');
        this.setState({ ...this.state, material });
        this.props.navigation.navigate('MyAccount');
      } else {
        Alert.alert(`Erro! ${res.message}`);
      }
    });
  }

  deleteMaterial() {
    this.businessFacade.deleteMaterial(this.state.material, (isSuccess, res) => {
      if (isSuccess) {
        Alert.alert('Sucesso ao deletar o material!');
        this.setState({ ...this.state, material: null });
        this.props.navigation.navigate('MyAccount');
      } else {
        Alert.alert(`Erro! ${res.message}`);
      }
    });
  }

  handleCheckBox = () => {
    const available = this.state.available ? false : true;
    this.setState({ available });
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
                <Item label="Livro" value="Livro" />
                <Item label="PDF" value="PDF" />
                <Item label="Apostila física" value="Apostila física" />
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
                <Item label="Doação" value="Doação" />
                <Item label="Empréstimo" value="Empréstimo" />
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
                <Item label="Programação" value="Programação" />
                <Item label="Matemática" value="Matemática" />
                <Item label="Línguas" value="Línguas" />
              </Picker>
            </Item>
            <ListItem style={{ backgroundColor: 'transparent' }}>
              <CheckBox 
                checked={this.state.available} 
                color='green' 
                onPress={this.handleCheckBox} 
              />
              <Body>
                <Label style={{ marginLeft: 10 }}>Disponível</Label>
              </Body>
            </ListItem>
            <Button
              info
              block
              style={{ marginTop: 20, marginHorizontal: 20 }}
              onPress={() => this.editMaterial()}
            >
              <Text style={styles.textButton}> Atualizar </Text>
            </Button>
            <Button
              danger
              block
              style={styles.endButton}
              onPress={() => this.deleteMaterial()}
            >
              <Text style={styles.textButton}> Deletar </Text>
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
  endButton: {
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
