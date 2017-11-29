import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';

import BusinessFacade from './../business/BusinessFacade';
import Item from './Item';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();
    this.state = { items: [], myItems: [], refresh: true };
  }

  // Recupera os materiais cadastrados no banco
  componentWillMount() {
    // Atualiza
    this.refresh();
    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.donator) {
        const myItems = this.props.navigation.state.params.donator.materials;
        this.setState({ ...this.state, myItems });
      }
    }
  }

  refresh() {
    this.businessFacade.getListAllMaterials(
      (isSuccess, res) => {
        this.setState({ ...this.state, items: res, refresh: false });
      }
    );
  }

  render() {
    if (this.state.refresh) {
      return <ActivityIndicator style={{ marginTop: 50 }} />;
    }

    if (this.state.items.length == 0 && !this.state.refresh) {
      return (
        <Text style={{ marginTop: 50, alignSelf: 'center' }}>
          Nenhum livro cadastrado :(
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.myItems.length != 0 ? this.state.myItems : this.state.items}
          keyExtractor={(item, index) => index}
          renderItem={
            ({ item }) => <Item
              navigation={this.props.navigation}
              material={item}
              editMaterial={this.state.myItems != 0 ? true : false}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
