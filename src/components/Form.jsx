import { AnimatePresence, motion } from "motion/react";
import ErrorMessage from "./ErrorMessage";

export default function Form({
  errorMessage,
  errorVisibility,
  handleSubmit,
  formData,
  handleInputChange,
}) {
  return (
    <motion.form
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      onSubmit={handleSubmit}
      action=""
    >
      <h2>Write a new post</h2>
      <div className="input-container">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author's name"
          value={formData.author}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="title">Post title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title of the post"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="body">Your post</label>
        <textarea
          name="body"
          id="body"
          placeholder="Write your post"
          value={formData.body}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className="input-container flex-row items-center">
        <label className="mb-0 mr-2" htmlFor="public">
          Private post
        </label>
        <input
          type="checkbox"
          name="public"
          id="public"
          checked={formData.public}
          onChange={handleInputChange}
        />
      </div>

      {/* Error message */}
      <AnimatePresence initial={false}>
        {errorVisibility && (
          <ErrorMessage
            errorMessage={errorMessage}
            errorVisibility={errorVisibility}
          />
        )}
      </AnimatePresence>

      {/* Submit button */}
      <motion.div
        layout
        transition={{ duration: 0.1 }}
        className="input-container"
      >
        <button type="submit">Send post</button>
      </motion.div>
    </motion.form>
  );
}
