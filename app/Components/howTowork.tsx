"use client";

import { useState } from "react";
import Image from "next/image";

import Rightimge from "./image/Right container.png";

import img1 from "./image/Layer_1 (2).png";
import img2 from "./image/Icon container.png";
import img3 from "./image/Layer_1 (3).png";
import img4 from "./image/Layer_1.png";
import img5 from "./image/Capa_1.png";
import img6 from "./image/Layer_1 (1).png";

const data = [
  {
    id: 1,
    title: "Sell online and offline",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
    img: img1,
  },
  {
    id: 2,
    title: "Sales Report",
    desc: "Track your business performance with detailed analytics and reports.",
    img: img2,
  },
  {
    id: 3,
    title: "Stock Management",
    desc: "Manage inventory efficiently with real-time stock updates.",
    img: img3,
  },
  {
    id: 4,
    title: "Advance Invoicing",
    desc: "Generate professional invoices quickly and easily.",
    img: img4,
  },
  {
    id: 5,
    title: "POS System",
    desc: "Sell seamlessly with a powerful point-of-sale system.",
    img: img5,
  },
  {
    id: 6,
    title: "E-commerce Integration",
    desc: "Connect your online store and manage everything in one place.",
    img: img6,
  },
];

export default function WhyTellyDesk() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 md:px-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Why Telly Desk?
            </h1>

            <p className="text-gray-500 mb-8 max-w-lg">
              It's flexible. It's extensible. It's made to work with your needs.
            </p>

            {/* ACCORDION */}
            <div className="space-y-4">
              {data.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <div key={item.id}>
                    <button
                      onClick={() => setActiveId(item.id)}
                      className={`flex items-center gap-3 w-full text-left text-lg font-medium transition ${
                        isActive ? "text-orange-600" : "text-gray-800"
                      }`}
                    >
                      <Image src={item.img} alt="" width={20} height={20} />
                      {item.title}
                    </button>

                    {/* DESCRIPTION */}
                    {isActive && (
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    )}

                    <div
                      className={`h-[1px] mt-3 transition ${
                        isActive ? "bg-orange-500" : "bg-gray-200"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>

            {/* BUTTON */}
            <button className="mt-8 bg-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition text-white">
              Create a Student Account
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={Rightimge}
              alt="CRM Work"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}