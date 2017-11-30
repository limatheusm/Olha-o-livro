import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView, 
  RefreshControl
} from 'react-native';

import BusinessFacade from './../business/BusinessFacade';
import Item from './Item';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();
    this.state = { items: [], myItems: [], donator: null, donatorItems: false, refreshing: false };
    this.refresh = this.refresh.bind(this);
  }

  // Recupera os materiais cadastrados no banco
  componentDidMount() {
    // Atualiza
    this.setState({ ...this.state, refreshing: true }, () => {
      this.refresh();
    });
    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.donator) {
        this.setState({ ...this.state, donator: this.props.navigation.state.params.donator });
        this.getDonatorMaterials();
      }
    }
  }

  // Iterator
  getDonatorMaterials() {
    this.setState({ ...this.state, refreshing: true });
    // Itera sobre os materiais cadastrados
    this.businessFacade.getListAllMaterials((isSuccess, res) => {
      if (isSuccess) {
        const myItems = [];
        const donator = this.props.navigation.state.params.donator;
        for (let index = 0; index < res.length; index++) {
          const material = res[index];
          if (material.donator === donator._id) {
            myItems.push(material);
          }
        }
        this.setState({ ...this.state, myItems, donatorItems: true, refreshing: false });
      } else {
        this.setState({ ...this.state, myItems: [], donatorItems: true, refreshing: false });
      }
    });
  }

  refresh() {
    this.businessFacade.getListAllMaterials(
      (isSuccess, res) => {
        if (isSuccess) {
          if (this.state.donatorItems) {
            const myItems = [];
            const donator = this.props.navigation.state.params.donator;
            for (let index = 0; index < res.length; index++) {
              const material = res[index];
              if (material.donator === donator._id) {
                myItems.push(material);
              }
            }
            this.setState({ ...this.state, myItems, donatorItems: true, refreshing: false });
          } else {
            const itemsAvailables = [];
            for (let index = 0; index < res.length; index++) {
              const material = res[index];
              if (material.available) {
                itemsAvailables.push(material);
              }
            }
            this.setState({ ...this.state, items: itemsAvailables, refreshing: false });
          }
        } else {
          this.setState({ ...this.state, items: [], refreshing: false });
        }
      }
    );
  }

  handleRefresh = () => {
    this.setState({ ...this.state, refreshing: true }, () => {
      this.refresh();
    });
  }

  render() {
    if (this.state.donatorItems) {
      if (this.state.myItems.length == 0) {
        return (
          <Text style={{ marginTop: 50, alignSelf: 'center' }}>
            Nenhum material cadastrado :(
          </Text>
        );
      }
      return (
        <View style={styles.container}>
          <FlatList
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            data={this.state.myItems}
            keyExtractor={(item, index) => index}
            renderItem={
              ({ item }) => <Item
                navigation={this.props.navigation}
                material={item}
                editMaterial
              />
            }
          />
        </View>
      );
    }

    // Items Materials Show

    if (this.state.items.length == 0 && !this.state.refreshing) {
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
            Nenhum material disponível :(
          </Text>
        </ScrollView>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          data={this.state.items}
          keyExtractor={(item, index) => index}
          renderItem={
            ({ item }) => <Item
              navigation={this.props.navigation}
              material={item}
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
