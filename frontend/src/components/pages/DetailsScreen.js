import React, { Component } from 'react';
import {
  View,
  Alert
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
    this.toDonatorDetailsScreen = this.toDonatorDetailsScreen.bind(this);
    this.heartAction = this.heartAction.bind(this);
  }

  toDonatorDetailsScreen() {
    this.props.navigation.navigate('DonatorDetails', { donator: this.state.material.donator })
  }

  heartAction() {
    Alert.alert(`Voce deu like no material ${this.state.material.title}!`);
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
