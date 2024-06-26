"use client"
import React, { useEffect } from 'react';
import { fetchUser } from '@/lib/fetchersFunctions';
import { useUser } from '@/store/userStore';
import { useCookies } from 'react-cookie';
import { shallow } from 'zustand/shallow';
import SearchBar from './SearchBar';
import ChatList from './ChatList';

const Sidebar = () => {
    const [cookie, setCookie] = useCookies(["user"]);
    const { myUser, setUser } = useUser((state) => ({ myUser: state.myUser, setUser: state.setUser }),shallow);

    useEffect(() => {
        fetchUser(cookie, setUser);
    }, [cookie.user]);

    return (
        <div
            className='w-full md:!block sidebar z-10 border-r-2 border-slate-400 md:w-1/2 lg:w-1/3 p-3 bg-white h-screen overflow-y-auto'>
            <SearchBar user={myUser} />
            {myUser && <ChatList mySelf={myUser} />}
        </div>
    );
}

export default Sidebar;
