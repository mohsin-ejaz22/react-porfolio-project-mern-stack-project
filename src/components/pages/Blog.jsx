import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/myData";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="Blog" />
          <div className="content grid3">
            {blog.map((item) => (
              <div className="box" data-aos="slide-up" key={item.id}>
                <div className="img" data-aos="slide-up">
                  <img src={item.cover} alt={item.title} data-aos="slide-up" />
                </div>
                <div className="text">
                  <h3 data-aos="slide-up">{item.title}</h3>
                  <p data-aos="slide-up">{item.desc}</p>
                  <a
                    href={item.link}
                    className="read-more"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="slide-up"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
