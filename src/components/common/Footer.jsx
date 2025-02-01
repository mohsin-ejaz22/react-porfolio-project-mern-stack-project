import React from "react";
import { social } from "../data/myData";

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="slide-up"
          >
            <i>{item.icon}</i>
          </a>
        ))}
        <p data-aos="zoom-in">All Rights Reserved by @Mohsin Ejaz</p>
      </footer>
    </>
  );
};

export default Footer;
