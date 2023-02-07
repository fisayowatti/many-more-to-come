import { motion } from "framer-motion";

export default function ChatBubble({ message }) {
  return (
    <motion.div
      className={`relative px-4 py-4 mt-5 max-w-lg rounded-b-lg ${
        !message.sender
          ? "bg-white rounded-r-lg self-start after:content-[' '] after:absolute after:w-0 after:h-0 after:-left-5 after:right-auto after:top-0 after:bottom-auto after:border-22 after:border-t-white after:border-r-transparent after:border-b-transparent after:border-l-transparent"
          : "bg-red-300 rounded-l-lg self-end after:absolute after:w-0 after:h-0 after:-right-5 after:left-auto after:top-0 after:bottom-auto after:border-22 after:border-t-red-300 after:border-r-transparent after:border-b-transparent after:border-l-transparent"
      }`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: !message.sender ? 1.5 : 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      exit={{
        x: !message.sender ? -400 : 400,
        transition: { duration: 0.8, delay: 1.5 },
      }}
    >
      <motion.p className="text-base">{message.msg}</motion.p>
    </motion.div>
  );
}
