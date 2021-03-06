import React from 'react';
import { ScrollView } from 'react-native';
import { ChatList } from '../components/chat-list';

const ChatListPage = () => {
    return (
        <ScrollView 
        contentContainerStyle={{ flex: null }}
        bounces={false}
    >
        <ChatList/>
    </ScrollView>
    );
};

export default ChatListPage;