
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function AnimatedSection({ children }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}