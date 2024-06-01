import React from "react";
import heroIcon from "../assets/images/logo.svg";

function Hero() {
  return (
    <section id="hero">
      <div className="section-container mb-40 pt-16">
        <img src={heroIcon} className="mx-auto my-16" />
        <h3>
          A history of everything you copy
        </h3>
        <p className="max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue">
        Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.
        </p>
        {/* Button Container */}
        <div className="button-container">
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
