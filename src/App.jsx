import axios from "axios";
import { useEffect, useState } from "react";

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
  const [posts, setPosts] = useState([]);

  function handleInputChange(e) {
    const input = e.target;

    if (input.type === "checkbox") {
      setFormData({ ...formData, [input.name]: input.checked });
    } else {
      setFormData({ ...formData, [input.name]: input.value });
    }
  }

  useEffect(() => {
    axios
      .get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        if (res.status == 201) {
          setSuccessVisibility((prev) => !prev);
          setFormVisibility((prev) => !prev);
          setErrorVisibility(false);
          setFormData(initialFormData);
          setTimeout(() => {
            setSuccessVisibility((prev) => !prev);
            setFormVisibility((prev) => !prev);
          }, 3000);
        }
      })
      .catch((err) => {
        err?.response?.data
          ? setErrorMessage(err.response.data)
          : setErrorMessage(err.message);
        setErrorVisibility(true);
      });
  }

  return (
    <>
      <main className="bg-white dark:bg-black py-8 min-h-screen">
        {/* Form section */}
        <section>
          <div className="container my-8">
            <h1>My Blog</h1>
          </div>

          {/* Success message */}
          <div
            className={`${
              successVisibility ? "block" : "hidden"
            } container my-12 p-6 md:p-10 lg:p-12 border-2 border-green-800 dark:border-green-800 rounded-md bg-green-100  dark:bg-green-700/30 shadow-2xl lg:shadow-md text-green-950 dark:text-green-100`}
          >
            <h3>Your post has been posted</h3>
            <p>Congratulations! You can see your post in the post page</p>
          </div>

          {/* Form */}
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
        </section>

        {/* Posts section */}
        <section className="mt-20">
          <div className="container">
            <h2>Tutti i post</h2>

            {/* Posts container */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-8 lg:grid-cols-3 text-zinc-900 dark:text-zinc-50">
              {posts.map(({ title, author, body, id }) => (
                <li
                  key={id}
                  className="border-2 border-zinc-200 dark:border-zinc-800 rounded-md p-5 bg-zinc-100  dark:bg-zinc-900 shadow-sm"
                >
                  <h4 className="inline mr-4 align-middle">{title}</h4>
                  {/* <span className="text-sm align-middle bg-blue-600 px-2 py-1 rounded-full text-zinc-50">
                    {public ? "public" : "private"}
                  </span> */}
                  <p className="font-semibold my-2">{author}</p>
                  <p className="text-sm">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
