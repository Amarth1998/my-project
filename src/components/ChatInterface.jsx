import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Header from "./Header";
import ChatArea from "./ChatArea";

export default function ChatInterface() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(true);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = { type: "user", text: message };
    setChatHistory((prev) => [...prev, userMessage]);

    try {
      const res = await fetch(`http://localhost:5000/responses?prompt=${encodeURIComponent(message)}`);
      const data = await res.json();
      const answerText = data[0]?.answer || "Sorry, I don't have an answer for that.";

      const botMessage = { type: "bot", text: answerText, json: JSON.stringify({ prompt: message, answer: answerText }) };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching answer:", error);
    }

    setMessage("");
  };

  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const toggleMobileSidebar = () => setMobileSidebar(!mobileSidebar);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
      <MobileSidebar mobileSidebar={mobileSidebar} toggleMobileSidebar={toggleMobileSidebar} />

      <div className="flex flex-col flex-1 relative">
        <Header toggleMobileSidebar={toggleMobileSidebar} />
        <ChatArea
          message={message}
          setMessage={setMessage}
          handleSend={handleSend}
          chatHistory={chatHistory}
        />
      </div>
    </div>
  );
}
