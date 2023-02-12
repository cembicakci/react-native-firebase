import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

const Input = ({ placeholder, onChangeText, value, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,
        backgroundColor: "#ccc",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        padding: Platform.OS === "android" ? 3 : 5
    },
})