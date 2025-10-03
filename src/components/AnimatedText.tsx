"use client";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string[];
  className?: string;
}

export default function AnimatedText({
  text,
  className = "",
}: AnimatedTextProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {text.map((line, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
        >
          {line}
        </motion.span>
      ))}
    </div>
  );
}
