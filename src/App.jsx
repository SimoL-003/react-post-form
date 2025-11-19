import axios from "axios";
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

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res.message);
      });

    setFormData(initialFormData);
  }

  return (
    <>
      <main className="bg-white dark:bg-black">
        <div className="container py-16">
          <h1>Write a new post</h1>
          <form onSubmit={handleSubmit} action="">
            <div className="input-container">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Author's name"
                value={formData.author}
                onChange={handleInputChange}
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
                value={formData.public}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-container">
              <button type="submit">Send post</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
