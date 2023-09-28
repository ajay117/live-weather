import PropTypes from "prop-types";
import localTime from "../utilities/localTime";

function Greetings({ timestamp }) {
  let time = localTime(timestamp);
  let hour = time.slice(0, 2);
  
  let greeting;
  if (time.includes("am")) {
    console.log(time);
    greeting = "Good Morning";
  } else if (time.includes("pm") && hour < 6) {
    greeting = "Good Afternoon";
  } else if (time.includes("pm") && hour < 9) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  return (
    <div>
      <p className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
        {greeting}
      </p>
    </div>
  );
}

export default Greetings;

Greetings.propTypes = {
  timestamp: PropTypes.number,
};
