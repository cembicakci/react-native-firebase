import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import Button from '../Button/Button'
import Modal from 'react-native-modal'

const ModalComponent = ({ visible, onClose, onSend }) => {

    const [text, setText] = useState('');
    function handleSend(text) {
        if (!text) {
            return;
        }
        onSend(text);
        setText('');
    }

    return (
        <Modal
            swipeDirection='down'
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            style={styles.modal}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput placeholder='Birşeyler yaz...' placeholderTextColor='#bdbdbd' onChangeText={setText} multiline />
                </View>
                <Button text={'Gönder'} onPress={() => { handleSend(text) }} />
            </View>
        </Modal>
    )
}

export default ModalComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: Dimensions.get('window').height / 3,
    },
    input_container: {
        flex: 1
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    }
})