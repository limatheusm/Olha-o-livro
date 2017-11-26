import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListItems from '../ListItems'

export default class MyItemsScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Meus Materiais'
  }

  render() {
    return <ListItems navigation={this.props.navigation} myMaterials={this.props.navigation.donator} myItemsProps='myitems'/>
  }
}