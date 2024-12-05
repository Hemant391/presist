import { useState,useEffect } from "react";

const ChatWindow = ({ chat ,platform}) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "User" },
    { id: 2, text: "Hi there!", sender: "You" },
  ]);
  const [inputValue, setInputValue] = useState(""); // State for input field

  useEffect(() => {
    // Check if `chat` is defined and has messages
    if (chat && chat.messages) {
      setMessages(chat.messages);
    } else {
      setMessages([]); // Reset messages if no chat is selected
    }
  }, [chat]);



  if (!chat) {
    return (
      <div className="flex-grow p-4 text-gray-500 text-4xl text-gray-400">
        Select a chat to start messaging
      </div>
    );
  }

  const sendChat = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Prevent empty messages

    setMessages([
      ...messages,
      { id: messages.length + 1, text: inputValue, sender: "You" },
    ]);
    setInputValue("");
  };

  return (
    <div className="flex-grow flex flex-col p-4 bg-white overflow-auto">
      <h2 className="text-lg font-bold mb-4">{chat.name}</h2>
      <div className="flex-grow overflow-y-scroll">
        {messages.map((message,ind) => (
          <div
            key={ind}
            className={`mb-2 p-2  ${message.sender === "You"?"text-right mr-4":""}`}
          >
            <p className={`inline rounded-lg p-2 text-2xl ${message.sender === "You"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200" }`}>
            {message.text}

            </p>
          </div>
        ))}
      </div>
      <form onSubmit={sendChat}>
        <div className="flex items-center border-t p-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue} // Bind input value to state
            onChange={(e) => setInputValue(e.target.value)} // Update state on input
            className="flex-grow p-2 border rounded"
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;

