import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <h3>SO, YOU WANT TO TRAVEL TO</h3>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

        <Link to="/Destination">
          <div className="explore-button">EXPLORE</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
