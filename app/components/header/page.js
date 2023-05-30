import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    
    <header className="md:pt-18 sm:pt-7 pb-5 md:pb-18 sm:pb-7 pt-5 relative z-10">
      <div className="max-w-[1432px] flex items-center px-4 mx-auto">
        <Link href="/" className="flex w-34 mr-8 md:mr-14">
          <img
            className="w-full"
            src="./img/header/header-logo.svg"
            alt="header logo"
          />
        </Link>
        <nav className="mr-auto hidden sm:block">
          <ul className="flex gap-5">
            <li>
              <Link className="text-17" href="/articles">
                Maqolalar
              </Link>
            </li>
            <li>
              <Link className="text-17" href="/asasd">
                Ijtimoiy tarmoqlar
              </Link>
            </li>
          </ul>
        </nav>
        <button className="hidden sm:block px-4">til</button>
        <a
          className="hidden md:inline-block font-bold text-sm leading-5 bg-black text-white rounded-10 hover:bg-white hover:text-black transition-all px-5 py-3 ml-8"
          href="#"
        >
          Xabar qoldirish
        </a>
        <button className="block sm:hidden ml-auto cursor-pointer p-3 rounded-10 bg-white">
          <img src="./img/header/humburger.svg" alt="humburger menu" />
        </button>
      </div>
    </header>
  );
}
