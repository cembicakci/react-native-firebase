import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const SignIn = ({ navigation }) => {

    const handleLogin = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView>
            <Text style={styles.header}>bana ne?</Text>
            <Input placeholder='E-posta adresi giriniz...' />
            <Input placeholder='Şifre giriniz...' />
            <Input placeholder='Şifre tekrar giriniz...' />
            <Button text={'Kayıt Ol'} />
            <Button text={'Geri'} onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    body_container: {
        flex: 1,
    },
    header: {
        margin: 5,
        fontSize: 150,
        color: '#00897b'
    }
})