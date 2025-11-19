import { useState } from "react";

function App() {
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: true,
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleInputChange(e) {
    const input = e.target;

    if (input.type === "checkbox") {
      setFormData({ ...formData, [input.name]: input.checked });
    } else {
      setFormData({ ...formData, [input.name]: input.value });
    }
  }

  return (
    <>
      <main>
        <div className="container">
          <h1 className="my-4">Write a new post</h1>
          <form action="">
            <div className="mb-2 p-1 border-2">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                id="author"
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2 p-1 border-2">
              <label htmlFor="title">Post title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-2 p-1 border-2">
              <label htmlFor="body">Your post</label>
              <textarea
                name="body"
                id="body"
                value={formData.body}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-2 p-1 border-2">
              <label htmlFor="public">Private</label>
              <input
                type="checkbox"
                name="public"
                id="public"
                value={formData.public}
                onChange={handleInputChange}
              />
            </div>
            <button className="mb-2 p-1 border-2" type="submit">
              Invia post
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
