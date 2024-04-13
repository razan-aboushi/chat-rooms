import React from "react";
import './globals.css';
import {Inter} from 'next/font/google';
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'chat rooms',
    description: 'this is a chat rooms to chat with other people',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
        </Head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}
