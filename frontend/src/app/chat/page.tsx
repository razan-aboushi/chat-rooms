import React from 'react';
import Messages from '@/components/ChatThreads/Messages';
import Sidebar from '@/components/SideBar/Sidebar';

const Chat = () => {
    return (
        <div className='min-h-screen'>
            <div className='mx-auto flex'>
                <Sidebar />
                <Messages />
            </div>
        </div>
    )
}

export default Chat;