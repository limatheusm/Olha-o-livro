import React from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { mainColor } from '../colors';
import IconText from './IconText';

export default props => (
    <ScrollView style={styles.detailsView}>
        <View style={styles.iconViewHeader}>
            <Text style={styles.type}>Tipo: {props.material.type}</Text>
            <TouchableHighlight onPress={props.heartAction} underlayColor="white">
                <View>
                    <IconText
                        font="Entypo"
                        name="heart"
                        size={18}
                        color="red"
                        text={props.material.heart}
                        fontSize={15}
                    />
                </View>
            </TouchableHighlight>

        </View>
        <Text style={styles.description}>{props.material.description}</Text>
        <Text style={{ paddingBottom: 10, fontStyle: 'italic' }}>Ficou interessado? Entre em contato com o doador! </Text>
        <IconText
            font="FontAwesome"
            name="whatsapp"
            size={18}
            color={mainColor}
            text={props.material.donator.phone}
            fontSize={15}
        />
        <IconText
            font="Feather"
            name="mail"
            size={18}
            color={mainColor}
            text={props.material.donator.mail}
            fontSize={15}
        />
        <View style={styles.button}>
            <Button
                title='Detalhes do doador'
                onPress={props.toDonatorDetailsScreen}
            />
        </View>
    </ScrollView>
);

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
    type: {
        fontSize: 15,
        fontStyle: 'italic',
        marginBottom: 20,
        color: "gray"
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
    }
})