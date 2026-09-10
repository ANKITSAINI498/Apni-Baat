import Avatar from "../common/Avatar";
import { Pin, VolumeX, CheckCheck } from "lucide-react";
import { useChat } from "../../context/ChatContext";
export default function ConversationItem({ conv, user }) {
  const { messages, selected, select } = useChat();
  const last = messages[conv.id]?.at(-1);
  return (
    <button
      className={`conversation ${selected === conv.id ? "active" : ""}`}
      onClick={() => select(conv.id)}
    >
      <Avatar user={user} online={user.status === "Online"} />
      <span className="conv-main">
        <b>{user.name}</b>
        <small>
          {user.isGroup && last?.senderName ? (
            <strong>{last.senderName}: </strong>
          ) : (
            ""
          )}
          {last?.text || "Start a conversation"}
        </small>
      </span>
      <span className="conv-meta">
        <time>{last?.time || ""}</time>
        {conv.pinned && <Pin size={12} />} {conv.muted && <VolumeX size={12} />}{" "}
        {conv.unread > 0 && <em>{conv.unread}</em>}{" "}
        {last?.sender === "me" && <CheckCheck size={13} />}
      </span>
    </button>
  );
}
