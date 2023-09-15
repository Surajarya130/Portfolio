import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="bg-white-800 py-24" id="heroContainer">
        <div className="flex max-w-screen-xl mx-auto sm:flex-col-reverse">
          <div className="w-1/2 sm:w-full text-center">
            <h1 className="text-center heading-1 text-black-200 mb-8">
              <span className="bg-accentDef-secondary">Get In Touch</span>
            </h1>
            <p className="para-regular text-white-500">
              Let&apos;s Collaborate on Your Next Project
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-900 py-24" id="heroContainer">
        <div className="flex max-w-screen-xl mx-auto ">
          <h1>Suraj</h1>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
