import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/myData"

export const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content container-flex'>
            <div className='right'>
              <form>
                <div className='displayflex'>
                  <input type='text' placeholder='Name' data-aos='slide-down' />
                  <input type='email' placeholder='Email' data-aos='slide-down' />
                </div>
                <input type='email' placeholder='Subject' data-aos='slide-up' />
                <textarea name='' id='' cols='30' rows='10' data-aos='slide-down'></textarea>
                <button data-aos='slide-up'>Submit</button>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div className='box' data-aos='slide-up'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
