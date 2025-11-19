import { motion } from "motion/react";

export default function ErrorMessage({ errorMessage }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 100, y: 0 }}
      className={` my-4 p-3 md:p-5 lg:p-6 border-2 border-red-800 dark:border-red-800 rounded-md bg-red-100  dark:bg-red-700/30 text-red-950 dark:text-red-100 shadow-sm`}
    >
      <h3>Something went wrong :-(</h3>
      <p>
        An error occurred: <span className="font-bold">{errorMessage}</span>
      </p>
      <p>Please, try again</p>
    </motion.div>
  );
}
