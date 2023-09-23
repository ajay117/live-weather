// import img from "../assets/weather_icons/day/"
import icons from "../Icons";
import PropTypes from "prop-types";

export default function ShowCase({ icon }) {
  console.log(icon);
  return (
    <div>
      <img className="icon" src={icons[icon]} alt="" />
    </div>
  );
}

ShowCase.propTypes = {
  icon: PropTypes.string,
};
