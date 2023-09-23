import localTime from "../utilities/LocalTime";
import PropTypes from "prop-types";

export default function CurrentInfo({ data }) {
  console.log(data.name);
  return (
    <div className="text-white flex flex-col items-end">
      <p className="text-7xl">{data.main.temp}&deg;</p>
      {data.name ? (
        <p className="text-base font-semibold">{data.name} City</p>
      ) : null}
      <p className="text-sm">Time: {localTime(data.dt)}</p>
      <p className="text-base">{data.weather[0].description}</p>
    </div>
  );
}

CurrentInfo.propTypes = {
  data: PropTypes.object,
};
