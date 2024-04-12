"use client"
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {io} from "socket.io-client";
import {useCookies} from 'react-cookie';
import Avatar from './Avatar'
import {handleSubmit} from '@/lib/fetchers';

const Form = () => {
    const [avatarId, setAvatarId] = useState((Math.random() * 20).toFixed());
    const router = useRouter();
    const socket = io("http://localhost:4000");
    const [cookie] = useCookies(["user"])
    useEffect(() => {
        if (cookie.user) {
            router.push("/chat")
        }
    }, [cookie.user]);

    return (
        <form onSubmit={(e) => handleSubmit(e, router, avatarId, socket)} className='flex flex-col gap-5'>
            <Avatar avatarId={avatarId} setAvatarId={setAvatarId}/>
            <div className='flex flex-col xl:flex-row gap-5'>
                <div className='form-control w-full'>
                    <label className='label'><span className='label-text text-lg'>What is your name?</span></label>
                    <input type="text" placeholder='Enter your user name' className='input input-bordered w-full'
                           required/>
                </div>
                <div className='form-control w-full'>
                    <label className='label'><span className='label-text text-lg'>What's your E-mail?</span></label>
                    <input type="email" placeholder='Email' className='input input-bordered w-full' required/>
                </div>
            </div>
            <button className='btn'>Login</button>
        </form>
    )
}

export default Form;