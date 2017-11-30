import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View
} from 'react-native';

import BusinessFacade from '../../business/BusinessFacade';
import ImageHeader from '../ImageHeader';
import IconText from '../IconText';

export default class DonatorDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Doador'
  }

  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();
    this.state = { donator: this.props.navigation.state.params.donator };
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
            color={this.businessFacade.getMainColor()}
            text={`Já ajudou ${this.state.donator.alreadyHelped} pessoa(s)`}
            fontSize={20}
          />
          <IconText
            font="Entypo"
            name="open-book"
            size={25}
            color={this.businessFacade.getMainColor()}
            text={`${this.state.donator.registeredMaterials} Materiais cadastrado(s)`}
            fontSize={20}
          />
          <IconText
            font="FontAwesome"
            name="whatsapp"
            size={25}
            color={this.businessFacade.getMainColor()}
            text={this.state.donator.phone}
            fontSize={20}
          />
          <IconText
            font="Feather"
            name="mail"
            size={25}
            color={this.businessFacade.getMainColor()}
            text={this.state.donator.mail}
            fontSize={20}
          />
        </View>
      </View>
    );
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
