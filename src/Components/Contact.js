import React, { useState, useEffect,useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';



function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_i9i0p5h', 'template_x2d9jbd', form.current, '0Snr-aQEUWEGPj9_U')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <Header></Header>
      <div className=" h-[150vh] lg:h-[150vh] w-[100%] lg:flex lg:justify-center lg:items-center lg:flex-row  ">
        <div className="  lg:w-[50%] w-[100%]  flex lg:items-center justify-center flex-row h-[40vh] lg:mt-[-20%]  ">
          <label className="text-[#52a8dd] lg:text-[350px] text-[200px] lg:mt-[0] mt-[-50px] font-bold">
            D
          </label>
          <h1 className="text-[black] lg:text-[70px] text-[30px] lg:mt-[0] mt-[35px] font-bold tracking-wide ">
            esign.
            <br/>
            evelop.
            <br/>
            eliver.
          </h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <div className="ani lg:w-[100%] lg:pr-4 h-[99vh] lg:mx-0 mx-4 w-[93%] grid  border rounded border-[grey] lg:grid-cols-2 grid-cols-1 lg:mt-0 mt-[10%]">
          <div className="lg:w-[100%] w-[93%] flex flex-col ">
            <label className=" ahh  text-[#976aa8] font-bold m-5 text-[20px] ">
              My name is
            </label>
            <input
            type="text"
            id="name"
            name="name"
              placeholder="Your Name"
              className="  border-b-gray-500 border-b ml-5 h-[20%] text-[#976aa8]  "
            />
          </div>
          <div className="lg:w-[100%] w-[93%] flex flex-col">
            <label className=" ahh  text-[#976aa8] font-bold m-5 text-[20px] ">
              Reach me at
            </label>
            <input
            type="email"
            id="email"
            name="email"
          
              placeholder="Your Email"
              className=" border-b-gray-500 border-b ml-5 h-[20%] text-[#976aa8] "
            />
          </div>
          <div className="lg:w-[100%] w-[93%] flex flex-col">
            <label className=" ahh  text-[#976aa8] font-bold m-5 text-[20px] ">
              My phone number is
            </label>
            <input
            type="number"
            id="number"
            name="number"
              placeholder="Mobile Number"
              className="  border-b-gray-500 border-b ml-5 h-[20%] text-[#976aa8]  "
            />
          </div>
          <div className="lg:w-[100%] w-[93%] flex flex-col">
            <label className=" ahh  text-[#976aa8] font-bold m-5 text-[20px]">
              URL of Website/Social handles{" "}
            </label>
            <input
            type="text"
            id="url"
            name="url"
              placeholder="Example:https://googoo.com"
              className="  border-b-gray-500 border-b ml-5 h-[20%]  text-[#976aa8]  "
            />
          </div>
          <div className="lg:w-[100%] w-[93%] flex flex-col">
            <label className=" ahh  text-[#976aa8] font-bold m-5 text-[20px] ">
              You want from us{" "}
            </label>
            <input
            type="text"
            id="message"
            name="message"
              placeholder="Your Message"
              className="  border-b-gray-500 border-b ml-5 h-[20%]  text-[#976aa8]  "
            />
          </div>
          <div className="lg:w-[100%] w-[93%] flex flex-col">
            <label className=" ahh  text-[#976aa8] font-bold m-5 text-[20px] ">
              Choose Your Currency{" "}
            </label>
            <input
            type="text"
            id="currency"
            name="currency"
              placeholder="Your Currency"
              className="  border-b-gray-500 border-b ml-5 h-[20%]  text-[#976aa8]  "
            />
          </div>
          <button type="submit" className=" ahh text-white font-bold bg-[#976aa8] w-[60%] ml-[20%] h-[7vh] rounded text-[25px]">
            SUBMIT
          </button>
        </div>
        </form>
      </div>
      <div className="App"></div>
      <Footer></Footer>
    </div>
  );
}

export default Contact;




// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactForm = () => {
//   const form = useRef()
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_ww48s0j', 'template_jzragio', form.current, 'iPuo0fbgE-6GKesrt')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
    
//         required
//       />
//       <label htmlFor="name">Email:</label>
//       <input
//         type="text"
//         id="user_email"
//         name="user_email"
    
//         required
//       />

    

//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactForm;




