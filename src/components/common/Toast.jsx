import { AnimatePresence, motion } from "framer-motion";
import { useChat } from "../../context/ChatContext";
export default function Toast() {
  const { toast } = useChat();
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="toastx"
        >
          ● {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
