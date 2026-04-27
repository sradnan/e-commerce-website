"use client";

import React, { useState } from "react";
import logo from "../image/Navbar Item Inventory.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 md:px-28 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/">
          <Image src={logo} alt="logo" className="h-8 w-auto" /></Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link href="/home">Home</Link>
            <Link href="/feature">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-700">Log in</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              Start For Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
            <Link href="/home" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/feature" onClick={() => setOpen(false)}>Features</Link>
            <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <hr />

            <button className="text-left">Log in</button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg w-fit">
              Start For Free
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;