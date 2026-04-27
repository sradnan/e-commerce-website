"use client";

import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import reqdemo from "./image/hereo.png";

function BookADemo() {
  const [phone, setPhone] = useState("");

  return (
    <section className="py-12 bg-gray-50">

      {/* CONTAINER */}
      <div className="container mx-auto px-6 md:px-28">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Simple Pricing for Every Business
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto">
            From small retail shops to enterprise chains — choose a plan that fits your growth.
          </p>
        </div>

        {/* CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-2xl overflow-hidden">

          {/* LEFT IMAGE */}
          <div className=" ">
            <Image
              src={reqdemo}
              alt="demo"
              className="w-full max-w-xl h-auto object-contain"
              priority
            />
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 md:p-10">

            <form className="space-y-5">

              {/* TITLE */}
              <div>
                <h2 className="text-2xl text-orange-500 font-semibold mb-2">
                  Book a Demo!
                </h2>

                <p className="text-sm text-gray-500">
                  Our team is ready to help you with setup, onboarding, and product questions.
                </p>
              </div>

              {/* NAME ROW */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              {/* INTERNATIONAL PHONE NUMBER */}
              <div>
                <label className="text-sm">Phone Number</label>

                <PhoneInput
                  country={"bd"}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputClass="!w-full border border-gray-300 p-2 !rounded-md"
                  containerClass="mt-1"
                  buttonClass="!border-gray-300"
                />
              </div>

              {/* WORK INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="text-sm">Work email address</label>
                  <input
                    type="email"
                    placeholder="Hardy.Sauer@example.org"
                    className="w-full border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm">Company name</label>
                  <input
                    type="text"
                    placeholder="Koss Group"
                    className="w-full border border-gray-300 p-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm">
                  How did you first hear about us
                </label>

                <textarea
                  rows="5"
                  placeholder="Comment"
                  className="w-full border border-gray-300 p-2 rounded-md mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BookADemo;