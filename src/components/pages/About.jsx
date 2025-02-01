import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/myData";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container displayflex">
          {about.map((val) => (
            <>
              <div className="left" data-aos="slide-up">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="slide-up">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <a
                  href="https://github.com/mohsin-ejaz22  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className='primaryBtn'>Explore More</button>
                </a>


              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
