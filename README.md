Research 
I conducted research on several leading AI platforms, including DeepSeek AI, Microsoft Copilot, ChatGPT, and Hugging Face AI. My focus was on analyzing their UI layouts, user experience flow, and design patterns.
•	From Microsoft Copilot, I found the UI design to be the most visually appealing and user-friendly. I adopted its right-side sign-in panel, where hovering over the sign-in/sign-up button reveals additional user account options and model-related links.
•	From ChatGPT, I drew inspiration for the search/prompt input section and the model selection dropdown, as they provide a clean and intuitive interaction flow. I also referenced ChatGPT’s response display structure, which presents JSON-like responses in a clear format.
•	DeepSeek AI’s UI shares similarities with ChatGPT, so I studied its layout for reinforcement of best practices.
•	For the sidebar design, I created a hybrid layout combining features from both ChatGPT and Copilot, including elements such as new chat history and a logo placement strategy.


### **WelcomeSection**

* A simple intro section with a logo ("DS") and text like “How can I help you today?”.
* Static content, no props or state.
* Purpose: visually greet the user before interaction starts.

---

### **SuggestedPrompts**

* Fetches **prompts** from `db.json` (inside `public`).
* Displays them in a grid; clicking a prompt sets it in the input box (`setMessage`).
* Data flow: JSON → state (`prompts`) → mapped UI → sends value back to parent via prop.

---

### **Sidebar**

* Main sidebar for desktop, collapsible between expanded and icon-only.
* Has static menu items (New Chat, Search, Library) and a **history list** (local state).
* History items include a 3-dot menu (share, rename, archive, delete).
* Data flow: `openSidebar` state is passed down as a prop from parent, toggled by `toggleSidebar`.

---

### **MobileSidebar**

* Same as Sidebar but optimized for mobile (uses `Drawer` from Material Tailwind).
* Displays menu and history with action buttons (share, rename, delete, etc.).
* Props: `mobileSidebar` (open/close state) and `toggleMobileSidebar`.

---

### **InputArea**

* Main text input where users type messages.
* Auto-expands textarea height.
* Has quick action menus (add file, add image, research, Google Docs, etc.).
* Includes microphone and send button.
* Data flow: `message` (value), `setMessage` (update), `handleSend` (send trigger).

---

### **Header**

* Top navigation bar.
* Left side: mobile sidebar toggle.
* Right side: model selector (GPT-4, GPT-3.5, Claude, etc.) and user menu (settings, theme, sign out, etc.).
* Props: `toggleMobileSidebar` (to open drawer on mobile).
* Manages its own state for **selected model** and **user menu open/close**.

---

### **ChatArea**

* Main chat window where messages appear.
* Displays `chatHistory` (array of user + bot messages).
* Uses `message`, `setMessage`, and `handleSend` passed from parent.
* Likely integrates **WelcomeSection** and **SuggestedPrompts** when history is empty.

---

### **ChatInterface**

* Parent component that brings everything together.
* Manages global states: `message`, `chatHistory`, `sidebar open/close`, etc.
* Passes props to children (`ChatArea`, `Sidebar`, `Header`, `InputArea`, etc.).
* Handles the overall data flow:

  * User types → `InputArea` updates `message`
  * User sends → `handleSend` updates `chatHistory`
  * Chat history → displayed in `ChatArea`
  * Sidebar/History → toggled by Header and Sidebar

---

👉 In short:

* **ChatInterface** = brain (manages state + props).
* **Header + Sidebar + MobileSidebar** = navigation and model/user options.
* **ChatArea** = shows conversation.
* **InputArea** = takes input, triggers send.
* **WelcomeSection + SuggestedPrompts** = guide user when no chat yet.

