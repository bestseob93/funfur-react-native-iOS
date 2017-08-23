import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './style'

class Header extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text>Header</Text>
            </View>
        )
    }
}

export default Header
