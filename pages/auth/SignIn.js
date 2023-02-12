import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Formik } from 'formik'

import { register } from '../../firebase'


const SignIn = ({ navigation }) => {

    const initialValues = {
        usermail: '',
        password: '',
        repassword: ''
    }

    const handleLogin = () => {
        navigation.goBack();
    }

    const handleFormSubmit = async (formValues) => {
        console.log(formValues)

        const user = await register(formValues.usermail, formValues.password)
        console.log(user)
        

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
                            onChangeText={handleChange('password')} />
                        <Input
                            placeholder='Şifreyi tekrar giriniz...'
                            value={values.repassword}
                            onChangeText={handleChange('repassword')} />
                        <Button text={'Kayıt Ol'} onPress={handleSubmit} />
                    </>
                )}
            </Formik>

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