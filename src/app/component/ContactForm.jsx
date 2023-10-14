"use client";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICEID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPID,
        ref.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="flex flex-col border border-[#d60bffde] px-6 py-4 rounded-[20px]"
    >
       <div className="mb-6">
        <label
          htmlFor="name"
          type="text"
          className="text-white mb-1 block text-sm font-medium"
        >
          Name
        </label>
        <input
          type="text"
          required
          className="bg-[#18191E] border-2 border-[#d60bffde] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Name"
          name="name"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          type="email"
          className="text-white mb-1 block text-sm font-medium"
        >
          Email Address
        </label>
        <input
          type="email"
          required
          className="bg-[#18191E] border-2 border-[#d60bffde] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Enter your Email"
          name="email"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-1 font-medium"
        >
          Message
        </label>
        <textarea  
            name="message"
            className="bg-[#18191E] border border-[#d60bffde] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full h-full p-2.5"
            placeholder="Let's talk about"
         />
        <button 
            type="submit" 
            className="bg-[#bc14ffde] hover:bg-[#f9ff45de] hover:text-black mt-6 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Submit
        </button>
        {success && 
          "Your message has been sent. I'll get back to you soon. :)"

        }
      </div>
    </form>
  );
};

export default ContactForm;
