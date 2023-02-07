import ChatBubble from "./ChatBubble";
import { motion } from "framer-motion";

export default function ChatBody({ messages }) {
  console.log(messages);
  return (
    <motion.div className="h-full flex flex-col items-start overflow-x-clip overflow-y-auto px-5 pb-10">
      {messages.map((message, index) => (
        <ChatBubble key={`${message.msg}${index}`} message={message} />
      ))}
    </motion.div>
  );
}
