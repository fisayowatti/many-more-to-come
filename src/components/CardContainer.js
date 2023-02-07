import { motion } from "framer-motion";

export default function CardContainer(props) {
  return (
    <motion.div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      {props.children}
    </motion.div>
  );
}
