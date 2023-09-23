function Greetings({ timestamp }) {
  let hours = new Date(timestamp * 1000).getHours();
//   let minutes = new Date(timestamp * 1000).getMinutes();

//   let time = `${hours}:${minutes}`;

  let greeting;
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div>
      <p className="text-white font-bold text-3xl">{greeting}</p>
    </div>
  );
}

export default Greetings;
