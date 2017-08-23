import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Home from '../../../../components/Home'

function HomeScreen() {
    return (
        <Home>
            <Text>HomeScreen</Text>
        </Home>
    )
}

HomeScreen.navigationOptions = {
    tabBarLabel: 'Home'
}

export default HomeScreen