import { motion } from "framer-motion";

export default function ChatContainer(props) {
  return (
    <motion.div className="max-w-4xl mx-auto h-screen flex flex-col">
      {props.children}
    </motion.div>
  );
}
