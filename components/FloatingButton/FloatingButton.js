import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons"

const FloatingButton = ({ onPress, icon }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={icon} color="white" size={30} />
        </TouchableOpacity>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 60,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#007e71",
    },

})