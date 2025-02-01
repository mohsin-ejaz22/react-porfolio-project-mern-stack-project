import React from "react"
import { project } from "../data/myData"
import CountUp from "react-countup"

//yarn or npm add react-countup

export const Counter = () => {
  return (
    <>
      <div className=' counter'>
        <div className='container grid3 grid4'>
          {project.map((item) => (
            <div className='box' data-aos='slide-up'>
              <i>{item.icon}</i>
              <h1 className='heading'>
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
