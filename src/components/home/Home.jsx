import React from "react"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Testimonials } from "../pages/Testimonials"
import { Blog } from "../pages/Blog"
import { Homecontent } from "./Homecontent"

export const Home = () => {
  return (
    <>
      <Homecontent />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog/>
      <Contact />
    </>
  )
}
