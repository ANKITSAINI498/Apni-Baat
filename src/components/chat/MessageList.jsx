import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useChat } from "../../context/ChatContext";
export default function MessageList() {
  const { messages, selected, selectedUser, typing } = useChat();
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selected, typing]);
  const list = messages[selected] || [];
  return (
    <div className="messages">
      <div className="day-divider">
        <span>Today</span>
      </div>
      {list.map((m, i) => (
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, delay: Math.min(i * 0.015, 0.15) }}
        >
          <MessageBubble message={m} />
        </motion.div>
      ))}
      {typing && <TypingIndicator name={selectedUser?.name || "Contact"} />}
      <div ref={ref} />
    </div>
  );
}
