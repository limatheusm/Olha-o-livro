import React, { Component } from 'react';
import {
    View,
    Button,
    StyleSheet
} from 'react-native';
import { Container, Content, Form, Item, Icon, Label, Input } from 'native-base';

import BusinessFacade from '../../business/BusinessFacade';
import ImageHeader from '../ImageHeader';

const MAIN_COLOR = new BusinessFacade().getMainColor();

export default class CreateAccountScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: '',
            password: '',
            phone: '',
            from: '',
            imageURL: ''
        }
    }

    handleChange(type, obj) {
        switch (type) {
            case 'name':
                this.setState({ ...this.state, name: obj });
                break;
            case 'mail':
                this.setState({ ...this.state, mail: obj });
                break;
            case 'password':
                this.setState({ ...this.state, password: obj });
                break;
            case 'phone':
                this.setState({ ...this.state, phone: obj });
                break;
            case 'from':
                this.setState({ ...this.state, from: obj });
                break;
            case 'imageURL':
                this.setState({ ...this.state, imageURL: obj });
                break;
            default:
                throw new Error('Type Error handleChange');
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Form>
                        <Item>
                            <Icon active name='person' style={styles.icon} />
                            <Input
                                style={styles.text}
                                placeholder='Digite seu nome'
                                placeholderTextColor='white'
                                onChangeText={text => this.handleChange('name', text)}
                                value={this.state.name}
                            />
                        </Item>
                        <Item>
                            <Icon active name='mail' style={styles.icon} />
                            <Input
                                style={styles.text}
                                placeholder='Digite seu email'
                                placeholderTextColor='white'
                                onChangeText={text => this.handleChange('mail', text)}
                                value={this.state.mail}
                            />
                        </Item>
                        <Item>
                            <Icon active name='lock' style={styles.icon} />
                            <Input
                                style={styles.text}
                                placeholder='Digite sua senha'
                                placeholderTextColor='white'
                                secureTextEntry
                                onChangeText={text => this.handleChange('password', text)}
                                value={this.state.password}
                            />
                        </Item>
                        <Item>
                            <Icon active name='logo-whatsapp' style={styles.icon} />
                            <Input
                                style={styles.text}
                                placeholder='Digite seu número'
                                placeholderTextColor='white'
                                onChangeText={text => this.handleChange('phone', text)}
                                value={this.state.phone}
                            />
                        </Item>
                        <Item>
                            <Icon active name='ios-pin' style={styles.icon} />
                            <Input
                                style={styles.text}
                                placeholder='Digite sua Universidade/Escola'
                                placeholderTextColor='white'
                                onChangeText={text => this.handleChange('from', text)}
                                value={this.state.from}
                            />
                        </Item>
                        <Item>
                            <Icon active ios='ios-image' android='md-image' style={styles.icon} />
                            <Input
                                style={styles.text}
                                placeholder='Digite a url de sua foto'
                                placeholderTextColor='white'
                                onChangeText={text => this.handleChange('imageURL', text)}
                                value={this.state.imageURL}
                            />
                        </Item>
                        <View style={styles.buttonView}>
                            <Button color='white' title="Criar" onPress={() => false} />
                            <Button color='white' title="Criar com Google" onPress={() => false} />
                            <Button color='white' title="Criar com Facebook" onPress={() => false} />
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: MAIN_COLOR
    },
    text: {
        color: 'white'
    },
    icon: {
        color: 'white'
    },
    buttonView: {
        marginTop: 20
    }
});