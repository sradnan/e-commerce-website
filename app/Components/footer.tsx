"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import logo2 from "./image/Logo (2).png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300">
      <div className="container mx-auto px-6 md:px-28 py-12">
        
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo + About */}
          <div>
            <Image src={logo2} alt="" />
            <p className="text-sm leading-relaxed mb-6">
              Taskco Digital stands out as one of Bangladesh's premier IT service providers,
              dedicated to empowering businesses through top-notch technology solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
              <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
              <FaInstagram className="hover:text-orange-500 cursor-pointer" />
              <FaXTwitter className="hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Top Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-orange-500 inline-block pb-1">
              Top Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Features</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-orange-500 inline-block pb-1">
              Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Ecommerce Builder</li>
              <li>POS Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 border-b border-orange-500 inline-block pb-1">
              Find Us
            </h3>

            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <FiMapPin className="mt-1 text-orange-500" />
                Level 9, Manama MS Toren, Gulshan Badda Link Road, Dhaka-1212
              </p>

              <p className="flex items-center gap-2">
                <FiPhone className="text-orange-500" />
                +88 01896 263647
              </p>

              <p className="flex items-center gap-2">
                <FiMail className="text-orange-500" />
                sales@tallydesk.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-center md:text-left">
            © Copyright 2025 <span className="text-orange-500">Tally Desk</span>, A Product Of{" "}
            <span className="text-orange-500">Taskco</span> | All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-orange-500 cursor-pointer">
              Terms And Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}