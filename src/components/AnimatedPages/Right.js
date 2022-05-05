import { motion } from "framer-motion";

export const AnimatedPageRight = ({ children, exitY, exitX }) => {

    const animations = {
        initial: { opacity: 0, x: 100, y: 0},
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0, },
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
