import PropTypes from "prop-types";
import localTime from "../utilities/localTime";

function Greetings({ timestamp }) {
  let time = localTime(new Date(timestamp));
  let hour = time.slice(0,2)
  console.log(typeof time);

  let greeting;
  if (time.includes("am")) {
    console.log(time);
    greeting = "Good Morning";
  } else if (time.includes('pm') && hour < 6) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div>
      <p className="text-white font-bold text-3xl lg:text-5xl">{greeting}</p>
    </div>
  );
}

export default Greetings;

Greetings.propTypes = {
  timestamp: PropTypes.number,
};
