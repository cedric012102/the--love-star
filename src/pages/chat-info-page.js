import React from 'react';
import { ScrollView } from 'react-native';
import { ChatInfo } from '../components/chat-info';

const ChatInfoPage = () => {
    return (
        <ScrollView 
        contentContainerStyle={{ flex: null }}
        bounces={false}
    >
        <ChatInfo/>
    </ScrollView>
    );
};

export default ChatInfoPage;