import React, { Component } from 'react';

import ListItems from '../ListItems';

import BusinessFacade from '../../business/BusinessFacade';

export default class MaterialScreen extends Component {
  static navigationOptions = {
    title: 'Materiais',
    headerLeft: null
  }

  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();

    /* User Methods */

    // this.businessFacade.registerUser(this.businessFacade.getUser('user'), res => {
    //   if (res) {
    //     console.log('Registrado com sucesso!');
    //   } else {
    //     console.log('Erro ao registrar');
    //   }
    // });
    // const user = {
    //   ...this.businessFacade.getUser('userDonator'),
    //   mail: 'user@olhaolivro.com',
    //   password: 'Lima1234567'
    // };
    // this.businessFacade.loginUser(user, res => {
    //   if (res) {
    //     console.log('Login efetuado com sucesso!');
    //   } else {
    //     console.log('Erro ao fazer login');
    //   }
    // });

    // this.businessFacade.getCurrentUser(user => {
    //   const updateUser = { ...user, name: 'liminha' };
    //   this.businessFacade.updateUser(updateUser, res => {
    //     if (res) {
    //       console.log('Sucesso ao atualizar o usuario');
    //     } else {
    //       console.log('Erro ao atualizar o usuario');
    //     }
    //   });
    // });

    // this.businessFacade.deleteCurrentUser(res => {
    //   if (res) {
    //     console.log('Deletado com sucesso!');
    //   } else {
    //     console.log('Erro ao deletar');
    //   }
    // });

    // this.businessFacade.getCurrentUser(user => {
    //   console.log(user);
    // });

    // this.businessFacade.getDataDonator({
    //   ...this.businessFacade.getUser('userDonator'),
    //   _id: '5a1df25a18314d186a2506a8'
    // }, (isSuccess, res) => console.log(res));

    /* Materials Methods */

    // this.businessFacade.getListAllMaterials((isSuccess, res) => console.log(res));

    // this.businessFacade.registerMaterial(
    //   this.businessFacade.getMaterial('material'),
    //   (isSuccess, res) => console.log(isSuccess)
    // );

    // this.businessFacade.deleteMaterial(
    //   { ...this.businessFacade.getMaterial('material'), _id: '5a1f6a3c38af813912dee997' },
    //   (isSuccess, res) => console.log(isSuccess)
    // );

    // this.businessFacade.getDataMaterial(
    //   { ...this.businessFacade.getMaterial('material'), _id: '5a1eca89b1a6cb26edef70c7' }, 
    //   (isSuccess, res) => console.log(res)
    // );

    // this.businessFacade.getMaterialCategory('Programação', (isSuccess, res) => console.log(res));

    // this.businessFacade.getMaterialTitle('Livro de Python', (isSuccess, res) => console.log(res));

    // this.businessFacade.editMaterial(
    //   { 
    //     ...this.businessFacade.getMaterial('material'),
    //     _id: '5a1eca89b1a6cb26edef70c7',
    //     title: 'Livro de C' 
    //   },
    //   (isSuccess, res) => console.log(res)
    // );

    // this.businessFacade.increasesMaterialRate(
    //   { 
    //     ...this.businessFacade.getMaterial('material'),
    //     _id: '5a1eca89b1a6cb26edef70c7'
    //   },
    //   (isSuccess, res) => console.log(res)
    // );
  }

  render() {
    return <ListItems navigation={this.props.navigation} />;
  }
}
