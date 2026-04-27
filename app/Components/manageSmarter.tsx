"use client";

import React from "react";
import Image from "next/image";

import img1 from "../Components/image/Product Image Container (7).png";
import img2 from "../Components/image/img-2.png";
import img3 from "../Components/image/Checkout Image Container (1).png";

function ManageSmarter() {
  const data = [
    {
      id: 1,
      title: "Smart AI Voice Ordering",
      description:
        "Let your customers and staff place orders instantly using natural voice commands — in Bangla or English.",
      image: img1,
    },
    {
      id: 2,
      title: "Track Your Orders",
      description:
        "Stay informed with advanced real-time order tracking and automate your business.",
      image: img2,
    },
    {
      id: 3,
      title: "Smart Retail Checkout System",
      description:
        "Fast, reliable POS with barcode scan, offline sales, shift tracking, cash control, and multi-branch support.",
      image: img3,
    },
  ];

  return (
    <>
    <section className="py-12 bg-gray-50">
      {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Manage Smarter, Sell Faster
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Fast setup, easy POS, and smart inventory tools to run daily operations without complexity.
          </p>
        </div>

      <div className="container mx-auto px-6 md:px-28">

        

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="flex justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-full object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
    
    
    </>
  );
}

export default ManageSmarter;