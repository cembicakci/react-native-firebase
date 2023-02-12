import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ text, onPress, loading }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={loading} style={styles.container}>

            {
                loading ? <ActivityIndicator color='white' /> :
                    <View style={styles.button_container}>
                        <Text style={styles.title}>{text}</Text>
                    </View>
            }


        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        backgroundColor: '#00897b',
        borderRadius: 5,
        alignItems: 'center'
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff'
    }
})