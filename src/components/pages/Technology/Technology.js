import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import "./technology.scss";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [current, setCurrent] = useState("1");

  //function to get number in a div and set it to a variable
  const getNumber = (e) => {
    const number = e.target.innerHTML;
    setCurrent(number);
    setTechnology([technologies[number - 1]]);
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
        setTechnologies(data.technology);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //set technology to the first item in technologies
  useEffect(() => {
    setTechnology((data) => {
      data = [technologies[0]];
      return data;
    });
  }, [technologies]);

  return (
    <div className="technology">
      <Navbar />
      <p className="heading">
        <span>03</span>Space launch 101
      </p>
      <div className="technology-container">
        <div className="tech-image">
          <img src={technology[0]?.images.landscape} alt="space" />
        </div>
        <div className="circles">
          <div
            className="circle"
            onClick={getNumber}
            style={{
              color: current === "1" ? "#0b0d17" : "#FFFFFF",
              backgroundColor: current === "1" ? "#FFFFFF" : null,
            }}
          >
            1
          </div>
          <div
            className="circle"
            onClick={getNumber}
            style={{
              color: current === "2" ? "#0b0d17" : "#FFFFFF",
              backgroundColor: current === "2" ? "#FFFFFF" : null,
            }}
          >
            2
          </div>
          <div
            className="circle"
            onClick={getNumber}
            style={{
              color: current === "3" ? "#0b0d17" : "#FFFFFF",
              backgroundColor: current === "3" ? "#FFFFFF" : null,
            }}
          >
            3
          </div>
        </div>
        {technology?.map((tech, i) => {
          return (
            <div className="info-container" key={i}>
              <p className="terminology">The terminology...</p>
              <h2 className="name">{tech?.name}</h2>
              <p className="description">{tech?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
