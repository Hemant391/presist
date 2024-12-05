import { useState } from "react";
import PlatformSidebar from "./components/PlatformSidebar";
import ChatSidebar from "./components/ChatSidebar";
import ChatWindow from "./components/ChatWindow";
import "./index.css";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState("All"); // Default to "All"
  const [selectedChat, setSelectedChat] = useState(null); // Selected chat
  const [allChatData] = useState([
    {
      id: 1,
      name: "Alice",
      avatar: "/path-to-avatar1.png",
      platform: "WhatsApp",
      email: 'Alice@gmail.com',
      messages: [
        { sender: "Alice", text: "Hi there!", timestamp: "2024-12-01 10:00 AM" },
        { sender: "You", text: "Hello, Alice!", timestamp: "2024-12-01 10:05 AM" }
      ]
    },
    {
      id: 2,
      name: "Bob",
      avatar: "/path-to-avatar2.png",
      platform: "WhatsApp",
      email: 'Bob@gmail.com',
      messages: [
        { sender: "Bob", text: "Good morning!", timestamp: "2024-12-01 09:00 AM" },
        { sender: "You", text: "Morning Bob!", timestamp: "2024-12-01 09:05 AM" }
      ]
    },
    {
      id: 3,
      name: "Charlie",
      avatar: "/path-to-avatar3.png",
      platform: "WhatsApp",
      email: 'Charlie@gmail.com',
      messages: [
        { sender: "Charlie", text: "Hey!", timestamp: "2024-12-01 11:30 AM" },
        { sender: "Charlie", text: "How are you", timestamp: "2024-12-01 11:30 AM" },
        { sender: "You", text: "Hi Charlie!", timestamp: "2024-12-01 11:35 AM" }
      ]
    },
    {
      id: 4,
      name: "David",
      avatar: "/path-to-avatar4.png",
      platform: "Discord",
      email: 'David@gmail.com',
      messages: [
        { sender: "David", text: "Are you available?", timestamp: "2024-12-01 12:00 PM" },
        { sender: "You", text: "Yes, what's up?", timestamp: "2024-12-01 12:05 PM" }
      ]
    },
    {
      id: 5,
      name: "Eva",
      avatar: "/path-to-avatar5.png",
      platform: "Discord",
      email: 'Eva@gmail.com',
      messages: [
        { sender: "Eva", text: "Meeting at 2?", timestamp: "2024-12-01 13:00 PM" },
        { sender: "You", text: "Yes, I'll be there!", timestamp: "2024-12-01 13:05 PM" }
      ]
    },
    {
      id: 6,
      name: "Frank",
      avatar: "/path-to-avatar6.png",
      platform: "Instagram",
      email: 'Frank@gmail.com',
      messages: [
        { sender: "Frank", text: "Project update?", timestamp: "2024-12-01 14:00 PM" },
        { sender: "You", text: "On track for delivery", timestamp: "2024-12-01 14:05 PM" }
      ]
    },
    {
      id: 7,
      name: "Grace",
      avatar: "/path-to-avatar7.png",
      platform: "Instagram",
      email: 'Grace@gmail.com',
      messages: [
        { sender: "Grace", text: "Lunch tomorrow?", timestamp: "2024-12-01 15:00 PM" },
        { sender: "You", text: "Sure, 12:30 works", timestamp: "2024-12-01 15:05 PM" }
      ]
    },
    {
      id: 8,
      name: "Henry",
      avatar: "/path-to-avatar8.png",
      platform: "Instagram",
      email: 'Henry@gmail.com',
      messages: [
        { sender: "Henry", text: "Document ready?", timestamp: "2024-12-01 16:00 PM" },
        { sender: "You", text: "Sending now!", timestamp: "2024-12-01 16:05 PM" }
      ]
    },
    {
      id: 9,
      name: "Ivy",
      avatar: "/path-to-avatar9.png",
      platform: "Instagram",
      email: 'Ivy@gmail.com',
      messages: [
        { sender: "Ivy", text: "Team call?", timestamp: "2024-12-01 17:00 PM" },
        { sender: "You", text: "In 10 minutes", timestamp: "2024-12-01 17:05 PM" }
      ]
    },
    {
      id: 10,
      name: "Jack",
      avatar: "/path-to-avatar10.png",
      platform: "Instagram",
      email: 'Jack@gmail.com',
      messages: [
        { sender: "Jack", text: "Weekend plans?", timestamp: "2024-12-02 09:00 AM" },
        { sender: "You", text: "Nothing yet!", timestamp: "2024-12-02 09:05 AM" }
      ]
    },
    {
      id: 11,
      name: "Kelly",
      avatar: "/path-to-avatar11.png",
      platform: "LinkedIn",
      email: 'Kelly@gmail.com',
      messages: [
        { sender: "Kelly", text: "Report status?", timestamp: "2024-12-02 10:00 AM" },
        { sender: "You", text: "Almost done", timestamp: "2024-12-02 10:05 AM" }
      ]
    },
    {
      id: 12,
      name: "Liam",
      avatar: "/path-to-avatar12.png",
      platform: "LinkedIn",
      email: 'Liam@gmail.com',
      messages: [
        { sender: "Liam", text: "Coffee break?", timestamp: "2024-12-02 11:00 AM" },
        { sender: "You", text: "In 5!", timestamp: "2024-12-02 11:05 AM" }
      ]
    },
    {
      id: 13,
      name: "Mia",
      avatar: "/path-to-avatar13.png",
      platform: "Messenger",
      email: 'Mia@gmail.com',
      messages: [
        { sender: "Mia", text: "Presentation ready?", timestamp: "2024-12-02 12:00 PM" },
        { sender: "You", text: "Just finished!", timestamp: "2024-12-02 12:05 PM" }
      ]
    },
    {
      id: 14,
      name: "Noah",
      avatar: "/path-to-avatar14.png",
      platform: "Messenger",
      email: 'Noah@gmail.com',
      messages: [
        { sender: "Noah", text: "Meeting notes?", timestamp: "2024-12-02 13:00 PM" },
        { sender: "You", text: "Will share soon", timestamp: "2024-12-02 13:05 PM" }
      ]
    },
    {
      id: 15,
      name: "Olivia",
      avatar: "/path-to-avatar15.png",
      platform: "Twitter",
      email: 'Olivia@gmail.com',
      messages: [
        { sender: "Olivia", text: "Project deadline?", timestamp: "2024-12-02 14:00 PM" },
        { sender: "You", text: "Next Friday", timestamp: "2024-12-02 14:05 PM" }
      ]
    },
    {
      id: 16,
      name: "Peter",
      avatar: "/path-to-avatar16.png",
      platform: "Twitter",
      email: 'Peter@gmail.com',
      messages: [
        { sender: "Peter", text: "Team lunch?", timestamp: "2024-12-02 15:00 PM" },
        { sender: "You", text: "Count me in!", timestamp: "2024-12-02 15:05 PM" }
      ]
    },
    {
      id: 17,
      name: "Quinn",
      avatar: "/path-to-avatar17.png",
      platform: "Twitter",
      email: 'Quinn@gmail.com',
      messages: [
        { sender: "Quinn", text: "Updates?", timestamp: "2024-12-02 16:00 PM" },
        { sender: "You", text: "All good!", timestamp: "2024-12-02 16:05 PM" }
      ]
    },
    {
      id: 18,
      name: "Ram",
      avatar: "/path-to-avatar18.png",
      platform: "Twitter",
      email: 'Ram@gmail.com',
      messages: [
        { sender: "Ram", text: "Hello!", timestamp: "2024-12-02 17:00 PM" },
        { sender: "You", text: "Hi Ram!", timestamp: "2024-12-02 17:05 PM" }
      ]
    }
  ]);
  


  return (
    <div className="flex h-screen">
      {/* Platform Selection Sidebar */}
      <PlatformSidebar onSelectPlatform={setSelectedPlatform} />

      {/* Chat List Sidebar */}
      <ChatSidebar
        chatData={allChatData}
        platform={selectedPlatform}
        onSelectChat={setSelectedChat}
      />

      {/* Chat Window */}
      <ChatWindow chat={selectedChat}  platform={selectedPlatform}/>
    </div>
  );
}

export default App;
