// import React, { useEffect } from "react"
import { home } from "../data/myData";
import Typewriter from "typewriter-effect";

export const Homecontent = () => {

  return (
    <div>
      <section className="homeMain">
        {
          home.map((val, i) => (
          <div className="homeContent">
            <h3 className="fontSize" data-aos="slide-down">
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }
                }
              />
            </h1>

            <p data-aos="slide-down">{val.desc}</p>
            <a
              href="https://drive.google.com/file/d/1Fuu0mupHmxrIacg5dLi0-He2gyPnyUE7/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primaryBtn" data-aos="slide-down">
                Download CV
              </button>
            </a>
          </div>
        ))}
      </section>
</div>
  );
};
