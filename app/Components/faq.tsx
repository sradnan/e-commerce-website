"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqData = [
    {
      id: 1,
      question: "What types of businesses can use this system?",
      answer:
        "Our platform supports all business sizes — from small retail shops and pharmacies to supermarkets, wholesalers, and multi-branch enterprise chains.",
    },
    {
      id: 2,
      question: "Does the POS work offline?",
      answer:
        "Yes, our POS system can work offline. Data syncs automatically when internet is back.",
    },
    {
      id: 3,
      question: "Can I manage multiple branches?",
      answer:
        "Yes, you can manage multiple branches from one dashboard with real-time insights.",
    },
    {
      id: 4,
      question: "Is barcode scanning supported?",
      answer:
        "Yes, barcode scanning is fully supported for faster billing and inventory tracking.",
    },
    {
      id: 5,
      question: "Can I sync online store orders with the system?",
      answer:
        "Yes, all orders sync automatically with your system in real-time.",
    },
    {
      id: 6,
      question: "Do you offer e-commerce integration?",
      answer:
        "Yes, we provide seamless e-commerce integration with your POS system.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mt-10 px-4">
        <p className="text-sm text-orange-500 mb-2">FAQ</p>
        <h1 className="text-2xl md:text-4xl font-bold">
          Everything you need to know about <br className="hidden md:block" />
          our E-commerce Website
        </h1>
      </div>

      {/* FAQ Section */}
      <div className="flex justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl bg-gray-50 shadow-md rounded-xl p-4 md:p-6">
          <div className="space-y-3">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="shadow-2xl rounded-lg p-4 bg-white"
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(item.id)}
                >
                  <h3
                    className={`font-bold text-base md:text-lg transition ${
                      openId === item.id
                        ? "text-orange-500"
                        : "text-gray-800"
                    }`}
                  >
                    {item.question}
                  </h3>

                  <span className="text-xl font-bold">
                    {openId === item.id ? "−" : "+"}
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === item.id ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}