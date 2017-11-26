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
    let items = this.state.items
    items.push(new Material(1))
    items.push(new Material(2))
    items.push(new Material(3))
    items.push(new Material(4))
    items.push(new Material(5))
    items.push(new Material(6))
    items.push(new Material(7))
    this.setState({ ...this.state, items })

    let myItems = this.state.myItems
    myItems.push(new Material(1))
    myItems.push(new Material(2))
    this.setState({ ...this.state, myItems })
  }

  render() {
    // renderiza apenas os materiais do doador
    if(this.props.myItemsProps === 'myitems') {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.myItems}
            renderItem={({ item }) => <Item navigation={this.props.navigation} material={item} editMaterial='edit'></Item>}
          />
        </View>
      );
    }
    
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={({ item }) => <Item navigation={this.props.navigation} material={item}></Item>}
          teste={() => console.log(this.props.navigation.donator)}
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