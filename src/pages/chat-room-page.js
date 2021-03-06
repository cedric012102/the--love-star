import React from 'react';
import { ScrollView } from 'react-native';
import { ChatRoom } from '../components/chat-room';

const ChatRoomPage = () => {
    return (
        <ScrollView 
        contentContainerStyle={{ flex: null }}
        bounces={false}
        >
        <ChatRoom/>
        </ScrollView>
    );
};

export default ChatRoomPage;