import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import BusinessFacade from './../business/BusinessFacade';
import Item from './Item';

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();
    this.state = { items: [], myItems: [] };
  }

  componentWillMount() {
    const items = this.state.items;
    items.push(this.businessFacade.getMaterial('material'));
    items.push(this.businessFacade.getMaterial('material'));
    items.push(this.businessFacade.getMaterial('material'));
    items.push(this.businessFacade.getMaterial('material'));
    items.push(this.businessFacade.getMaterial('material'));
    items.push(this.businessFacade.getMaterial('material'));
    items.push(this.businessFacade.getMaterial('material'));
    this.setState({ ...this.state, items });


    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.donator) {
        const myItems = this.props.navigation.state.params.donator.materials;
        this.setState({ ...this.state, myItems });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.myItems.length !== 0 ? this.state.myItems : this.state.items}
          keyExtractor={(item, index) => index}
          renderItem={
            ({ item }) => <Item
              navigation={this.props.navigation}
              material={item}
              editMaterial={this.state.myItems !== 0 ? true : false}
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
