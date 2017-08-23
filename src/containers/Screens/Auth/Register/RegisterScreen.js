import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Tabs' })
    ]
})

class RegisterScreen extends Component {
    render() {
        return (
            <View>
                <Text>RegisterScreen</Text>
                <Button
                    onPress={() => this.props.navigation.dispatch(resetAction)}
                    title="홈"
                />
            </View>
        )
    }
}

export default RegisterScreen