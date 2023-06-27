import Image from "next/image";
import MobilePopUp from "./MobilePopUp";
import Link from "next/link";
import NavCart from "./NavCart";
import { CiSearch } from "react-icons/ci";

export default function Nav() {
  return (
    <>
      <nav className="py-16 lg:px-24 xl:px-32">
        {/* Desktop view */}
        <div className="hidden items-center justify-between tracking-wide lg:flex">
          {/* Dine market logo */}
          <Link href="/">
            <Image
              src="/Logo.webp"
              height={25}
              width={140}
              alt="Dine market logo"
            />
          </Link>
          {/* List of links*/}

          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link href="/female">Female</Link>
            </li>
            <li>
              <Link href="/male">Male</Link>
            </li>
            <li>
              <Link href="/kids">Kids</Link>
            </li>
            <li>
              <Link href="/all-products">All Products</Link>
            </li>
          </ul>

          {/* Search bar */}
          <div className="flex h-6 items-center rounded-md border-2 border-gray-300 px-2">
            <CiSearch />
            <input
              className=" max-w-sm rounded-md bg-white px-2 text-sm"
              type="search"
              name="search"
              placeholder="What you're looking for"
            />
          </div>
          {/* Cart button */}
          <NavCart />
        </div>
        {/* Mobile view */}
        <MobilePopUp />
      </nav>
    </>
  );
}
