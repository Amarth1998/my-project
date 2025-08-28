// import {
//     List,
//     ListItem,
//     ListItemPrefix,
//   } from "@material-tailwind/react";
//   import {
//     ChatBubbleLeftRightIcon,
//     MagnifyingGlassIcon,
//     BookOpenIcon,
//     XMarkIcon,
//   } from "@heroicons/react/24/outline";
  
//   const Sidebar = ({ openSidebar, toggleSidebar }) => {
//     return (
//       <div
//         className={`hidden md:flex flex-col bg-gray-100 border-r transition-all duration-300 
//           ${openSidebar ? "w-64" : "w-16"}`}
//       >
//         <div
//           className="flex items-center justify-between p-4 cursor-pointer"
//           onClick={toggleSidebar}
//         >
//           <span className="font-bold text-xl">⚡</span>
//           {openSidebar && <XMarkIcon className="w-6 h-6 text-gray-600" />}
//         </div>
  
//         <List>
//           <ListItem>
//             <ListItemPrefix>
//               <ChatBubbleLeftRightIcon className="w-5 h-5" />
//             </ListItemPrefix>
//             {openSidebar && "New Chat"}
//           </ListItem>
  
//           <ListItem>
//             <ListItemPrefix>
//               <MagnifyingGlassIcon className="w-5 h-5" />
//             </ListItemPrefix>
//             {openSidebar && "Search"}
//           </ListItem>
  
//           <ListItem>
//             <ListItemPrefix>
//               <BookOpenIcon className="w-5 h-5" />
//             </ListItemPrefix>
//             {openSidebar && "Library"}
//           </ListItem>
//         </List>
//       </div>
//     );
//   };
  
//   export default Sidebar;






// import {
//     List,
//     ListItem,
//     ListItemPrefix,
//     Typography,
//   } from "@material-tailwind/react";
//   import {
//     ChatBubbleLeftRightIcon,
//     MagnifyingGlassIcon,
//     BookOpenIcon,
//     ClockIcon,
//     XMarkIcon,
//   } from "@heroicons/react/24/outline";
//   import { useState } from "react";
  
//   const Sidebar = ({ openSidebar, toggleSidebar }) => {
//     // 🔹 Sidebar Items (dynamic)
//     const menuItems = [
//       { label: "New Chat", icon: ChatBubbleLeftRightIcon },
//       { label: "Search", icon: MagnifyingGlassIcon },
//       { label: "Library", icon: BookOpenIcon },
//     ];
  
//     // 🔹 History Data (can be from API/localStorage later)
//     const [history] = useState([
//       "AI Project Notes",
//       "Shopping List",
//       "React Sidebar Fix",
//       "Travel Plans ✈️",
//     ]);
  
//     return (
//       <div
//         className={`hidden md:flex flex-col bg-gray-100 border-r transition-all duration-300 
//           ${openSidebar ? "w-64" : "w-16"}`}
//       >
//         {/* Header */}
//         <div
//           className="flex items-center justify-between p-4 cursor-pointer"
//           onClick={toggleSidebar}
//         >
//           <span className="font-bold text-xl">⚡</span>
//           {openSidebar && <XMarkIcon className="w-6 h-6 text-gray-600" />}
//         </div>
  
//         {/* Menu */}
//         <List>
//           {menuItems.map((item, idx) => (
//             <div key={idx} className="relative group">
//               <ListItem>
//                 <ListItemPrefix>
//                   <item.icon className="w-5 h-5" />
//                 </ListItemPrefix>
//                 {openSidebar && item.label}
//               </ListItem>
  
//               {/* Tooltip on hover (when sidebar is collapsed) */}
//               {!openSidebar && (
//                 <div className="absolute left-14 top-1/2 -translate-y-1/2 
//                                 bg-black text-white text-xs px-2 py-1 rounded-md 
//                                 opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
//                   {item.label}
//                 </div>
//               )}
//             </div>
//           ))}
//         </List>
  
//         {/* Divider */}
//         <hr className="my-2 border-gray-300" />
  
//         {/* History Section */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="px-4 py-2 flex items-center gap-2 text-gray-600">
//             <ClockIcon className="w-4 h-4" />
//             {openSidebar && (
//               <Typography variant="small" className="font-medium">
//                 History
//               </Typography>
//             )}
//           </div>
  
