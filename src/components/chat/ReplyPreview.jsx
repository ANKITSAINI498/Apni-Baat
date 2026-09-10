export default function ReplyPreview({ message, onCancel }) {
  return (
    <div className="reply-preview">
      <span>
        <b>Replying to {message?.sender === "me" ? "You" : "message"}</b>
        <small>{message?.text}</small>
      </span>
      <button onClick={onCancel}>×</button>
    </div>
  );
}
