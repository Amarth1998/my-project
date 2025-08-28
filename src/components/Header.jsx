import { useState } from "react";
import {
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  MoonIcon,
  SunIcon,
  LanguageIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Header = ({ toggleMobileSidebar }) => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [openModelMenu, setOpenModelMenu] = useState(false);
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // 🔹 Models Array
  const modelOptions = [
    { value: "gpt-4", label: "GPT-4 Turbo", version: "Latest" },
    { value: "gpt-4o", label: "GPT-4 Omni", version: "Multimodal" },
    { value: "gpt-3.5", label: "GPT-3.5 Turbo", version: "Fast" },
    { value: "claude-2", label: "Claude 2", version: "Anthropic" },
    { value: "llama-2", label: "Llama 2", version: "Meta" },
  ];

  // 🔹 User Menu Array
  const userMenuItems = [
    { id: 1, label: "Settings", icon: <Cog6ToothIcon className="h-5 w-5 text-gray-600" />, link: "/settings" },
    { id: 2, label: "Theme: Dark", icon: <MoonIcon className="h-5 w-5 text-gray-600" />, link: "#" },
    { id: 3, label: "Language: English", icon: <LanguageIcon className="h-5 w-5 text-gray-600" />, link: "#" },
    { divider: true },
    { id: 4, label: "Help & Support", icon: <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600" />, link: "/help" },
    { id: 5, label: "Privacy Policy", icon: <ShieldCheckIcon className="h-5 w-5 text-gray-600" />, link: "/privacy" },
    { id: 6, label: "Terms of Service", icon: <DocumentTextIcon className="h-5 w-5 text-gray-600" />, link: "/terms" },
    { divider: true },
    { id: 7, label: "Sign Out", icon: <ArrowRightOnRectangleIcon className="h-5 w-5" />, link: "/logout", danger: true },
  ];

  const handleAvatarError = () => {
    setAvatarError(true);
    setAvatarLoaded(false);
  };

  const handleAvatarLoad = () => {
    setAvatarLoaded(true);
    setAvatarError(false);
  };

  return (
    <header className="flex items-center justify-between py-2 px-4 border-b bg-transparent    ">
      {/* Left Side - Mobile Menu */}
      <div className="md:hidden">
        <IconButton variant="text" onClick={toggleMobileSidebar} className="rounded-full">
          <Bars3Icon className="h-6 w-6" />
        </IconButton>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Right Side - Model Selector + User Menu */}
      <div className="flex items-center gap-4">
        {/* 🔹 Model Selector Dropdown */}
        {/* <Menu open={openModelMenu} handler={setOpenModelMenu} placement="bottom-end">
          <MenuHandler>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-200 group">
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-blue-900">
                  {modelOptions.find((m) => m.value === selectedModel)?.label}
                </span>
                <span className="text-xs text-blue-600">
                  {modelOptions.find((m) => m.value === selectedModel)?.version}
                </span>
              </div>
              <ChevronDownIcon
                className={`h-4 w-4 text-blue-700 transition-transform duration-200 ${
                  openModelMenu ? "rotate-180" : ""
                }`}
              />
            </button>
          </MenuHandler>
          <MenuList className="p-2 min-w-[200px] max-h-60 overflow-y-auto">
            {modelOptions.map((model) => (
              <MenuItem
                key={model.value}
                onClick={() => setSelectedModel(model.value)}
                className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 ${
                  selectedModel === model.value
                    ? "bg-blue-50 text-blue-900"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{model.label}</span>
                  <span className="text-xs text-gray-600">{model.version}</span>
                </div>
                {selectedModel === model.value && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Menu> */}


<Menu open={openModelMenu} handler={setOpenModelMenu} placement="bottom-end">
  <MenuHandler>
    <button className="flex items-center gap-2 px-6 py-1 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group border border-blue-100 shadow-sm">
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold text-blue-900">
          {modelOptions.find((m) => m.value === selectedModel)?.label}
        </span>
        <span className="text-xs text-blue-600  px-2 py-0.5 rounded-full mt-1">
          {modelOptions.find((m) => m.value === selectedModel)?.version}
        </span>
      </div>
      <ChevronDownIcon
        className={`h-4 w-4 text-blue-700 transition-transform duration-300 ${
          openModelMenu ? "rotate-180 transform-gpu" : ""
        }`}
      />
    </button>
  </MenuHandler>
  <MenuList className="p-3 min-w-[240px] border border-gray-200 shadow-xl rounded-xl bg-white backdrop-blur-sm bg-opacity-95">
    <div className="max-h-72 overflow-hidden hover:overflow-y-auto scrollbar-hide">
      {modelOptions.map((model) => (
        <MenuItem
          key={model.value}
          onClick={() => setSelectedModel(model.value)}
          className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 transform-gpu hover:scale-[1.02] ${
            selectedModel === model.value
              ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-sm"
              : "hover:bg-gray-50 border border-transparent"
          }`}
        >
          <div className="flex items-center gap-3 flex-1">
            <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
              selectedModel === model.value ? "bg-blue-500" : "bg-gray-300"
            }`}></div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="font-semibold text-gray-900 text-sm truncate">
                {model.label}
              </span>
              <span className="text-xs text-gray-500 mt-0.5">
                {model.version}
              </span>
            </div>
          </div>
          {selectedModel === model.value && (
            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 ml-2"></div>
          )}
        </MenuItem>
      ))}
    </div>
    
    {/* Advanced options section */}
    <div className="mt-3 pt-3 border-t border-gray-100">
      <MenuItem className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-300">
        <Cog6ToothIcon className="h-4 w-4 text-gray-600 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-700">Model Settings</span>
      </MenuItem>
    </div>
  </MenuList>
</Menu>

        {/* 🔹 User Avatar Menu */}
        <Menu open={openUserMenu} handler={setOpenUserMenu} placement="bottom-end">
          <MenuHandler>
            <div className="relative">
              {(!avatarLoaded || avatarError) && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer">
                  <UserCircleIcon className="h-6 w-6 text-white" />
                </div>
              )}
              <Avatar
                src="https://via.placeholder.com/40"
                alt="profile"
                size="sm"
                className={`cursor-pointer transition-all duration-300 ${
                  !avatarLoaded || avatarError ? "hidden" : "opacity-100"
                }`}
                onLoad={handleAvatarLoad}
                onError={handleAvatarError}
              />
            </div>
          </MenuHandler>
          <MenuList className="p-3 min-w-[220px] shadow-xl border border-gray-200">
            {/* User info */}
            <div className="flex items-center gap-3 p-2 mb-2 rounded-lg bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <UserCircleIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <Typography variant="small" className="font-semibold">
                  John Doe
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  john@example.com
                </Typography>
              </div>
            </div>

            <hr className="my-2 border-gray-200" />

            {/* Menu Items from Array */}
            {userMenuItems.map((item, idx) =>
              item.divider ? (
                <hr key={`divider-${idx}`} className="my-2 border-gray-200" />
              ) : (
                <MenuItem
                  key={item.id}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 ${
                    item.danger
                      ? "hover:bg-red-50 text-red-600"
                      : "hover:bg-blue-50"
                  }`}
                  onClick={() => (window.location.href = item.link)}
                >
                  {item.icon}
                  <Typography variant="small">{item.label}</Typography>
                </MenuItem>
              )
            )}
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
