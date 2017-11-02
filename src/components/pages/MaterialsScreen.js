import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListItems from '../ListItems'

export default class MaterialScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Materiais'
  }

  render() {
    return <ListItems navigation={this.props.navigation}/>
  }
}