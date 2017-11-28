import React from 'react';
import {
    View,
    Button,
    StyleSheet
} from 'react-native';
import { Container, Content, Form, Item, Icon, Label, Input } from 'native-base';

import BusinessFacade from '../../business/BusinessFacade';
import ImageHeader from '../ImageHeader';

const MAIN_COLOR = new BusinessFacade().getMainColor();

export default props => (
    <Container style={styles.container}>
        <Content>
            <Form>
                <Item>
                    <Icon active name='mail' style={styles.icon} />
                    <Input
                        style={styles.text}
                        placeholder='Digite seu email'
                        placeholderTextColor='white'
                        onChangeText={props.handleChangeMail}
                        value={props.mail}
                    />
                </Item>
                <Item>
                    <Icon active name='lock' style={styles.icon} />
                    <Input
                        style={styles.text}
                        placeholder='Digite sua senha'
                        placeholderTextColor='white'
                        secureTextEntry
                        onChangeText={props.handleChangePassword}
                        value={props.password}
                    />
                </Item>
                <View style={styles.buttonView}>
                    <Button color='white' title="Entrar" onPress={() => false} />
                    <Button color='white' title="Entrar com Google" onPress={() => false} />
                    <Button color='white' title="Entrar com Facebook" onPress={() => false} />
                    <Button color='white' title="Criar Conta" onPress={() => props.navigation.navigate('CreateAccount')} />
                </View>
            </Form>
        </Content>
    </Container>
)

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