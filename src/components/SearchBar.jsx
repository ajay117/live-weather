import SearchIcon from "../assets/search.svg";
import PropTypes from "prop-types";

export default function SearchBar({ location, handleChange, handleSubmit }) {
  return (
    <div>
      <form
        className=" flex justify-center md:justify-start"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          className="w-full  px-2 py-2 h-10 text-lg lg:text-2xl text-stone-600"
          type="search"
          name="cityName"
          placeholder="Please enter name of city"
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
