import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Project1 = () => {
    return (
        <View style={styles.container}> <View style={styles.box}>
            <Text style={styles.txtColor}>Hello World</Text>
        </View>
        </View>

    )
}

export default Project1

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtColor: {
        color: '#fff'
    }
})