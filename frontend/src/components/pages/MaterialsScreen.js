import React, { Component } from 'react';

import ListItems from '../ListItems';

export default class MaterialScreen extends Component {
  static navigationOptions = {
    title: 'Materiais'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <ListItems navigation={this.props.navigation} />;
  }
}
