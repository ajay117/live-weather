import localTime from "../utilities/localTime";
import PropTypes from "prop-types";

export default function CurrentInfo({ data }) {
  console.log(data.name);
  const temperature = data.main.temp;
  const time = localTime(data.dt);
  const city = data.name;
  const description = data.weather[0].description;

  return (
    <div className="text-white flex flex-col items-end">
      <p className="pb-4 text-7xl lg:text-7xl">{temperature}&deg;</p>
      {data.name ? (
        <p className="pb-2 text-base font-semibold">{city} City</p>
      ) : null}
      <p className="pb-2 text-sm lg:text-base">Time: {time}</p>
      <p className="pb-2 text-base lg:text-xl">
        {" "}
        Weather: {`${description[0].toUpperCase()}${description.slice(1)}`}
      </p>
    </div>
  );
}

CurrentInfo.propTypes = {
  data: PropTypes.object,
};
