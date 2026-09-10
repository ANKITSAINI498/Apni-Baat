import { useState } from "react";
import { Check, CheckCheck, Pin, Star } from "lucide-react";
import MessageActions from "./MessageActions";
import ReactionPicker from "./ReactionPicker";
import { linkify } from "../../utils/messageUtils.jsx";
import { useChat } from "../../context/ChatContext";
export default function MessageBubble({ message }) {
  const [reacting, setReacting] = useState(false);
  const {
    updateMessage,
    deleteMessage,
    toggleReaction,
    toggleStar,
    togglePin,
    notify,
  } = useChat();
  const act = (a) => {
    if (a === "react") setReacting((v) => !v);
    if (a === "copy") {
      navigator.clipboard?.writeText(message.text);
      notify("Message copied");
    }
    if (a === "edit") {
      const t = prompt("Edit message", message.text);
      if (t?.trim())
        updateMessage(message.id, { text: t.trim(), edited: true });
    }
    if (a === "delete") deleteMessage(message.id);
    if (a === "star") toggleStar(message.id);
    if (a === "pin") togglePin(message.id);
    if (a === "reply")
      window.dispatchEvent(
        new CustomEvent("baatchet:reply", { detail: message }),
      );
    if (a === "forward") notify("Forward demo: message ready to share");
  };
  return (
    <div
      id={`msg-${message.id}`}
      className={`message-row ${message.sender === "me" ? "mine" : "theirs"}`}
    >
      <div className={`bubble ${message.deleted ? "deleted" : ""}`}>
        {message.sender !== "me" && message.senderName && (
          <b className="sender-name">{message.senderName}</b>
        )}
        {message.replyTo && (
          <div className="quoted">↳ {message.replyTo.text}</div>
        )}
        <div className="bubble-text">
          {message.deleted ? "This message was deleted" : linkify(message.text)}
        </div>
        <div className="bubble-foot">
          {message.pinned && <Pin size={12} />}{" "}
          {message.starred && <Star size={12} />}
          <time>{message.time}</time>
          {message.edited && <small>Edited</small>}
          {message.sender === "me" &&
            (message.status === "read" ? (
              <CheckCheck size={15} />
            ) : (
              <Check size={15} />
            ))}
        </div>
        {message.reactions && (
          <div className="reactions">
            {Object.entries(message.reactions)
              .filter(([, n]) => n)
              .map(([e, n]) => (
                <button key={e} onClick={() => toggleReaction(message.id, e)}>
                  {e} {n}
                </button>
              ))}
          </div>
        )}
        <MessageActions message={message} onAction={act} />
        {reacting && (
          <ReactionPicker
            onPick={(e) => {
              toggleReaction(message.id, e);
              setReacting(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
