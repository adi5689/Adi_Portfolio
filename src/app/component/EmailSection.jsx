import React from "react";
import ContactForm from "./ContactForm";



const EmailSection = () => {
  // const [state, handleSubmit] = useForm()
  return (
    <div className="flex flex-col">
      <div className="flex justify-center itens-center px-6 pt-16">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
          Contact
        </h1>
      </div>
      <section id="hire" className="grid md:grid-cols-2 md:mb-6 md:mt-6 md:pt-0 md:pb-[2rem] gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8c00ff] to transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-10 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open,
          Whether you have a question or just want to say Hi.
          <br />
          <span>Reach me at{'->'}</span>
        </p>
        <p classname="text-white"><span>Phone: </span> 7008391742</p>
        <p classname="text-white"><span>Email: </span> adityakumarsahu.89@gmail.com</p>
      </div>
      <div className="z-10">
        <ContactForm />        
      </div>
    </section>

    </div>
    
  );
};

export default EmailSection;
