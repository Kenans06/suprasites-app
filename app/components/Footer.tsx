import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="p-10 flex bg-black">
      <div>
        <Link
          href="https://wa.me/31611092871"
          target="_blank"
          className="transition m-2 inline-block text-slate-300 hover:text-supra-orange md:text-lg xl:text-2xl"
        >
          <FaWhatsapp />
        </Link>
        <Link
          href="mailto:kenan.simsek06@gmail.com"
          className="transition m-2 inline-block text-slate-300 hover:text-supra-orange md:text-lg xl:text-2xl"
        >
          <FaEnvelope />
        </Link>
      </div>
    </footer>
  );
}
