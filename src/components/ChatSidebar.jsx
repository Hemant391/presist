import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


// Platform logos
const platformLogos = {
  WhatsApp: <FaWhatsapp/>,
  Discord: <FaDiscord />,
  Instagram: <FaInstagram />,
  LinkedIn: <FaLinkedin/>,
  Messenger: < SiImessage/>,
  Twitter: <FaTwitter/>,
};

const ChatSidebar = ({ platform, onSelectChat, chatData }) => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    if (platform === "All") {
      // Deduplicate chatData based on email when platform is "All"
      const uniqueChats = Array.from(
        new Map(chatData.map((chat) => [chat.email, chat])).values()
      );
      setFilteredChats(uniqueChats);
    } else {
      // Filter by platform without deduplication
      setFilteredChats(chatData.filter((chat) => chat.platform === platform));
    }
  }, [platform, chatData]);
  

  const handleChatClick = (chat) => {
    setSelectedChatId(chat.id); // Set the selected chat ID
    onSelectChat(chat); // Notify parent component of the selected chat
  };

  return (
    <div className="w-1/4 bg-gray-200 p-4 overflow-auto">
      <h2 className="text-lg font-bold mb-4">
        {platform === "All" ? "All Chats" : `${platform} Chats`}
      </h2>
      {filteredChats.map((chat,ind) => (
        <div
          key={chat.id}
          onClick={() => handleChatClick(chat)}
          className={`flex items-center p-2 cursor-pointer text-xl py-3 rounded
            ${selectedChatId === chat.id ? "bg-blue-200 text-black" : "hover:bg-gray-300"}
          `}
        >
          
          <div className="relative w-14 h-14">
  {/* Main User Avatar */}

  <img
    src="./Default.jpg"
    alt={chat.name}
    className="w-full h-full rounded-full bg-green-400"
  />
  
  {/* Platform Icon (Positioned inside the avatar at the bottom-right) */}
  {platform === "All" && ( <span className="w-5 h-5 rounded-full absolute top-0 right-0 transform translate-x-1/4 translate-y-1/4 bg-gray-200 ">{platformLogos[chat.platform]}</span>
  )}
</div>


          {/* User Name and Platform Logo */}
          <div className="ml-4 flex items-center">
            <span className="mr-2">{chat.name}</span>

            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSidebar;
