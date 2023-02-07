import { motion } from "framer-motion";
import MusicPlayer from "./MusicPlayer";

export default function Card() {
  const circleText = [
    "H",
    "A",
    "P",
    "P",
    "Y",
    " ",
    "O",
    "N",
    "E",
    " ",
    "Y",
    "E",
    "A",
    "R",
    " ",
    "A",
    "N",
    "N",
    "I",
    "V",
    "E",
    "R",
    "S",
    "A",
    "R",
    "Y",
    " ",
    "B",
    "A",
    "B",
    "Y",
    " ",
  ];
  return (
    <motion.div className="relative flex flex-col max-w-4xl items-center justify-center h-[800px]">
      <div className="absolute w-[800px] h-[800px] rounded-[50%] flex items-center justify-center">
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, delay: 0 }}
        >
          {circleText.map((text, index) => (
            <span
              className={`absolute left-1/2 text-3xl font-inter origin-[0_400px]`}
              style={{ transform: `rotate(${index * 10}deg)` }}
              key={index + text}
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
      <motion.div className="flex flex-col items-center justify-center">
        <motion.div className="overflow-y-clip">
          <motion.div
            className="relative inline-block mb-6"
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            <motion.p className="font-eden text-9xl">FAV</motion.p>
            <motion.p className="text-5xl absolute top-0 -right-2">🍫</motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="text-9xl scale-125"
          animate={{
            scale: 1.5,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
          }}
        >
          ❤️
        </motion.div>
        <motion.div className="overflow-y-clip">
          <motion.div
            className="relative inline-block mt-3"
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            <motion.p className="font-script text-9xl">Sunshine</motion.p>
            <motion.p className="text-6xl absolute -top-1 right-[86px]">
              🌞
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
      <MusicPlayer />
    </motion.div>
  );
}
