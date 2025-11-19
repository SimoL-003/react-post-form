export default function SuccessMessage({ successVisibility }) {
  return (
    <div
      className={`${
        successVisibility ? "block" : "hidden"
      } container my-12 p-6 md:p-10 lg:p-12 border-2 border-green-800 dark:border-green-800 rounded-md bg-green-100  dark:bg-green-700/30 shadow-2xl lg:shadow-md text-green-950 dark:text-green-100`}
    >
      <h3>Your post has been posted</h3>
      <p>Congratulations! You can see your post in the post section</p>
    </div>
  );
}
