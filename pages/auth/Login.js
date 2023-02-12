import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const Login = ({ navigation }) => {

    const handleSubmit = () => {
        navigation.navigate('SignInPage')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Input placeholder='E-posta adresi giriniz...' />
            <Input placeholder='Şifre giriniz...' />
            <Button text={'Giriş Yap'} />
            <Button text={'Kayıt Ol'} onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default Login

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