import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiImessage } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { GiPolarStar } from "react-icons/gi";
import { useState } from "react";

const PlatformSidebar = ({ onSelectPlatform }) => {
  const [selectName, setSelectName] = useState("All");

  const platforms = [
    { name: "All", icon: <GiPolarStar /> },
    { name: "WhatsApp", icon: <FaWhatsapp /> },
    { name: "Discord", icon: <FaDiscord /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "Messenger", icon: <SiImessage /> },
  ];

  return (
    <div className="w-1/6 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4 text-4xl">Platforms</h2>
      {platforms.map((platform) => (
        <div
          key={platform.name} // Use a unique key, typically a property like name
          onClick={() => {
            setSelectName(platform.name); // Update the selected platform
            onSelectPlatform(platform.name); // Notify parent of selection
          }}
          className={`cursor-pointer p-2 hover:bg-gray-700 rounded flex items-center gap-2 text-xl py-3 ${
            selectName === platform.name
              ? "bg-blue-200 text-black"
              : "hover:bg-gray-300"
          }`}
        >
          {platform.icon}
          {platform.name}
        </div>
      ))}
    </div>
  );
};

export default PlatformSidebar;
