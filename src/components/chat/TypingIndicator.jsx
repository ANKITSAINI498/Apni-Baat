import { motion } from "framer-motion";
export default function TypingIndicator({ name }) {
  return (
    <div className="typing">
      <span>{name} is typing</span>
      <i>
        <motion.b
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          •
        </motion.b>
        <motion.b
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }}
        >
          •
        </motion.b>
        <motion.b
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }}
        >
          •
        </motion.b>
      </i>
    </div>
  );
}
