import React from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Button,
    Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { mainColor } from '../colors'

export default props => (
    <ScrollView style={styles.detailsView}>
        <Text style={styles.type}>Tipo: {props.material.type}</Text>
        <Text style={styles.description}>{props.material.description}</Text>
        <Text style={{ paddingBottom: 10, fontStyle: 'italic' }}>Ficou interessado? Entre em contato com o doador! </Text>
        <View style={styles.iconView}>
            <FontAwesome
                name='whatsapp'
                size={18}
                style={{ color: mainColor }}
            />
            <Text style={styles.textIcon}>(83) 9 9988-8899</Text>
        </View>
        <View style={styles.iconView}>
            <Feather
                name='mail'
                size={18}
                style={{ color: mainColor }}
            />
            <Text style={styles.textIcon}>doador@olhaolivro.com.br</Text>
        </View>
        <View style={styles.button}>
            <Button
                title='Detalhes do doador'
                onPress={() => false}
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
        padding: 20
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
    iconView: {
        flexDirection: 'row',
        paddingBottom: 5,
    },
    textIcon: {
        paddingLeft: 5
    },
    button: {
        marginTop: 5,
        marginBottom: 30
    }
})