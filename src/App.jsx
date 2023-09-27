import { useState, useEffect } from "react";
import Greeting from "./components/Greeting";
import CurrentInfo from "./components/CurrentInfo";
import ShowCase from "./components/ShowCase";
import Background1 from "./assets/background1.jpg";
import Background2 from "./assets/background2.jpg";
import "./App.css";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import MultipleLocations from "./components/MultipleLocations";
import Footer from "./components/Footer";
import Logo from "./assets/logo.png";

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
console.log(data);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleClick = async (childData) => {
    const lat = childData.lat;
    const long = childData.lon;
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    let json = await fetchData(url);
    setData(json);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!location) return;
    // setData([]);
    let apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    let cityName = location;
    let limit = 5;
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`;
    let json = await fetchData(url);
    setData(json);
  };

  const isNight = new Date(data.dt * 1000).getHours() > 17 ? true : false;
  useEffect(() => {
    if (!location) {
      if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(toDo, error);
      }
    }

    async function toDo(position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

      let json = await fetchData(url);
      setData(json);
    }

    function error() {
      console.log("Error cannot find location");
    }
  }, [location]);

  const myStyle = {
    backgroundImage: `url(${isNight ? Background2 : Background1})`,
    height: "100vh",
    // marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgrouundRepeat: "no-repeat",
    // opacity: "0.8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      {Array.isArray(data) && data.length < 1 ? (
        <Loading />
      ) : (
        <div className="relative">
          <a href="/">
            <img src={Logo} alt="" className="logo" />
          </a>
          <main style={myStyle}>
            {Array.isArray(data) && data.length >= 1 ? (
              <MultipleLocations handleClick={handleClick} arr={data} />
            ) : data.weather ? (
              <div className="px-5 w-11/12 md:w-3/4 lg:w-2/3">
                <SearchBar
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  location={location}
                />

                <section className="flex justify-evenly items-center mt-9 md:mt-14 lg:mt-16">
                  <Greeting timestamp={data.dt} />
                  <ShowCase icon={data.weather[0].icon} />
                  <CurrentInfo data={data} />
                </section>
              </div>
            ) : (
              ""
            )}
          </main>
          <Footer />
        </div>
      )}

      {/* <div className="relative">
        <img src={Logo} alt="" className="logo" />
        <main style={myStyle}>
        

           : Array.isArray(data) && data.length >= 1 ? (
            <MultipleLocations handleClick={handleClick} arr={data} />
          ) : data.weather ? (
            <div className="px-5 w-11/12 md:w-3/4 lg:w-2/3">
              <SearchBar
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                location={location}
              />

              <section className="flex justify-evenly items-center mt-9 md:mt-14 lg:mt-16">
                <Greeting timestamp={data.dt} />
                <ShowCase icon={data.weather[0].icon} />
                <CurrentInfo data={data} />
              </section>
            </div>
          ) : (
            ""
          )}
        </main>
        <Footer />
      </div> */}

      {/* <div className="relative">
        <img src={Logo} alt="" className="logo" />
        <main style={myStyle}>
          {Array.isArray(data) && data.length < 1 ? (
            <Loading />
          ) : Array.isArray(data) && data.length >= 1 ? (
            <MultipleLocations handleClick={handleClick} arr={data} />
          ) : data.weather ? (
            <div className="px-5 w-11/12 md:w-3/4 lg:w-2/3">
              <SearchBar
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                location={location}
              />

              <section className="flex justify-evenly items-center mt-9 md:mt-14 lg:mt-16">
                <Greeting timestamp={data.dt} />
                <ShowCase icon={data.weather[0].icon} />
                <CurrentInfo data={data} />
              </section>
            </div>
          ) : (
            ""
          )}
        </main>
        <Footer />
      </div> */}
    </>
  );
}

export default App;
