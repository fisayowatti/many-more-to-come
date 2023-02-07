import { motion } from "framer-motion";

export default function ChatFooter({
  setMessages,
  setReply,
  setTypedMsg,
  typedMsg,
  messages,
}) {
  const submitReply = (e) => {
    console.log(e.key, typedMsg);
    if (e.key === "Enter") {
      setReply(typedMsg);
      setMessages([
        ...messages,
        {
          msg: typedMsg,
          sender: 1,
        },
      ]);
      setTypedMsg("");
    }
  };
  return (
    <motion.div
      className="flex items-center w-full h-20 bg-red-200 px-4"
      exit={{ y: 100, opacity: 0 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      {/* <div> */}
      <motion.input
        placeholder="Type a message"
        className="font-inter text-xl text-black px-4 py-2.5 w-full rounded"
        value={typedMsg}
        onKeyUp={submitReply}
        onChange={(e) => setTypedMsg(e.target.value)}
      />
      {/* </div> */}
    </motion.div>
  );
}
