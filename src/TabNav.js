import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MaterialsScreen from './components/pages/MaterialsScreen'
import MyAccountScreen from './components/pages/MyAccountScreen'
import AnnounceScreen from './components/pages/AnnounceScreen'

const TabNav = TabNavigator(
    {
        Material: {
            screen: MaterialsScreen,
            navigationOptions: {
                title: 'Materiais',
                tabBarLabel: 'Materiais',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Entypo
                        name={focused ? 'open-book' : 'book'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        Announce: {
            screen: AnnounceScreen,
            navigationOptions: {
                title: 'Anunciar',
                tabBarLabel: 'Anunciar',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                        name={focused ? 'ios-megaphone' : 'ios-megaphone-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        },
        MyAccount: {
            screen: MyAccountScreen,
            navigationOptions: {
                title: 'Minha conta',
                tabBarLabel: 'Minha conta',
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialCommunityIcons
                        name={focused ? 'account' : 'account-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'dodgerblue',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
    }
);


export default TabNav;