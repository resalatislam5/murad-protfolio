"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMail } from "react-icons/cg";
import { PiListBold } from "react-icons/pi";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";

function Header() {
  const [header, setHeader] = useState(false);
  const [showH, setShowH] = useState(false)
  const scrollHeader = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  },[]);

  const items = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/services",
      text: "Services",
    },
    {
      to: "/protfolio",
      text: "Protfolio",
    },
    {
      to: "/blog",
      text: "Blog",
    },
    {
      to: "/contact",
      text: "Contact",
    },
  ];

  return (
    <>
      {/* sidebar start */}
      <div id="mySidenav" className={`sidenav ${showH ? "w-full" : "w-0"}`}>
        <button className="closebtn absolute top-2 right-5 text-4xl text-white" onClick={() =>setShowH(!showH)}>
          &times;
        </button>
        <div className="flex flex-col gap-5">
          {items.map((e, i) => (
            <Link key={i} href={e.to}>
              {e.text}
            </Link>
          ))}
        </div>
      </div>
      {/* sidebar end */}
      <header>
        <nav className="">
          {/* top header start */}
          <div className="bg-[#171717]">
            <div className="flex flex-wrap md:flex-none md:justify-between justify-center items-center gap-5 py-5 lg:px-40 text-[#848484] px-5">
              {/* left side start */}
              <div className="flex flex-wrap justify-center font-medium text-xs gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#EE763C]">
                    <CgMail />
                  </span>
                  <a href="mailto:mdmuradmahmudul931@gmail.com">
                    mdmuradmahmudul931@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#EE763C]">
                    <FaLocationDot />
                  </span>
                  <a href="mailto:mdmuradmahmudul931@gmail.com">
                    Gaibandha , Dhaka , Bangladesh
                  </a>
                </div>
              </div>
              {/* left side end */}
              {/* right side start */}
              <div className="flex font-medium text-xs gap-5 text-white">
                <div className="text-[#848484] flex gap-2">
                  <Link href="/">Help /</Link>
                  <Link href="/">Support /</Link>
                  <Link href="/">Contact</Link>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61553522605086"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                  <a href="https://x.com/muradmahmud123?s=20" target="_blank">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/mahmudulhasanmurad12?igsh=dTl2NHphc2tseGN1"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              {/* right side end */}
            </div>
          </div>
          {/* top header end */}
          {/* main header start */}
          <div className="">
            <div className="mx-auto">
              <div
                className={` ${
                  header
                    ? "bg-[#171717] fixed top-0 transition  duration-1000"
                    : "bg-transparent fixed "
                } ${
                  showH && "hidden"
                }  flex justify-between items-center lg:px-40 md:px-20 px-5 w-full py-10 text-white font-bold z-20 shadow-2xl`}
              >
                <div className="">Logo</div>
                <div className="md:flex gap-5 hidden">
                  {items.map((e, i) => (
                    <Link key={i} href={e.to}>
                      {e.text}
                    </Link>
                  ))}
                </div>
                <div className="text-sm md:flex hidden">
                  <Link
                    className="bg-black text-white hover:bg-[#ee763c] font-bold px-5 py-3"
                    href={"/contact"}
                  >
                    GET A QUOTE
                  </Link>
                </div>
                <button onClick={() => setShowH(!showH)} className=" md:hidden">
                  <PiListBold className="text-xl" />
                </button>
              </div>
            </div>
          </div>
          {/* main header end */}
        </nav>
      </header>
    </>
  );
}

export default Header;
