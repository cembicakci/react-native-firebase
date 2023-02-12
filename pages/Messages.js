import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import FloatingButton from '../components/FloatingButton/FloatingButton'

const Messages = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FloatingButton icon='plus' />
        </SafeAreaView>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})