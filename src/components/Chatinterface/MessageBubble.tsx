// import React from "react";
// import { Message } from "../types";

// interface Props {
//   message: Message;
//   isOwnMessage: boolean;
// }

// const MessageBubble: React.FC<Props> = ({ message, isOwnMessage }) => {
//   return (
//     <div className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-2`}>
//       <div
//         className={`rounded-lg px-4 py-2 max-w-xs ${
//           isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
//         }`}
//       >
//         <p className="text-sm">{message.content}</p>
//         <span className="text-xs text-gray-600">
//           {new Date(message.timestamp).toLocaleTimeString()}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default MessageBubble;
// App.tsx or App.jsx
import React, { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";

interface Message {
  sender: "user" | "organizer";
  content: string;
  timestamp: string;
}

interface Event {
  id: number;
  name: string;
  latestMessage: string;
}

const eventsData: Event[] = [
  { id: 1, name: "Tech Conference 2025", latestMessage: "Welcome to the event!" },
  { id: 2, name: "Music Fest 2025", latestMessage: "Get ready to rock!" },
];

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [unreadCount, setUnreadCount] = useState(2);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages([{ sender: "organizer", content: event.latestMessage, timestamp: now }]);
    setUnreadCount(0);
    setIsChatOpen(true);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", content: newMessage, timestamp: now },
      ]);

      setTimeout(() => {
        const replyTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "organizer", content: "Thanks for your message!", timestamp: replyTime },
        ]);
      }, 1000);

      setNewMessage("");
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.phoneFrame}>
        <div className={styles.chatWrapper}>
          <h1 className={styles.appTitle}>Event-Based Group Chat</h1>

          <div
            className={styles.chatIcon}
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <span className={styles.chatIconIcon}>💬</span>
            {unreadCount > 0 && <span className={styles.unreadCount}>{unreadCount}</span>}
          </div>

          <div className={styles.userDashboard}>
            <h3 className={styles.appTitle}>Your Registered Events</h3>
            {eventsData.map((event) => (
              <div
                key={event.id}
                className={styles.chatPreview}
                onClick={() => handleEventClick(event)}
              >
                <div className={styles.eventName}>{event.name}</div>
                <div className={styles.latestMessage}>{event.latestMessage}</div>
              </div>
            ))}
          </div>

          {isChatOpen && selectedEvent && (
            <div className={styles.chatContainer}>
              <div className={styles.chatHeader}>
                {selectedEvent.name}
                <button
                  className={styles.closeButton}
                  onClick={() => setIsChatOpen(false)}
                >
                  ✖️
                </button>
              </div>

              <div className={styles.chatMessages} ref={chatMessagesRef}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${styles.message} ${
                      msg.sender === "user"
                        ? styles.userMessage
                        : styles.organizerMessage
                    }`}
                  >
                    <div className={styles.bubble}>
                      <span className={styles.messageText}>{msg.content}</span>
                      <span className={styles.timestamp}>{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.messageInput}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;