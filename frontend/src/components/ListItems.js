import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  RefreshControl
} from 'react-native';

import BusinessFacade from './../business/BusinessFacade';
import Item from './Item';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();
    this.state = { items: [], myItems: [], refreshing: true };
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
    this.setState({ ...this.state, refreshing: true });
    this.businessFacade.getListAllMaterials(
      (isSuccess, res) => {
        if (isSuccess) {
          this.setState({ ...this.state, items: res, refreshing: false });
        } else {
          this.setState({ ...this.state, items: [], refreshing: false });
        }
      }
    );
  }

  render() {
    if (this.state.items.length == 0 && !this.state.refreshing) {
      return (
        <Text style={{ marginTop: 50, alignSelf: 'center' }}>
          Nenhum livro cadastrado :(
        </Text>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.refresh.bind(this)}
            />
          }
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
