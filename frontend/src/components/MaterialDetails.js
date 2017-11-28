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

import BusinessFacade from '../business/BusinessFacade';
import IconText from './IconText';

export default props => (
    <ScrollView style={styles.detailsView}>
        <View style={styles.iconViewHeader}>
            <View style={styles.materialDetails}>
                <Text style={styles.typeDetails}>{props.material.sharingType}</Text>
                <Text style={styles.typeDetails}>Tipo: {props.material.type}</Text>
                <Text style={styles.sharingType}>Categoria: {props.material.category}</Text>
            </View>
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
        <Text style={{ paddingBottom: 10, fontStyle: 'italic' }}>
          Ficou interessado? Entre em contato com o doador! 
        </Text>
        <IconText
            font="FontAwesome"
            name="whatsapp"
            size={18}
            color={new BusinessFacade().getMainColor()}
            text={props.material.donator.phone}
            fontSize={15}
        />
        <IconText
            font="Feather"
            name="mail"
            size={18}
            color={new BusinessFacade().getMainColor()}
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
