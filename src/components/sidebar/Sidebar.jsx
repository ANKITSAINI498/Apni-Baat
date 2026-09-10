import { MessageCircle, Plus, MoreVertical } from "lucide-react";
import ChatSearch from "./ChatSearch";
import ChatFilters from "./ChatFilters";
import ConversationList from "./ConversationList";
import { useChat } from "../../context/ChatContext";
export default function Sidebar() {
  const { notify } = useChat();
  return (
    <aside className="sidebar">
      <div className="side-head">
        <div className="brand">
          <span className="brandmark">
            <MessageCircle />
          </span>
          <span>
            <b>BaatCheet</b>
            <small>Connect. Chat. Share. Repeat.</small>
          </span>
        </div>
        <div>
          <button
            className="round"
            onClick={() =>
              notify("New chat demo — choose a conversation from the list")
            }
            aria-label="New chat"
          >
            <Plus />
          </button>
          <button
            className="round"
            onClick={() => notify("More conversation options")}
            aria-label="More"
          >
            <MoreVertical />
          </button>
        </div>
      </div>
      <ChatSearch />
      <ChatFilters />
      <ConversationList />
    </aside>
  );
}
