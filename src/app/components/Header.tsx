"use client";
import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.png";
import Container from "./Container";
import Search from "../assets/icons/Search";
import Cart from "./Cart";
import Link from "next/link";
import Hamburger from "../assets/icons/hamburger";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className=" bg-gray_bg md:bg-secondary">
      <Container className="flex items-center justify-between">
        <Link href="/" id="logo" onClick={closeMenu}>
          <Image src={Logo} alt="Logo" width={120} height={70} />
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex w-full gap-4 text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
          </ul>
        </nav>
        <div className="text-lg relative hidden md:flex">
          <input
            className="px-2 py-1 pr-12 rounded-3xl"
            placeholder="Search Products"
            type="text"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 ">
            <Search />
          </button>
        </div>
        <div className="hidden md:flex">
          <Cart />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <span className=" text-2xl">X</span> : <Hamburger />}
          </button>
        </div>
      </Container>
      {menuOpen && (
        <Container className="md:hidden bg-secondary">
          <nav>
            <ul className="flex flex-col items-start p-4 gap-4 text-lg">
              <li>
                <div className="mt-2">
                  <div onClick={closeMenu}>
                    <Cart />
                  </div>
                </div>
              </li>
              <li>
                <Link onClick={closeMenu} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} href="/">
                  Shop
                </Link>
              </li>
              <li className="w-full">
                <div className="text-lg relative w-full">
                  <input
                    className="px-2 py-1 pr-12 rounded-3xl w-full"
                    placeholder="Search Products"
                    type="text"
                  />
                  <button
                    onClick={closeMenu}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  >
                    <Search />
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </Container>
      )}
    </header>
  );
};

export default Header;
