"use client";

import React from "react";
import bg from "./image/3e8ab0c1a4512ed897c13548ece89720bb32e652.jpg";
import hero from "./image/footerpic.png";
import Image from "next/image";

function Footer1() {
  return (
    <section
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover bg-center rounded-3xl overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-28 py-12 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
              Start your business on Tally <span className="text-orange-500">Desk</span> today
            </h1>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Try a free trial of essential features for running your business for one month.
              Bring new momentum and potential to your business.
            </p>

            {/* BUTTON */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                Try for Free
              </button>

              <button className="bg-white w-fit px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Request a Demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src={hero}
              alt="main"
              className="shadow-lg rounded-lg max-w-full translate-y-1/5 translate-x-1/5"
            />

            {/* Shadow */}
            <div className="absolute bottom-0 w-72 h-20 bg-orange-100 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
   
        
    </section>
  );
}

export default Footer1;