import React from "react";
import Typed from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/slider/4.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Manish Shrestha</h3>
            <h4 className="typer">
              <Typed
                strings={[
                  "Passionate Programmer",
                  "Adventure Seeker",
                  "Tech Enthusiast",
                  "Nature Lover",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Currently residing in the Philadelphia area, I balance my life as
              a graduate student at Penn State with a deep love for coding and
              exploring the great outdoors through hiking.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
