import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./destination.scss";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [destination, setDestination] = useState([]);
  const [current, setCurrent] = useState("Moon");

  //function to filter destination by name
  const filterDestination = (name) => {
    const filteredDestination = destinations.filter((dest) => {
      return dest.name.toLowerCase().includes(name.toLowerCase());
    });
    setDestination(filteredDestination);
  };

  const setCurrentTab = (name) => {
    setCurrent(name);
    filterDestination(name);
  };

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data.destinations);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDestination((data) => {
      data = [destinations[0]];
      return data;
    });
  }, [destinations]);

  return (
    <div className="destination">
      <Navbar />
      <p className="heading">
        <span>01</span>Pick your destination
      </p>
      <div className="destination-container">
        {/* <img src="" alt="" /> */}
        {destination?.map((dest, i) => {
          return <img key={i} src={dest?.images.png} alt="moon" />;
        })}

        <div className="destination-options">
          <ul>
            <li>
              <a
                onClick={() => {
                  setCurrentTab("Moon");
                }}
                href="#/"
                style={{
                  color: current === "Moon" ? "#FFFFFF" : "#D0D6F9",
                  borderBottom: current === "Moon" ? "2px solid #FFFFFF" : null,
                }}
              >
                Moon
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={() => {
                  setCurrentTab("Mars");
                }}
                style={{
                  color: current === "Mars" ? "#FFFFFF" : "#D0D6F9",
                  borderBottom: current === "Mars" ? "2px solid #FFFFFF" : null,
                }}
              >
                Mars
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={() => {
                  setCurrentTab("Europa");
                }}
                style={{
                  color: current === "Europa" ? "#FFFFFF" : "#D0D6F9",
                  borderBottom:
                    current === "Europa" ? "2px solid #FFFFFF" : null,
                }}
              >
                Europa
              </a>
            </li>
            <li>
              <a
                href="#/"
                onClick={() => {
                  setCurrentTab("Titan");
                }}
                style={{
                  color: current === "Titan" ? "#FFFFFF" : "#D0D6F9",
                  borderBottom:
                    current === "Titan" ? "2px solid #FFFFFF" : null,
                }}
              >
                Titan
              </a>
            </li>
          </ul>
        </div>
        <div>
          {destination?.map((dest, i) => {
            return (
              <React.Fragment key={i}>
                <h1>{dest?.name}</h1>
                <p className="description">{dest?.description}</p>
                <hr />
                <div className="info-container">
                  <div className="distance-box">
                    <p className="distance-text">Avg. distance</p>
                    <h2 className="distance-value">{dest?.distance}</h2>
                  </div>
                  <div className="time-box">
                    <p className="time-text">Est. Travel Time</p>
                    <h2 className="time-value">{dest?.travel}</h2>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destination;
