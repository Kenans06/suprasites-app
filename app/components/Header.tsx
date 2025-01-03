import React from "react";
import Logo from "../logowbg.png";
import LogoWithText from "../logowtext.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-10 flex bg-black">
      <Image
        className="block h-auto xl:hidden max-w-16"
        src={Logo}
        alt="Supra Sites logo"
        quality={100}
        placeholder="blur"
      ></Image>
      <Image
        className="hidden h-auto xl:block max-w-52"
        src={LogoWithText}
        alt="Supra Sites logo"
        quality={100}
        placeholder="blur"
      ></Image>
      <div className="ml-4 pt-4">
        <Link
          className="transition m-5 text-slate-300 hover:text-supra-orange md:text-lg xl:text-xl"
          href="/"
        >
          Homepage
        </Link>
        <Link
          className="transition m-5 text-slate-300 hover:text-supra-orange md:text-lg xl:text-xl"
          href="/over"
        >
          Over Supra
        </Link>
        <Link
          className="transition m-5 text-slate-300 hover:text-supra-orange md:text-lg xl:text-xl"
          href="/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className="transition m-5 text-slate-300 hover:text-supra-orange md:text-lg xl:text-xl"
          href="/prijzen"
        >
          Prijzen
        </Link>
        <Link
          className="transition m-5 text-slate-300 hover:text-supra-orange md:text-lg xl:text-xl"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
