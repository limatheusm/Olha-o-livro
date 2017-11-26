import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'

import { Material } from './../business/model/material'
import Item from './Item'

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], myItems: [] }
  }

  componentWillMount() {
    let items = this.state.items;
    items.push(new Material(1));
    items.push(new Material(2));
    items.push(new Material(3));
    items.push(new Material(4));
    items.push(new Material(5));
    items.push(new Material(6));
    items.push(new Material(7));
    this.setState({ ...this.state, items });


    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.donator) {
        let myItems = this.props.navigation.state.params.donator.materials;
        this.setState({ ...this.state, myItems })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.myItems.length != 0 ? this.state.myItems : this.state.items}
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
})