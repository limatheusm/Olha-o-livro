import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  Dimensions,
  RefreshControl,
  Alert
} from 'react-native';

import BusinessFacade from '../business/BusinessFacade';
import IconText from './IconText';

export default class MaterialDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { material: this.props.material, donator: {}, refreshing: false };
    this.businessFacade = new BusinessFacade();
  }

  componentDidMount() {
    this.setState({ ...this.state, refreshing: true }, () => {
      this.loadDonator();
    });
  }

  loadDonator() {
    const donatorID = this.state.material.donator;
    this.businessFacade.getDataDonator(donatorID, (isSuccess, res) => {
      if (isSuccess) {
        this.setState({ ...this.state, refreshing: false, donator: res });
      } else {
        Alert.alert(`Erro! ${res.message}`);
      }
    });
  }

  handleRefresh = () => {
    this.setState({ ...this.state, refreshing: true }, () => {
      this.loadDonator();
    });
  }

  toDonatorDetailsScreen = () => {
    this.buildDonator();
  }

  // Calcula dados do usuario
  buildDonator() {
    const donatorID = this.state.material.donator;
    const nav = this.props.navigation;
    this.businessFacade.getAllMyMaterials(donatorID, (isSuccess, res) => {
      if (isSuccess) {
        let alreadyHelped = 0;
        let registeredMaterials = 0;
        registeredMaterials = res.length;
        const materialsAggregate = this.businessFacade.getMaterialsAggregate(res);
        for (
          materialsAggregate.createIterator(res); 
          !materialsAggregate.iterator.isDone(); 
          materialsAggregate.iterator.next()) {
          const material = materialsAggregate.iterator.currentItem();
          if (!material.available) {
            alreadyHelped++;
          }
        }
        const donator = this.state.donator;
        donator.alreadyHelped = alreadyHelped;
        donator.registeredMaterials = registeredMaterials;
        nav.navigate('DonatorDetails', { donator });
      }
    });
  }

  heartAction = () => {
    this.businessFacade.increasesMaterialRate(this.state.material, (isSuccess, res) => {
      if (isSuccess) {
        const material = this.state.material;
        material.heart++;
        this.setState({ ...this.state, material });
      } else {
        Alert.alert(`Erro! ${res.message}`);
      }
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.detailsView}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
          />
        }
      >
        <View style={styles.iconViewHeader}>
          <View style={styles.materialDetails}>
            <Text style={styles.typeDetails}>{this.state.material.sharingType}</Text>
            <Text style={styles.typeDetails}>Tipo: {this.state.material.type}</Text>
            <Text style={styles.sharingType}>Categoria: {this.state.material.category}</Text>
          </View>
          <TouchableHighlight onPress={this.heartAction} underlayColor="white">
            <View>
              <IconText
                font="Entypo"
                name="heart"
                size={18}
                color="red"
                text={this.state.material.heart}
                fontSize={15}
              />
            </View>
          </TouchableHighlight>

        </View>
        <Text style={styles.description}>{this.state.material.description}</Text>
        <Text style={{ paddingBottom: 10, fontStyle: 'italic' }}>
          Ficou interessado? Entre em contato com o doador!
      </Text>
        <IconText
          font="FontAwesome"
          name="whatsapp"
          size={18}
          color={new BusinessFacade().getMainColor()}
          text={this.state.donator.phone}
          fontSize={15}
        />
        <IconText
          font="Feather"
          name="mail"
          size={18}
          color={new BusinessFacade().getMainColor()}
          text={this.state.donator.mail}
          fontSize={15}
        />
        <View style={styles.button}>
          <Button
            title='Detalhes do doador'
            onPress={this.toDonatorDetailsScreen}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailsView: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    width: Dimensions.get('window').width,
    padding: 20,
    backgroundColor: 'white'
  },
  sharingType: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 20,
    color: 'gray'
  },
  description: {
    textAlign: 'justify',
    paddingBottom: 20
  },
  iconViewHeader: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between'
  },
  button: {
    marginTop: 5,
    marginBottom: 30
  },
  materialDetails: {
    flexDirection: 'column',
  },
  typeDetails: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 5,
    color: 'gray'
  }
});
