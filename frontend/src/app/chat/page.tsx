import React from 'react';
import Messages from '@/components/Chat-Threads/Messages';
import Sidebar from '@/components/SideBar/Sidebar';

const page = () => {
    return (
        <div className='min-h-screen'>
            <div className='mx-auto flex'>
                <Sidebar />
                <Messages />
            </div>
        </div>
    )
}

export default page;