import { Bell, Sun, Moon, Search, ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useChat } from "../../context/ChatContext";
export default function Topbar() {
  const { theme, toggle } = useTheme();
  const { notify, profile } = useChat();
  return (
    <header className="topbar">
      <div className="top-brand">
        <span className="brandmark">💬</span>
        <span>Apni-Baat</span>
      </div>
      <div className="global-search">
        <Search size={17} />
        <input
          placeholder="Search messages, people..."
          onChange={(e) =>
            e.target.value && notify(`Global search: ${e.target.value}`)
          }
        />
        <kbd>⌘ K</kbd>
      </div>
      <div className="top-actions">
        <button onClick={() => notify("You have 3 unread messages")}>
          <Bell />
          <i>3</i>
        </button>
        <button onClick={toggle}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
        <button className="profile-mini" onClick={() => notify("Profile menu")}>
          <img src={profile.avatar} alt="Profile" />
          <span>{profile.name}</span>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}
