import { motion } from "framer-motion";

export const AnimatedPageUp = ({ children, exitY, exitX }) => {

    const animations = {
        initial: { opacity: 0, x: 0, y: 100},
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, y: exitY, exitX },
      }

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
