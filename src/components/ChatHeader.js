import Image from "next/image";
import { motion } from "framer-motion";

export default function ChatHeader() {
  return (
    <motion.div
      className="flex items-center w-full h-20 bg-red-200"
      exit={{ y: -100, opacity: 0 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <motion.div className="flex items-center">
        <Image
          src="/profile-real.jpg"
          alt="Picture of the author"
          width={62}
          height={62}
          style={{
            objectFit: "cover",
            width: "62px",
            height: "62px",
            borderRadius: "50%",
          }}
          className="ml-5 mr-6"
        />
        <motion.p className="font-inter text-2xl">Fav🍫</motion.p>
      </motion.div>
    </motion.div>
  );
}
