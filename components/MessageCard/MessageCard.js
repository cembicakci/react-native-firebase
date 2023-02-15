import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MessageCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.user}>{item.username}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}

export default MessageCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00897b',
        padding: 10,
        color: '#fff',
        margin: 5,
        borderRadius: 3
    },
    user: {
        color: '#fff',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        fontStyle: 'italic'
    }

})