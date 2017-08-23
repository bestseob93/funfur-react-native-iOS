import React from 'react'
import { View } from 'react-native'
import style from './style'

function Home({children}) {
    return (
        <View style={style.container}>
            {children}
        </View>
    )
}

export default Home