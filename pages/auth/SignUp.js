import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Formik } from 'formik'

import { register } from '../../firebase'


const SignUp = ({ navigation }) => {

    const [loading, setLoading] = useState(false);

    const initialValues = {
        usermail: '',
        password: '',
        repassword: ''
    }

    const handleLogin = () => {
        navigation.goBack();
    }

    const handleFormSubmit = async (formValues) => {
        setLoading(true)
        if (formValues.password !== formValues.repassword) {
            return Alert.alert('Error: ', 'Passwords do not match!')
        }
        const user = await register(formValues.usermail, formValues.password)
        setLoading(false)
        navigation.navigate('LoginPage')

    }
    return (
        <SafeAreaView>
            <Text style={styles.header}>bana ne?</Text>

            <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            placeholder='E-posta adresi giriniz...'
                            value={values.usermail}
                            onChangeText={handleChange('usermail')} />
                        <Input
                            placeholder='Şifre giriniz...'
                            value={values.password}
                            onChangeText={handleChange('password')}
                            isSecure
                        />
                        <Input
                            placeholder='Şifreyi tekrar giriniz...'
                            value={values.repassword}
                            onChangeText={handleChange('repassword')}
                            isSecure
                        />
                        <Button text={'Kayıt Ol'} onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>

            <Button text={'Geri'} onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default SignUp

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