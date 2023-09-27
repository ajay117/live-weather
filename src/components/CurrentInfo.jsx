import localTime from "../utilities/localTime";
import PropTypes from "prop-types";
import SunsetImg from "../assets/sunset.png";
import SunriseImg from "../assets/sunrise.png";
import { getName } from "country-list";

export default function CurrentInfo({ data }) {
  console.log(data.name);
  const temperature = data.main.temp;
  const time = localTime(data.dt);
  const city = data.name;
  const description = data.weather[0].description;
  const sunset = localTime(data.sys.sunset);
  const sunrise = localTime(data.sys.sunrise);
  const country = getName(data.sys.country);
  console.log(data.sys.country);

  return (
    <section className="text-white flex flex-col items-end ">
      <p className="pb-4 text-2xl md:text-4xl lg:text-7xl">
        {temperature}&deg;
      </p>
      {data.name ? (
        <p className="pb-2 text-xs md:text-base lg:text-base font-semibold">{city}, {country}</p>
      ) : null}
      <p className="pb-2 text-xs md:text-base lg:text-base">Time: {time}</p>
      <p className="pb-2 text-xs md:text-base lg:text-base">
        {" "}
        Weather: {`${description[0].toUpperCase()}${description.slice(1)}`}
      </p>

      <div className="flex text-xs md:text-base gap-3 mt-3 items-end">
        <p className="flex items-center">
          <img className="w-10 lg:w-12" src={SunriseImg} alt="" />
          <span>{sunrise}</span>
        </p>
        <p className="flex items-center">
          <img className="w-10 lg:w-12" src={SunsetImg} alt="" />
          <span>{sunset}</span>
        </p>
      </div>
    </section>
  );
}

CurrentInfo.propTypes = {
  data: PropTypes.object,
};
