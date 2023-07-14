import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Container */}
      <div className="flex flex-col justify-around gap-12 p-8 lg:flex-row lg:p-32">
        {/* Box 1 */}
        <div className="flex flex-col gap-8">
          <Image
            src="/Logo.webp"
            height={20}
            width={140}
            alt="Dine market logo"
          />
          <p className="max-w-xs text-textGrey">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div></div>
          <div className="flex items-center gap-6 ">
            {/* Twitter icon */}
            <div className="rounded-md bg-gray-100 p-3">
              <FaTwitter size={20} />
            </div>
            {/* Facebook icon */}
            <div className="rounded-md bg-gray-100 p-3">
              <FaFacebookF size={20} />
            </div>
            {/* Instagram icon */}
            <div className="rounded-md bg-gray-100 p-3">
              <AiOutlineInstagram size={20} />
            </div>
            {/* LinkedIn icon */}
            <div className="rounded-md bg-gray-100 p-3">
              <FaLinkedinIn size={20} />
            </div>
          </div>
        </div>
        {/* Box 2 */}
        <div className="flex flex-col gap-4 text-textGrey">
          <div className="font-bold">Company</div>
          <div>About</div>
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
          <div>How it Works</div>
          <div>Contact Us</div>
        </div>
        {/* Box 3 */}
        <div className="flex flex-col gap-4 text-textGrey">
          <div className="font-bold">Support</div>
          <div>Support Carrer</div>
          <div>24h Service</div>
          <div>Quick Chat</div>
        </div>
        {/* Box 4 */}
        <div className="flex flex-col gap-4 text-textGrey">
          <div className="font-bold">Contact</div>
          <div>Whatsapp</div>
          <div>Support 24h</div>
        </div>
      </div>
      <div className=" flex flex-col justify-around gap-5 border-t-[1px] border-black px-8 py-4 text-textGrey lg:flex-row lg:items-center">
        <div>Copyright © 2023 Dine Market</div>
        <div className=" flex flex-col justify-center gap-1">
          <div>Design & Code by ❤️</div>
          <div className="flex  gap-2 text-center font-semibold text-textBlack">
            <Link href={"https://github.com/sajid-munawar"}>
              <div>Sajid Munawar</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
