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
  const [successVisibility, setSuccessVisibility] = useState(false);
  const [formVisibility, setFormVisibility] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorVisibility, setErrorVisibility] = useState(false);

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
        if (res.status == 201) {
          setSuccessVisibility((prev) => !prev);
          setFormVisibility((prev) => !prev);
          setErrorVisibility(false);
          setFormData(initialFormData);
          setTimeout(() => setSuccessVisibility((prev) => !prev), 3000);
          setTimeout(() => setFormVisibility((prev) => !prev), 3000);
        }
      })
      .catch((res) => {
        console.log(res.message);
        setErrorMessage(res.message);
        setErrorVisibility(true);
      });
  }

  return (
    <>
      <main className="bg-white dark:bg-black py-8 min-h-screen">
        <div className="container my-8">
          <h1>My Blog</h1>
        </div>
        <div
          className={`${
            successVisibility ? "block" : "hidden"
          } container my-12 p-6 md:p-10 lg:p-12 border-2 border-green-800 dark:border-green-800 rounded-md bg-green-100  dark:bg-green-700/30 shadow-2xl lg:shadow-md text-green-950 dark:text-green-100`}
        >
          <h3>Your post has been posted</h3>
          <p>Congratulations! You can see your post in the post page</p>
        </div>
        <div className={`${formVisibility ? "block" : "hidden"} container`}>
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
            <div
              className={`${
                errorVisibility ? "block" : "hidden"
              } my-4 p-3 md:p-5 lg:p-6 border-2 border-red-800 dark:border-red-800 rounded-md bg-red-100  dark:bg-red-700/30 text-red-950 dark:text-red-100 shadow-sm`}
            >
              <h3>Something went wrong :-(</h3>
              <p>
                An error occurred:{" "}
                <span className="font-bold">{errorMessage}</span>
              </p>
              <p>Please, try again</p>
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
