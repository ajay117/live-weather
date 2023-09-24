import SearchIcon from "../assets/search.svg";
import PropTypes from "prop-types";

export default function SearchBar({ location, handleChange, handleSubmit }) {
  return (
    <div className="flex justify-end">
      <form className="flex gap-2.5" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="px-2 py-2 w-96 h-10 text-lg"
          type="search"
          name="cityName"
          value={location}
        />

        <button type="submit">
          <img className="w-9 h-9 fill-white" src={SearchIcon} alt="" />
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
