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
    items.push(new Material());
    items.push(new Material());
    items.push(new Material());
    items.push(new Material());
    items.push(new Material());
    items.push(new Material());
    items.push(new Material());
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