//           <List>
//             {history.map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <ListItem className="text-sm text-gray-700 truncate">
//                   <ListItemPrefix>
//                     <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-500" />
//                   </ListItemPrefix>
//                   {openSidebar && item}
//                 </ListItem>
  
//                 {/* Tooltip for history items */}
//                 {!openSidebar && (
//                   <div className="absolute left-14 top-1/2 -translate-y-1/2 
//                                   bg-black text-white text-xs px-2 py-1 rounded-md 
//                                   opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50">
//                     {item}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </List>
//         </div>
//       </div>
//     );
//   };
  
//   export default Sidebar;
  


// import {
//     List,
//     ListItem,
//     ListItemPrefix,
//     Typography,
//   } from "@material-tailwind/react";
//   import {
//     ChatBubbleLeftRightIcon,
//     MagnifyingGlassIcon,
//     BookOpenIcon,
//     ClockIcon,
//     XMarkIcon,
//   } from "@heroicons/react/24/outline";
//   import { useState } from "react";
  
//   const Sidebar = ({ openSidebar, toggleSidebar }) => {
//     // 🔹 Sidebar Items (dynamic)
//     const menuItems = [
//       { label: "New Chat", icon: ChatBubbleLeftRightIcon },
//       { label: "Search", icon: MagnifyingGlassIcon },
//       { label: "Library", icon: BookOpenIcon },
//     ];
  
//     // 🔹 History Data (can be from API/localStorage later)
//     const [history] = useState([
//       "AI Project Notes",
//       "Shopping List",
//       "React Sidebar Fix",
//       "Travel Plans ✈️",
//     ]);
  
//     return (
//       <div
//         className={`hidden md:flex flex-col bg-gray-100 border-r transition-all duration-300 
//           ${openSidebar ? "w-64" : "w-16"}`}
//       >
//         {/* Header */}
//         <div
//           className="flex items-center justify-between p-4 cursor-pointer"
//           onClick={toggleSidebar}
//         >
//           <span className="font-bold text-xl">⚡</span>
//           {openSidebar && <XMarkIcon className="w-6 h-6 text-gray-600" />}
//         </div>
  
//         {/* Menu */}
//         <List className="p-2">
//           {menuItems.map((item, idx) => (
//             <div key={idx} className="relative group">
//               <ListItem 
//                 className={`p-3 mb-1 transition-all duration-200 ${
//                   openSidebar ? "w-full" : "w-10 h-10 justify-center"
//                 }`}
//               >
//                 <ListItemPrefix className={`${openSidebar ? "mr-3" : "m-0"}`}>
//                   <item.icon className="w-5 h-5" />
//                 </ListItemPrefix>
//                 {openSidebar && (
//                   <span className="truncate">{item.label}</span>
//                 )}
//               </ListItem>
  
//               {/* Tooltip on hover (when sidebar is collapsed) */}
//               {!openSidebar && (
//                 <div className="absolute left-12 top-1/2 -translate-y-1/2 
//                                 bg-black text-white text-xs px-2 py-1 rounded-md 
//                                 opacity-0 group-hover:opacity-100 transition-all duration-200 
//                                 whitespace-nowrap z-50 pointer-events-none">
//                   {item.label}
//                 </div>
//               )}
//             </div>
//           ))}
//         </List>
  
//         {/* Divider */}
//         <hr className="my-2 border-gray-300 mx-2" />
  
//         {/* History Section */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="px-4 py-2 flex items-center gap-2 text-gray-600">
//             <ClockIcon className="w-4 h-4" />
//             {openSidebar && (
//               <Typography variant="small" className="font-medium">
//                 History
//               </Typography>
//             )}
//           </div>
  
//           <List className="p-2">
//             {history.map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <ListItem 
//                   className={`p-3 mb-1 text-sm text-gray-700 transition-all duration-200 ${
//                     openSidebar ? "w-full" : "w-10 h-10 justify-center"
//                   }`}
//                 >
//                   <ListItemPrefix className={`${openSidebar ? "mr-3" : "m-0"}`}>
//                     <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-500" />
//                   </ListItemPrefix>
//                   {openSidebar && (
//                     <span className="truncate">{item}</span>
//                   )}
//                 </ListItem>
  
