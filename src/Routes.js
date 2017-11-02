import React from 'react'
import { StackNavigator } from 'react-navigation'

import TabNav from './TabNav'
import DetailsScreen from './components/pages/DetailsScreen'

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
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#2196F3',
           }
        }
    }
)

export default Routes;