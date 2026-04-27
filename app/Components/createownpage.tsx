"use client";

import Image from "next/image";
import hero1 from "./image/Ecommerce Image.png";   // main image

import { FiCheck } from "react-icons/fi";

export default function EcommerceHero() {
  return (
    <section className="bg-[#f5f5f5] rounded-3xl overflow-hidden">
      <div className="container mx-auto px-6 md:px-28 py-12 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <p className="text-orange-500 font-semibold tracking-widest mb-4">
              Ecommerce
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Create Your Online Store with <br />
              Our Ecommerce Builder
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Launch and manage your ecommerce business with ease using our 
              user-friendly platform. Everything you need to create a successful 
              online store is at your fingertips.
            </p>

            {/* FEATURES */}
            <div className="space-y-3 mb-8">
              <p className="flex items-center gap-2">
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  <FiCheck />
                </span>
                No-code Ecommerce Builder
              </p>

              <p className="flex items-center gap-2">
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  <FiCheck />
                </span>
                Real-Time Stock Sync
              </p>

              <p className="flex items-center gap-2">
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  <FiCheck />
                </span>
                Online Order & Invoice
              </p>
            </div>

            {/* BUTTON */}
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              → Start Selling
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Main Image */}
            <Image
              src={hero1}
              alt="main"
              className=" rounded-lg"
            />

           

            {/* Bottom Shadow Circle */}
            <div className="absolute bottom-0 w-72 h-20 bg-orange-100 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}