//                 {/* Tooltip for history items */}
//                 {!openSidebar && (
//                   <div className="absolute left-12 top-1/2 -translate-y-1/2 
//                                   bg-black text-white text-xs px-2 py-1 rounded-md 
//                                   opacity-0 group-hover:opacity-100 transition-all duration-200 
//                                   whitespace-nowrap z-50 pointer-events-none max-w-xs">
//                     {item}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </List>
//         </div>
//       </div>
//     );
//   };
  
//   export default Sidebar;
// import {
//     List,
//     ListItem,
//     ListItemPrefix,
//     Typography,
//   } from "@material-tailwind/react";
//   import {
//     ChatBubbleLeftRightIcon,
//     MagnifyingGlassIcon,
//     BookOpenIcon,
//     ClockIcon,
//     XMarkIcon,
//   } from "@heroicons/react/24/outline";
//   import { useState } from "react";
  
//   const Sidebar = ({ openSidebar, toggleSidebar }) => {
//     // 🔹 Sidebar Items (dynamic)
//     const menuItems = [
//       { label: "New Chat", icon: ChatBubbleLeftRightIcon },
//       { label: "Search", icon: MagnifyingGlassIcon },
//       { label: "Library", icon: BookOpenIcon },
//     ];
  
//     // 🔹 History Data (can be from API/localStorage later)
//     const [history] = useState([
//       "AI Project Notes",
//       "Shopping List",
//       "React Sidebar Fix",
//       "Travel Plans ✈️",
//     ]);
  
//     return (
//       <div
//         className={`hidden md:flex flex-col bg-gray-100 border-r transition-all duration-300 
//           ${openSidebar ? "w-64" : "w-16"}`}
//       >
//         {/* Header */}
//         <div
//           className="flex items-center justify-between p-4 cursor-pointer"
//           onClick={toggleSidebar}
//         >
//           <span className="font-bold text-xl">⚡</span>
//           {openSidebar && <XMarkIcon className="w-6 h-6 text-gray-600" />}
//         </div>
  
//         {/* Menu */}
//         <List className="p-2">
//           {menuItems.map((item, idx) => (
//             <div key={idx} className="relative group">
//               <ListItem 
//                 className={`p-3 mb-1 transition-all duration-200 ${
//                   openSidebar ? "w-full" : "w-10 h-10 justify-center"
//                 }`}
//               >
//                 <ListItemPrefix className={`${openSidebar ? "mr-3" : "m-0"}`}>
//                   <item.icon className="w-5 h-5" />
//                 </ListItemPrefix>
//                 {openSidebar && (
//                   <span className="truncate">{item.label}</span>
//                 )}
//               </ListItem>
  
//               {/* Tooltip on hover (when sidebar is collapsed) */}
//               {!openSidebar && (
//                 <div className="absolute left-12 top-1/2 -translate-y-1/2 
//                                 bg-black text-white text-xs px-2 py-1 rounded-md 
//                                 opacity-0 group-hover:opacity-100 transition-all duration-200 
//                                 whitespace-nowrap z-50 pointer-events-none">
//                   {item.label}
//                 </div>
//               )}
//             </div>
//           ))}
//         </List>
  
//         {/* Only show history section when sidebar is open */}
//         {openSidebar && (
//           <>
//             {/* Divider */}
//             <hr className="my-2 border-gray-300 mx-2" />
  
//             {/* History Section */}
//             <div className="flex-1 overflow-y-auto">
//               <div className="px-4 py-2 flex items-center gap-2 text-gray-600">
//                 <ClockIcon className="w-4 h-4" />
//                 <Typography variant="small" className="font-medium">
//                   History
//                 </Typography>
//               </div>
  
//               <List className="p-2">
//                 {history.map((item, idx) => (
//                   <div key={idx} className="relative group">
//                     <ListItem 
//                       className="p-3 mb-1 text-sm text-gray-700 w-full"
//                     >
//                       <ListItemPrefix className="mr-3">
//                         <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-500" />
//                       </ListItemPrefix>
//                       <span className="truncate">{item}</span>
//                     </ListItem>
//                   </div>
//                 ))}
//               </List>
//             </div>
//           </>
//         )}
//       </div>
//     );
//   };
  
