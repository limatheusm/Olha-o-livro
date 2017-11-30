import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  Alert
} from 'react-native';

import { Picker, Item, Button, Label, Input, Container, Content, Form } from 'native-base';

import BusinessFacade from '../../business/BusinessFacade';

export default class AnnounceScreen extends Component {
  static navigationOptions = {
    title: 'Anunciar',
    headerLeft: null
  }

  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();
    this.state = {
      material: {},
      title: '',
      description: '',
      imageURL: 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575224083.jpg',
      local: '',
      type: '',
      sharingType: '',
      category: '',
      currentUser: null,
      refreshing: true
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, refreshing: true }, () => {
      this.verifyCurrentUser();
    });
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
    if (this.state.currentUser) {
      const material = this.mountMaterial();
      material.donator = this.state.currentUser._id;
      this.businessFacade.registerMaterial(material, (isSuccess, res) => {
        if (isSuccess) {
          this.setState({ ...this.state, material });
          Alert.alert('Seu Material foi cadastrado com sucesso!');
          this.props.navigation.navigate('Material');
        } else {
          Alert.alert(`Erro! ${res.message}`);
        }
      });
      // this.businessFacade.updateUser(this.state.currentUser, (isSucc, resp) => {
      //   if (isSucc) {
      //     this.setState({ ...this.state, material });
      //     Alert.alert('Seu Material foi cadastrado com sucesso!');
      //     this.props.navigation.navigate('Material');
      //   } else {
      //     Alert.alert(`Erro! ${resp.message}`);
      //   }
      // });
    } else {
      this.props.navigation.navigate('Announce');
    }
  }
  // Verifica se o usuario esta logado no sistema, para liberar a postagem
  verifyCurrentUser() {
    this.businessFacade.getCurrentUser(currentUser => {
      if (currentUser) {
        this.setState({
          ...this.state,
          currentUser,
          refreshing: false
        });
      } else {
        this.setState({
          ...this.state,
          currentUser: null,
          refreshing: false
        });
      }
    });
  }

  mountMaterial() {
    const material = this.businessFacade.getMaterial('material');
    material.title = this.state.title;
    material.sharingType = this.state.sharingType;
    material.description = this.state.description;
    material.imageURL = this.state.imageURL;
    material.local = this.state.local;
    material.date = '10/10/2017';
    material.category = [this.state.category];
    material.type = this.state.type;
    return material;
  }

  handleRefresh = () => {
    this.setState({ ...this.state, refreshing: true }, () => {
      this.verifyCurrentUser();
    });
  }

  render() {
    if (!this.state.currentUser) {
      // return <Text style={{ marginTop: 25, alignSelf: 'center' }}> Entre no sistema para anunciar! </Text>;
      return (
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
        >
        <Text style={{ marginTop: 50, alignSelf: 'center' }}>
          Entre no sistema para anunciar!
        </Text>
        </ScrollView>
      );
    }
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
                placeholder="Selecionar"
                headerBackButtonText="Voltar"
                iosHeader="Tipo do Material"
                selectedValue={this.state.type}
                onValueChange={this.onValuePickerTypeChange.bind(this)}
              >
                <Item label="Livro" value="book" />
                <Item label="PDF" value="PDF" />
                <Item label="Apostila física" value="Apostila física" />
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
                <Item label="Doação" value="Doação" />
                <Item label="Empréstimo" value="Empréstimo" />
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
                <Item label="Programação" value="Programação" />
                <Item label="Matemática" value="Matemática" />
                <Item label="Línguas" value="Línguas" />
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
