import { ClipboardDocumentIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useRef } from "react";
import InputArea from "./InputArea";
import WelcomeSection from "./WelcomeSection";
import SuggestedPrompts from "./SuggestedPrompts";

const ChatArea = ({ message, setMessage, handleSend, chatHistory }) => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [dbData, setDbData] = useState({ responses: [], prompts: [] });
  const containerRef = useRef(null);

  const copyText = (text) => navigator.clipboard.writeText(text);

  // 🔹 Load db.json
  useEffect(() => {
    fetch("/db.json") // make sure db.json is inside /public folder
      .then((res) => res.json())
      .then((data) => setDbData(data))
      .catch((err) => console.error("Error loading db.json:", err));
  }, []);



// 🔹 Typewriter effect
useEffect(() => {
  if (!chatHistory.length) return;

  const lastMessage = chatHistory[chatHistory.length - 1];

  if (lastMessage.type === "user") {
    // find answer in db.json
    const response = dbData.responses.find(
      (r) => r.prompt.toLowerCase() === lastMessage.text.toLowerCase()
    );

    let answer = response ? response.answer : "Sorry, I don’t have an answer for that.";
    let words = answer.split(" ");
    let currentText = "";
    let idx = 0;

    // 🔹 First: push user + empty bot message
    setDisplayedMessages((prev) => [
      ...prev,
      lastMessage,              // keep the user question
      { type: "bot", text: "" } // bot starts empty
    ]);

    // 🔹 Then: typewriter update
    const interval = setInterval(() => {
      currentText += words[idx] + " ";
      setDisplayedMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { type: "bot", text: currentText.trim() }; // update last bot message
        return updated;
      });
      idx++;
      if (idx === words.length) clearInterval(interval);
    }, 50);
  } else {
    setDisplayedMessages(chatHistory);
  }
}, [chatHistory, dbData]);



  // 🔹 Auto scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedMessages]);

  const showInitialScreen = chatHistory.length === 0;

  return (
    <div className="flex-1 flex flex-col overflow-auto chat-scroll" ref={containerRef}>
      <div className="flex-1 mb-32 sm:mb-40"> {/* 🔹 Extra bottom margin */}
        <div className="max-w-4xl mx-auto w-full flex flex-col px-4 sm:px-6 lg:px-8 pt-4">

          {/* Initial screen → only before first prompt */}
          {showInitialScreen && (
            <>
              <WelcomeSection />
              <SuggestedPrompts setMessage={setMessage} />
            </>
          )}

          {/* Chat messages */}
          <div className="space-y-6 mt-4 flex flex-col mb-20">
  {displayedMessages.map((msg, idx) => (
    <div
      key={idx}
      className={`p-4 rounded-xl max-w-[85%] text-sm sm:text-base leading-relaxed transition-all duration-300
        ${msg.type === "user" 
          ? "bg-gray-100 text-gray-900 self-end ml-10 shadow-sm" 
          : "bg-white border border-gray-200 text-gray-900 self-start mr-10 shadow-sm"}`
      }
    >
      {/* Message content */}
      <div className="whitespace-pre-wrap">{msg.text}</div>

      {/* Bot message actions */}
      {msg.type === "bot" && (
        <div className="flex gap-3 mt-3 pt-3 border-t border-gray-100 justify-end">
          <button
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-100 transition-all duration-200 group"
            onClick={() => copyText(msg.text)}
          >
            <ClipboardDocumentIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span>Copy Answer</span>
          </button>

          <button
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-100 transition-all duration-200 group"
            onClick={() => copyText(JSON.stringify(msg))}
          >
            <CodeBracketIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span>Copy JSON</span>
          </button>
        </div>
      )}

      {/* Timestamp */}
      <div
        className={`text-xs mt-2 ${
          msg.type === "user" ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Input Section */}
      <div className="sticky bottom-0 bg-white">
        <InputArea message={message} setMessage={setMessage} handleSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatArea;
