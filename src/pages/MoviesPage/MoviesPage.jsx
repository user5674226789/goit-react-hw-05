import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchImg = form.elements.searchImg.value;

    if (searchImg.trim() === "") {
      toast("Please fill in search folder", {
        style: {
          color: "red",
        },
      });
      return;
    }

    // onSearch(searchImg);
    form.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchImg"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </div>
  );
}