//   export default Sidebar;




import {
    List,
    ListItem,
    ListItemPrefix,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
  } from "@material-tailwind/react";
  import {
    ChatBubbleLeftRightIcon,
    MagnifyingGlassIcon,
    BookOpenIcon,
    ClockIcon,
    XMarkIcon,
    TrashIcon,
    ShareIcon,
    PencilIcon,
    ArchiveBoxIcon,
    EllipsisVerticalIcon,
  } from "@heroicons/react/24/outline";
  import { useState } from "react";
  
  const Sidebar = ({ openSidebar, toggleSidebar }) => {
    // 🔹 Sidebar Items (dynamic)
    const menuItems = [
      { label: "New Chat", icon: ChatBubbleLeftRightIcon },
      { label: "Search", icon: MagnifyingGlassIcon },
      { label: "Library", icon: BookOpenIcon },
    ];
  
    // 🔹 History Data (can be from API/localStorage later)
    const [history] = useState([
      "AI Project Notes",
      "Shopping List",
      "React Sidebar Fix",
      "Travel Plans ✈️",
    ]);
  
    return (
      <div
        className={`hidden md:flex flex-col bg-gray-100 border-r transition-all duration-300 
          ${openSidebar ? "w-64" : "w-16"}`}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <span className="font-bold text-xl">⚡</span>
          {openSidebar && <XMarkIcon className="w-6 h-6 text-gray-600" />}
        </div>
  
        {/* Menu */}
        <List className="p-2">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <ListItem 
                className={`p-3 mb-1 transition-all duration-200 ${
                  openSidebar ? "w-full" : "w-10 h-10 justify-center"
                }`}
              >
                <ListItemPrefix className={`${openSidebar ? "mr-3" : "m-0"}`}>
                  <item.icon className="w-5 h-5" />
                </ListItemPrefix>
                {openSidebar && (
                  <span className="truncate flex-1">{item.label}</span>
                )}
              </ListItem>
  
              {/* Tooltip on hover (when sidebar is collapsed) */}
              {!openSidebar && (
                <div className="absolute left-12 top-1/2 -translate-y-1/2 
                                bg-black text-white text-xs px-2 py-1 rounded-md 
                                opacity-0 group-hover:opacity-100 transition-all duration-200 
                                whitespace-nowrap z-50 pointer-events-none">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </List>
  
        {/* Only show history section when sidebar is open */}
        {openSidebar && (
          <>
            {/* Divider */}
            <hr className="my-2 border-gray-300 mx-2" />
  
            {/* History Section */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-2 flex items-center gap-2 text-gray-600">
                <ClockIcon className="w-4 h-4" />
                <Typography variant="small" className="font-medium">
                  History
                </Typography>
              </div>
  
              <List className="p-2">
                {history.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <ListItem 
                      className="p-3 mb-1 text-sm text-gray-700 w-full group hover:bg-gray-200"
                    >
                      <ListItemPrefix className="mr-3">
                        <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-500" />
                      </ListItemPrefix>
                      <span className="truncate flex-1">{item}</span>
                      
                      {/* Three dot menu */}
                      <Menu placement="left-start">
                        <MenuHandler>
                          <IconButton
                            variant="text"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"
                          >
                            <EllipsisVerticalIcon className="w-4 h-4" />
                          </IconButton>
                        </MenuHandler>
                        <MenuList className="p-2 min-w-[120px]">
                          <MenuItem className="flex items-center gap-2 p-2">
                            <ShareIcon className="w-4 h-4" />
                            <span className="text-xs">Share</span>
                          </MenuItem>
                          <MenuItem className="flex items-center gap-2 p-2">
                            <PencilIcon className="w-4 h-4" />
                            <span className="text-xs">Rename</span>
                          </MenuItem>
                          <MenuItem className="flex items-center gap-2 p-2">
                            <ArchiveBoxIcon className="w-4 h-4" />
                            <span className="text-xs">Archive</span>
                          </MenuItem>
                          <hr className="my-1" />
                          <MenuItem className="flex items-center gap-2 p-2 text-red-500">
                            <TrashIcon className="w-4 h-4" />
                            <span className="text-xs">Delete</span>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </ListItem>
                  </div>
                ))}
              </List>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default Sidebar;