"use client"
import Lottie from 'lottie-react'
import React from 'react'
import loader from "../assets/Telegram.json";

const TelegramLoading = () => {
    return (
        <Lottie animationData={loader} loop={true}/>
    )
}

export default TelegramLoading;