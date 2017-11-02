import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    TabNavigator,
    TabBarBottom,
    StackNavigator
} from 'react-navigation';


import { mainColor } from './colors'
import MaterialsScreen from './components/pages/MaterialsScreen'
import MyAccountScreen from './components/pages/MyAccountScreen'
import AnnounceScreen from './components/pages/AnnounceScreen'
import DetailsScreen from './components/pages/DetailsScreen'

const navOptions = {
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: mainColor,
    }
}

const MaterialNav = StackNavigator(
    {
        Material: {
            screen: MaterialsScreen
        },
        Details: {
            screen: DetailsScreen
        }
    },
    {
        navigationOptions: navOptions
    }
)

const AnnounceNav = StackNavigator(
    {
        Announce: {
            screen: AnnounceScreen
        }
    },
    {
        navigationOptions: navOptions
    }
)

const MyAccountNav = StackNavigator(
    {
        MyAccount: {
            screen: MyAccountScreen
        }
    },
    {
        navigationOptions: navOptions
    }
)

const TabNav = TabNavigator(
    {
        Material: {
            screen: MaterialNav,
            navigationOptions: {
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
            screen: AnnounceNav,
            navigationOptions: {
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
            screen: MyAccountNav,
            navigationOptions: {
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
            activeTintColor: mainColor,
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
    }
);


export default TabNav;