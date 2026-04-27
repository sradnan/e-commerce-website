import React from "react";
import customer from "./image/Feature Image.png";
import Image from "next/image";

function CustomerPlan() {
  return (
    <div className="">

      {/* CONTAINER */}
      <div className="container mx-auto sm:p-4 px-6 md:px-28">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl items-center p-6">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">

            <Image
              src={customer}
              alt="customer"
              className="w-48 h-48 object-contain"
            />

            <div>
              <p className="font-bold underline mb-2">
                What Included:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 list-disc pl-5">
                <li>Unlimited Features</li>
                <li>Multi-Branch Support</li>
                <li>Sales & Invoicing</li>
                <li>Barcode & SKU</li>
                <li>Advanced Reports</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-4 bg-black text-white p-6 rounded-2xl">

            <h1 className="text-xl font-semibold">
              Need Custom Plan?
            </h1>

            <p className="text-gray-300">
              A fully personalized solution for businesses that need deep customization,
              complex workflows with existing systems.
            </p>

            <button className="bg-blue-600 text-white px-5 py-2 w-fit rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CustomerPlan;