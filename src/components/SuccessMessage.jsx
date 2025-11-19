import { motion } from "motion/react";

export default function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className={` container my-12 p-6 md:p-10 lg:p-12 border-2 border-green-800 dark:border-green-800 rounded-md bg-green-100  dark:bg-green-700/30 shadow-2xl lg:shadow-md text-green-950 dark:text-green-100`}
    >
      <h3>Your post has been posted</h3>
      <p>Congratulations! You can see your post in the post section</p>
    </motion.div>
  );
}
