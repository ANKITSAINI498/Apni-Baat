import {
  BellOff,
  Search,
  Trash2,
  ShieldBan,
  Flag,
  Pin,
  Star,
  FileText,
  Link as LinkIcon,
  X,
} from "lucide-react";
import Avatar from "../common/Avatar";
import { useChat } from "../../context/ChatContext";
export default function DetailsPanel() {
  const {
    selectedUser,
    selectedConv,
    setDetailsOpen,
    toggleConversation,
    archive,
    notify,
    messages,
  } = useChat();
  if (!selectedUser) return null;
  const msgs = messages[selectedConv?.id] || [];
  return (
    <aside className="details">
      <div className="details-head">
        <b>Chat details</b>
        <button onClick={() => setDetailsOpen(false)}>
          <X />
        </button>
      </div>
      <div className="profile-hero">
        <Avatar
          user={selectedUser}
          size="xl"
          online={selectedUser.status === "Online"}
        />
        <h2>{selectedUser.name}</h2>
        <span>{selectedUser.status}</span>
        <p>{selectedUser.about}</p>
      </div>
      <div className="detail-grid">
        <div>
          <strong>{msgs.length}</strong>
          <small>Messages</small>
        </div>
        <div>
          <strong>{msgs.filter((m) => m.starred).length}</strong>
          <small>Starred</small>
        </div>
        <div>
          <strong>{msgs.filter((m) => m.pinned).length}</strong>
          <small>Pinned</small>
        </div>
      </div>
      <section>
        <h4>Conversation</h4>
        <button onClick={() => toggleConversation("muted")}>
          <BellOff />{" "}
          {selectedConv?.muted ? "Unmute notifications" : "Mute notifications"}
        </button>
        <button onClick={() => toggleConversation("favorite")}>
          <Star />{" "}
          {selectedConv?.favorite ? "Remove favorite" : "Add to favorites"}
        </button>
        <button onClick={() => archive(selectedConv.id)}>
          <FileText />{" "}
          {selectedConv?.archived ? "Unarchive chat" : "Archive chat"}
        </button>
        <button onClick={() => notify("Search inside chat")}>
          <Search /> Search
        </button>
      </section>
      <section>
        <h4>Shared</h4>
        <div className="shared-links">
          <span>
            <Pin /> {msgs.filter((m) => m.pinned).length} pinned
          </span>
          <span>
            <Star /> {msgs.filter((m) => m.starred).length} starred
          </span>
          <span>
            <FileText /> Files
          </span>
          <span>
            <LinkIcon /> Links
          </span>
        </div>
      </section>
      <section>
        <button
          className="danger"
          onClick={() => notify("Chat cleared in demo mode")}
        >
          <Trash2 /> Clear chat
        </button>
        <button className="danger" onClick={() => notify("Block demo")}>
          <ShieldBan /> Block
        </button>
        <button className="danger" onClick={() => notify("Report demo")}>
          <Flag /> Report
        </button>
      </section>
    </aside>
  );
}
