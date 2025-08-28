import { useState, useRef, useEffect } from "react";
import { 
  Typography, 
  IconButton, 
  Menu, 
  MenuHandler, 
  MenuList, 
  MenuItem 
} from "@material-tailwind/react";
import {
  PlusIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  DocumentArrowUpIcon,
  PhotoIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalCircleIcon,
  DocumentTextIcon,
  CloudIcon
} from "@heroicons/react/24/outline";

const InputArea = ({ message, setMessage, handleSend }) => {
  const textareaRef = useRef(null);

  const [menuItems] = useState([
    { id: 1, label: "Add File", icon: <DocumentArrowUpIcon className="h-5 w-5 mr-2 text-blue-500" /> },
    { id: 2, label: "Add Image", icon: <PhotoIcon className="h-5 w-5 mr-2 text-green-500" /> },
    { id: 3, label: "Research", icon: <MagnifyingGlassIcon className="h-5 w-5 mr-2 text-purple-500" /> },
  ]);

  const [moreItems] = useState([
    { id: 5, label: "Google Docs", icon: <DocumentTextIcon className="h-5 w-5 mr-2 text-indigo-500" /> },
    { id: 6, label: "Google Drive", icon: <CloudIcon className="h-5 w-5 mr-2 text-teal-500" /> },
  ]);

  // Auto-adjust textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [message]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-2 sm:px-4 fixed bottom-0 left-0 right-0 bg-white py-3 border-t md:relative md:border-t-0 md:py-0 md:pb-4">
      <div className="bg-white border border-gray-300 rounded-3xl p-3 shadow-sm">
        {/* Input area with dynamic height */}
        <div className="flex items-start gap-2 mb-3">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Send a message..."
            className="w-full px-4 py-3 text-sm sm:text-base resize-none border-none outline-none focus:outline-none focus:ring-0 bg-transparent"
            rows={1}
            style={{
              minHeight: "48px",
              maxHeight: "200px",
              overflowY: "auto",
            }}
          />
        </div>

        {/* Bottom controls row */}
        <div className="flex items-center justify-between">
          {/* Left side menus */}
          <div className="flex items-center gap-1">
            {/* Plus Menu */}
            <Menu placement="top-start">
              <MenuHandler>
                <IconButton variant="text" size="sm" className="rounded-full bg-white shadow-sm hover:scale-105 transition-transform">
                  <PlusIcon className="h-5 w-5 text-gray-600" />
                </IconButton>
              </MenuHandler>
              <MenuList className="p-2 min-w-[200px]">
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    className="flex items-center hover:bg-blue-50 p-2 rounded transition-all duration-200"
                  >
                    {item.icon}
                    <Typography variant="small" className="font-normal">
                      {item.label}
                    </Typography>
                  </MenuItem>
                ))}

                {/* More Menu inside */}
                <Menu placement="right-start">
                  <MenuHandler>
                    <MenuItem className="flex items-center hover:bg-blue-50 p-2 rounded transition-all duration-200">
                      <EllipsisHorizontalCircleIcon className="h-5 w-5 mr-2 text-gray-700" />
                      <Typography variant="small">More</Typography>
                    </MenuItem>
                  </MenuHandler>
                  <MenuList className="p-2 min-w-[180px]">
                    {moreItems.map((item) => (
                      <MenuItem
                        key={item.id}
                        className="flex items-center hover:bg-green-50 p-2 rounded transition-all duration-200"
                      >
                        {item.icon}
                        <Typography variant="small">{item.label}</Typography>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              </MenuList>
            </Menu>

 {/* Web Search */}
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm hover:bg-gray-100 transition">
  <MagnifyingGlassIcon className="h-5 w-5  text-blue-600" />
  <span className="  text-[13px]   font-medium text-gray-700 ">Web Search</span>
</div>

{/* Deep Think */}
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm hover:bg-gray-100 transition">
  <EllipsisHorizontalCircleIcon className="h-5 w-5 text-purple-600" />
  <span className="text-[13px] font-medium text-gray-700">Deep Think</span>
</div>


          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            {/* New Microphone (circle with better look) */}
            <IconButton variant="text" size="sm" className="rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100">
              <MicrophoneIcon className="h-5 w-5 text-red-500" />
            </IconButton>

            {/* Send Button */}
            <IconButton
              variant="filled"
              color="blue"
              size="sm"
              className="rounded-full hover:scale-110 transition-transform"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              <PaperAirplaneIcon className="h-5 w-5 text-white transform rotate-45" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputArea;
