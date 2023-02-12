import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Formik } from 'formik'

const Login = ({ navigation }) => {

    const initialValues = {
        usermail: '',
        password: ''
    }

    const handleSign = () => {
        navigation.navigate('SignInPage')
    }

    const handleLogin = (formValues) => {
        console.log(formValues)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>

            <Formik initialValues={initialValues} onSubmit={handleLogin}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            placeholder='E-posta adresi giriniz...'
                            value={values.usermail}
                            onChangeText={handleChange('usermail')} />
                        <Input
                            placeholder='Şifre giriniz...'
                            value={values.password}
                            onChangeText={handleChange('password')} />
                        <Button text={'Giriş Yap'} onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text={'Kayıt Ol'} onPress={handleSign} />
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