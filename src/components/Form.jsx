import ErrorMessage from "./ErrorMessage";

export default function Form({
  errorMessage,
  errorVisibility,
  handleSubmit,
  formData,
  handleInputChange,
}) {
  return (
    <form onSubmit={handleSubmit} action="">
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
      <ErrorMessage
        errorMessage={errorMessage}
        errorVisibility={errorVisibility}
      />

      {/* Submit button */}
      <div className="input-container">
        <button type="submit">Send post</button>
      </div>
    </form>
  );
}
