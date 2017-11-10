import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { mainColor } from '../colors';

export default props => (
    <View style={styles.imageView}>
        <Image
            resizeMode="contain"
            source={{ uri: props.imageURL }}
            style={props.circle ? styles.imageCircle : styles.image}
        />
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.iconView}>
            <Entypo
                name='location-pin'
                size={15}
                style={{ color: "white" }}
            />
            <Text style={styles.textIcon}>{props.local}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    image: {
        //position: 'absolute',
        width: 220,
        height: 220,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    imageCircle: {
        //position: 'absolute',
        width: 180,
        height: 180,
        borderRadius: 90,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    imageView: {
        flex: 1,
        //justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        position: 'relative',
        backgroundColor: mainColor,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 8
    },
    iconView: {
        flexDirection: 'row',
        paddingTop: 5,
    },
    textIcon: {
        fontSize: 12,
        color: 'white'
    }
})