import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'

import { Material } from './model'
import Item from './Item'

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] }
  }

  componentWillMount() {
    let items = this.state.items
    items.push(new Material(1))
    items.push(new Material(2))
    items.push(new Material(3))
    this.setState({ ...this.state, items })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={({ item }) => <Item navigation={this.props.navigation} material={item}></Item>}
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