import React, { Component } from 'react';
import {
  View
} from 'react-native';

import ImageHeader from '../ImageHeader';
import MaterialDetails from '../MaterialDetails';

export default class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Detalhes'
  }
  
  constructor(props) {
    super(props);
    this.state = { material: this.props.navigation.state.params.material };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageHeader
          imageURL={this.state.material.imageURL}
          title={this.state.material.title}
          local={this.state.material.local}
        />
        <MaterialDetails
          material={this.state.material}
          navigation={this.props.navigation}
          toDonatorDetailsScreen={this.toDonatorDetailsScreen}
          heartAction={this.heartAction}
        />
      </View>
    );
  }
}
