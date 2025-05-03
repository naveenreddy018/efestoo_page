"use client"

import HomePage from '@/components/home'

// import HomePage from '@/components/home'
// import App from 'next/app'



import React from 'react'

function Page() {
  return <HomePage />
}

export default Page

// 'use client';
// import { useEffect, useState } from 'react';
// import styles from "../styles/chat.module.css"
// import socket from '@/utils/socket';
// import { Message } from '@/types';
// import MessageItem from '@/components/Chatinterface/messageItem';
// import MessageInput from '@/components/Chatinterface/MessageInput';

// export default function Home() {
//   const [messages, setMessages] = useState<Message[]>([]);

//   useEffect(() => {
//     socket.on('receiveMessage', (msg: Message) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.off('receiveMessage');
//     };
//   }, []);

//   const handleSend = (text: string) => {
//     const msg: Message = {
//       sender: 'User', // or dynamic user
//       text,
//       timestamp: new Date().toISOString(),
//     };
//     socket.emit('sendMessage', msg);
//     setMessages((prev) => [...prev, msg]);
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <div className={styles.chatHeader}>Event Group Chat</div>
//       <div className={styles.chatBody}>
//         {messages.map((msg, i) => (
//           <MessageItem key={i} message={msg} />
//         ))}
//       </div>
//       <MessageInput onSend={handleSend} />
//     </div>
//   );
// }

