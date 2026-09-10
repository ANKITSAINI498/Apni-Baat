import { useEffect, useRef, useState } from "react";
import {
  Paperclip,
  Smile,
  Mic,
  Send,
  Image as ImageIcon,
  X,
} from "lucide-react";
import EmojiPicker from "./EmojiPicker";
import ReplyPreview from "./ReplyPreview";
import { useChat } from "../../context/ChatContext";
export default function MessageComposer() {
  const { send, notify } = useChat();
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState(false);
  const [reply, setReply] = useState(null);
  const fileRef = useRef();
  useEffect(() => {
    const f = (e) => setReply(e.detail);
    window.addEventListener("baatchet:reply", f);
    return () => window.removeEventListener("baatchet:reply", f);
  }, []);
  const submit = () => {
    if (!text.trim()) return;
    send(text, { replyTo: reply });
    setText("");
    setReply(null);
    setEmoji(false);
  };
  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") submit();
  };
  const attach = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () =>
        send(`📷 ${f.name}`, {
          type: "image",
          meta: { name: f.name, url: reader.result },
        });
      reader.readAsDataURL(f);
    } else
      send(`📄 ${f.name} (${(f.size / 1024 / 1024).toFixed(2)} MB)`, {
        type: "file",
        meta: { name: f.name, size: f.size },
      });
    notify(`Selected ${f.name}`);
    e.target.value = "";
  };
  return (
    <div className="composer-wrap">
      {reply && (
        <ReplyPreview message={reply} onCancel={() => setReply(null)} />
      )}
      <div className="quick-replies">
        {[
          "How are you?",
          "Tell me a joke 😂",
          "Motivate me 💪",
          "Good morning ☀️",
        ].map((q) => (
          <button
            key={q}
            onClick={() => {
              send(q);
              setText("");
            }}
          >
            {q}
          </button>
        ))}
      </div>
      <div className="composer">
        <button onClick={() => setEmoji((v) => !v)} aria-label="Emoji">
          <Smile />
        </button>
        <button
          onClick={() => fileRef.current?.click()}
          aria-label="Attachment"
        >
          <Paperclip />
        </button>
        <input ref={fileRef} type="file" hidden onChange={attach} />
        <button onClick={() => fileRef.current?.click()} aria-label="Image">
          <ImageIcon />
        </button>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKey}
          placeholder="Type a message..."
          rows="1"
        />
        <button
          className="send"
          disabled={!text.trim()}
          onClick={submit}
          aria-label="Send"
        >
          {text.trim() ? <Send /> : <Mic />}
        </button>
        {emoji && <EmojiPicker onPick={(e) => setText((t) => t + e)} />}
      </div>
    </div>
  );
}
