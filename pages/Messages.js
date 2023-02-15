import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import FloatingButton from '../components/FloatingButton/FloatingButton'
import ModalComponent from '../components/Modal/ModalComponent';
import { addText } from '../firebase';
import uuid from 'react-native-uuid';
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';
import MessageCard from '../components/MessageCard/MessageCard';


const Messages = () => {

    const text = useSelector(state => state.text.text)

    const [inputModalVisible, setInputModalVisible] = useState(false);

    const handleInputToggle = () => {
        setInputModalVisible(!inputModalVisible)

    }

    const handleSendContent = async (content) => {
        const auth = getAuth();
        const username = auth.currentUser.email.split('@')[0]
        await addText({
            text: content,
            id: uuid.v4(),
            username: username,
        })
        setInputModalVisible(false)
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={text}
                renderItem={({ item }) => <MessageCard item={item} />}
                
            />
            <FloatingButton icon='plus' onPress={handleInputToggle} />
            <ModalComponent visible={inputModalVisible} onClose={handleInputToggle} onSend={handleSendContent} />
        </SafeAreaView>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})