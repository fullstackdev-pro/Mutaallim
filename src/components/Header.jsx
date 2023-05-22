import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../assets";
import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";

function Header() {
  const [burger, setBurger] = useState(false);

  function handleClose() {
    setBurger(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {/* Logo va Menu */}
      <div className="flex justify-between mx-4 items-center">
        {/* Logo */}
        <Link to="/" className="flex justify-start items-center">
          <div className="w-12 h-12 md:w-20 md:h-20">
            <img src={Logo} alt="mutallim logo" className="w-full h-full" />
          </div>
          <p className="inline-block pl-4 text-2xl font-bold text-[#738390] md:text-4xl">
            Mutaallim
          </p>
        </Link>
        {/* Menu */}
        <div
          onClick={() => setBurger((burger) => (burger = !burger))}
          className="md:hidden"
        >
          {!burger && (
            <RxHamburgerMenu className="text-[2rem] text-[#738390]" />
          )}
          {burger && <SlClose className="text-[2rem] text-[#738390]" />}
        </div>
        <div className="hidden md:flex">
          <Link
            to="/"
            className="text-xl text-[#120F2D] font-medium cursor-pointer " 
            onClick={handleClose}
          >
            Bosh sahifa
          </Link>
          <Link
            to="aboutUs"
            className="text-xl text-[#120F2D] font-medium cursor-pointer pl-4"
            onClick={handleClose}
          >
            Biz haqimizda
          </Link>
          <Link
            to="courses"
            className="text-xl text-[#120F2D] font-medium cursor-pointer pl-4"
            onClick={handleClose}
          >
            Kurslarimiz
          </Link>
          <Link
            to="contact"
            className="text-xl text-[#120F2D] font-medium cursor-pointer pl-4"
            onClick={handleClose}
          >
            {"Bog'lanish"}
          </Link>
          <Link
            to="instructors"
            className="text-xl text-[#120F2D] font-medium cursor-pointer pl-4"
            onClick={handleClose}
          >
            {"O'qituvchilar"}
          </Link>
        </div>
      </div>
      {/* Menu bosilsa ko'ronuvchi qismi */}
      {burger && (
        <div className="pt-4 pl-8">
          <Link
            to="/"
            className="text-xl text-black font-medium cursor-pointer"
            onClick={handleClose}
          >
            Bosh sahifa
          </Link>{" "}
          <br /> <br />
          <Link
            to="aboutUs"
            className="text-xl text-black font-medium cursor-pointer"
            onClick={handleClose}
          >
            Biz haqimizda
          </Link>{" "}
          <br /> <br />
          <Link
            to="courses"
            className="text-xl text-black font-medium cursor-pointer"
            onClick={handleClose}
          >
            Kurslarimiz
          </Link>{" "}
          <br /> <br />
          <Link
            to="contact"
            className="text-xl text-black font-medium cursor-pointer"
            onClick={handleClose}
          >
            {"Bog'lanish"}
          </Link>{" "}
          <br /> <br />
          <Link
            to="instructors"
            className="text-xl text-black font-medium cursor-pointer"
            onClick={handleClose}
          >
            {"O'qituvchilar"}
          </Link>{" "}
          <br />
          <p className="text-xl text-black font-medium my-6">+998994544555</p>
        </div>
      )}
    </div>
  );
}

export default Header;
