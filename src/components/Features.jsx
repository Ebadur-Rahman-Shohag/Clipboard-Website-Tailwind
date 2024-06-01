import React from "react";
import computerImage from "../assets/images/image-computer.png";

function Features() {
  return (
    <section id="features">
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32 w-full">
          {/* Image container */}
          <div className="md:w-1/2">
            <img src={computerImage} alt="computerImage" className="md:absolute top-0 right-[50%]"/>
          </div>

          {/* Items container */}
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl mx-auto md:w-1/2 md:mb-60 md:text-left md:pl-16">
            {/* Item */}
            <div>
              <h5>Quick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* Item */}
            <div>
              <h5>iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            {/* Item */}
            <div>
              <h5>Completely History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
