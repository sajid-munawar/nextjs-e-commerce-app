"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu3Line } from "react-icons/ri";
import { BsCart } from "react-icons/bs";

export default function MobilePopUp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* TopBar */}
      {/* Mobile popup open and close svgs */}
      <div className="lg:hidden">
        <div onClick={handleOpen} className="absolute right-10 top-10 z-20">
          {!open ? (
            <>
              <RiMenu3Line size={25} />
            </>
          ) : (
            <>
              <GrClose size={25} />
            </>
          )}
        </div>
        {/* Dine market logo */}
        <div className="absolute left-10 top-10 z-20 lg:hidden">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src="/Logo.webp"
              height={25}
              width={140}
              alt="Dine market logo"
            />
          </Link>
        </div>
        {open && (
          <ul className="fixed bottom-0 left-0 right-0 top-0 z-10 flex w-full flex-col items-center justify-center gap-4 bg-white text-xl lg:hidden">
            {/* List of links */}
            <li>
              {/* Cart button */}
              <Link onClick={() => setOpen(!open)} href="/cart">
                <button className="relative rounded-full bg-gray-200 p-4">
                  <BsCart size={25} />
                  <span className="absolute right-1 top-0 h-6 w-6 rounded-full bg-red-600 text-white">
                    0
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(!open)} href="/female">
                Female
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(!open)} href="/male">
                Male
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(!open)} href="/kids">
                Kids
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(!open)} href="/all-products">
                All Products
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
