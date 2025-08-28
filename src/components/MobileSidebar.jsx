import {
    Drawer,
    List,
    ListItem,
    ListItemPrefix,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  import {
    XMarkIcon,
    ChatBubbleLeftRightIcon,
    MagnifyingGlassIcon,
    BookOpenIcon,
    ClockIcon,
    TrashIcon,
    ShareIcon,
    PencilIcon,
    ArchiveBoxIcon,
  } from "@heroicons/react/24/outline";
  
  const MobileSidebar = ({ mobileSidebar, toggleMobileSidebar }) => {
    const history = [
      "AI Project Notes",
      "Shopping List",
      "React Sidebar Fix",
      "Travel Plans ✈️",
    ];
  
    return (
      <Drawer open={mobileSidebar} onClose={toggleMobileSidebar} size={350} className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-xl">⚡</span>
          <IconButton variant="text" onClick={toggleMobileSidebar}>
            <XMarkIcon className="h-6 w-6" />
          </IconButton>
        </div>
  
        {/* Main Menu */}
        <List>
          <ListItem>
            <ListItemPrefix>
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
            </ListItemPrefix>
            New Chat
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <MagnifyingGlassIcon className="w-5 h-5" />
            </ListItemPrefix>
            Search
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <BookOpenIcon className="w-5 h-5" />
            </ListItemPrefix>
            Library
          </ListItem>
        </List>
  
        <hr className="my-4 border-gray-300" />
  
        {/* History */}
        <div className="mb-4">
          <div className="flex items-center justify-between px-3 mb-3">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-gray-600" />
              <Typography variant="h6" className="font-semibold">
                History
              </Typography>
            </div>
            <IconButton
              variant="text"
              size="sm"
              className="text-gray-600 hover:text-red-500"
              onClick={() => alert("Clear all history")}
            >
              <TrashIcon className="w-4 h-4" />
            </IconButton>
          </div>
  
          <List>
            {history.map((item, idx) => (
              <ListItem key={idx} className="pr-2 flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <ListItemPrefix>
                    <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-500" />
                  </ListItemPrefix>
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      className="font-medium text-gray-800 truncate"
                    >
                      {item}
                    </Typography>
                    <Typography variant="small" className="text-gray-500 text-xs">
                      {idx === 0
                        ? "2 hours ago"
                        : idx === 1
                        ? "1 day ago"
                        : idx === 2
                        ? "3 days ago"
                        : "1 week ago"}
                    </Typography>
                  </div>
                </div>
  
                {/* Action icons */}
                <div className="flex items-center gap-1">
                  <IconButton
                    variant="text"
                    size="sm"
                    className="text-gray-500 hover:text-blue-500"
                    onClick={() => alert("Share clicked")}
                  >
                    <ShareIcon className="w-4 h-4" />
                  </IconButton>
                  <IconButton
                    variant="text"
                    size="sm"
                    className="text-gray-500 hover:text-green-500"
                    onClick={() => alert("Rename clicked")}
                  >
                    <PencilIcon className="w-4 h-4" />
                  </IconButton>
                  <IconButton
                    variant="text"
                    size="sm"
                    className="text-gray-500 hover:text-purple-500"
                    onClick={() => alert("Archive clicked")}
                  >
                    <ArchiveBoxIcon className="w-4 h-4" />
                  </IconButton>
                  <IconButton
                    variant="text"
                    size="sm"
                    className="text-gray-500 hover:text-red-500"
                    onClick={() => alert("Delete clicked")}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </IconButton>
                </div>
              </ListItem>
            ))}
          </List>
        </div>
  
        <div className="mt-auto p-3 bg-gray-50 rounded-lg text-center text-gray-600">
          {history.length} recent conversations
        </div>
      </Drawer>
    );
  };
  
  export default MobileSidebar;
  