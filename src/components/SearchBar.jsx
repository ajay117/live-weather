import SearchIcon from "../assets/search.svg";
import PropTypes from "prop-types";

export default function SearchBar({ location, handleChange, handleSubmit }) {
  return (
    <div className="flex justify-end">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="px-2 py-2 w-96 h-10 text-lg text-stone-600"
          type="search"
          name="cityName"
          value={location}
        />

        <button type="submit" className="border-2 px-2">
          <img className="w-6 h-6 fill-white" src={SearchIcon} alt="" />
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  location: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
