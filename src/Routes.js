import React from 'react'
import { StackNavigator } from 'react-navigation'

import TabNav from './TabNav'
import DetailsScreen from './components/pages/DetailsScreen'
import { mainColor } from './colors/colors'

const Routes = StackNavigator(
    {
        Home: {
            screen: TabNav
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                title: 'Details'
            }
        }
    },
    {
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: mainColor,
           }
        }
    }
)

export default Routes;