import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Navbar from "../../Navbar/Navbar";
import "./crew.scss";

const Crew = () => {
  const [crew, setCrew] = useState([]);
  const [member, setMember] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
    beforeChange: (current, next) => {
      setMember([crew[next]]);
    },
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
        setCrew(data.crew);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setMember((data) => {
      data = [crew[0]];
      return data;
    });
  }, [crew]);

  return (
    <div className="crew">
      <Navbar />
      <p className="heading">
        <span>02</span>Meet your crew
      </p>
      <div className="crew-container">
        <div className="slide-container">
          <Slider {...settings}>
            {crew?.map((member, i) => {
              return (
                <div key={i}>
                  <img src={member?.images.png} alt={member?.name} />
                </div>
              );
            })}
          </Slider>
        </div>

        {member?.map((mem, i) => {
          return (
            <div className="info-container" key={i}>
              <p className="role">{mem?.role}</p>
              <h2 className="name">{mem?.name}</h2>
              <p className="bio">{mem?.bio}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crew;
