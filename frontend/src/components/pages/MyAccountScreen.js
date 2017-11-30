import React, { Component } from 'react';
import {
  ScrollView,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

import ImageHeader from '../ImageHeader';
import MyAccountNav from '../MyAccountNav';
import LoginScreen from '../pages/LoginScreen';

import BusinessFacade from '../../business/BusinessFacade';

// Responsavel pela tela inicial da aba de navegação MyAccount
// Renderiza os componentes ImageHeader e MyAccountNav
export default class MyAccountScreen extends Component {
  static navigationOptions = {
    title: 'Minha Conta',
    headerLeft: null
  }
  constructor(props) {
    super(props);
    this.businessFacade = new BusinessFacade();
    this.state = { donator: undefined, refreshing: false };
    this._onPress = this._onPress.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  // inicializa o objeto de teste
  componentDidMount() {
    this.handleRefresh();
  }

  refresh() {
    this.businessFacade.getCurrentUser((donator) => {
      console.log(donator);
      if (donator) {
        // console.log(donator);
        this.setState({ ...this.state, donator, refreshing: false });
      } else {
        this.setState({ ...this.state, donator: undefined, refreshing: false });
      }
    });
  }

  _onPress(editAccount) {
    if (editAccount === 'edit') {
      this.props.navigation.navigate('EditAccount', { donator: this.state.donator });
    } else {
      this.props.navigation.navigate('MyItems', { donator: this.state.donator });
    }
  }

  handleRefresh = () => {
    this.setState({ ...this.state, refreshing: true }, () => {
      this.refresh();
    });
  }

  render() {
    if (this.state.donator !== undefined) {
      return (
        <ScrollView
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.handleRefresh}
            />
          }
        >
          <ImageHeader
            imageURL={this.state.donator.imageURL}
            circle
            title={this.state.donator.name}
            local={this.state.donator.from}
          />
          <MyAccountNav _onPress={this._onPress} />
        </ScrollView>
      );
    }
    return <LoginScreen navigation={this.props.navigation} />;
  }
}

