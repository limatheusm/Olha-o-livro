import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';

import { mainColor } from '../../colors';
import ImageHeader from '../ImageHeader';
import IconText from '../IconText';

export default class DonatorDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { donator: this.props.navigation.state.params.donator };
  }

  static navigationOptions = {
    title: 'Doador'
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageHeader
          imageURL={this.state.donator.imageURL}
          circle
          title={this.state.donator.name}
          local={this.state.donator.from}
        />
        <View style={styles.details}>
          <IconText
            font="FontAwesome"
            name="handshake-o"
            size={25}
            color={mainColor}
            text="Já ajudou 5 pessoas"
            fontSize={20}
          />
          <IconText
            font="Entypo"
            name="open-book"
            size={25}
            color={mainColor}
            text="10 Materiais cadastrados"
            fontSize={20}
          />
          <IconText
            font="FontAwesome"
            name="whatsapp"
            size={25}
            color={mainColor}
            text={this.state.donator.phone}
            fontSize={20}
          />
          <IconText
            font="Feather"
            name="mail"
            size={25}
            color={mainColor}
            text={this.state.donator.mail}
            fontSize={20}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    width: Dimensions.get('window').width,
    padding: 30,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  }
});