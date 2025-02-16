import React from "react"
import Slider from "react-slick"
import { testimonials } from "../data/myData"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className='testimonials hero'>
        <div className='container'>
          <Slider {...settings}>
            {testimonials.map((val) => (
              <div className='box'>
                <i data-aos='slide-down'>
                  <FormatQuoteIcon />
                </i>
                <p data-aos='slide-down'>{val.text}</p>
                <div className='img' data-aos='slide-up'>
                  <img src={val.image} alt='' />
                </div>
                <h3 data-aos='slide-down'>{val.name}</h3>
                <label data-aos='slide-up'>{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}
