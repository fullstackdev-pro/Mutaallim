import { Link } from "react-router-dom";
import { Logo, OverlayTop } from "../assets";
import { useState } from "react";
import { FiMail, FiChevronRight } from "react-icons/fi";
import { ImLocation, ImPhone } from "react-icons/im";

function Footer() {
  const [form, setForm] = useState({
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <img src={OverlayTop} alt="Footer top" className="bg-[#120F2D] mt-8" />
      <div className="bg-[#120F2D] px-6 pb-8">
        {/* Logo */}
        <div className="pt-[6rem] text-white">
          <Link to="/" className="flex justify-start items-center">
            <div className="w-12 h-12">
              <img src={Logo} alt="mutallim logo" />
            </div>
            <p className="inline-block pl-4 text-3xl font-bold">Mutaallim</p>
          </Link>
          <p className="text-[#6B6A75] text-[1.1rem] pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id
            nemo nobis atque, officia eveniet animi optio aut placeat a. Sed
            voluptate officiis deserunt iste aperiam temporibus et mollitia
            dolorum.
          </p>
        </div>

        {/* Form email uchun */}
        <div className="pt-12">
          <p className="text-2xl font-bold text-white">
            Emailingizni qoldiring
          </p>
          <form onSubmit={handleSubmit} className="flex pt-4">
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email"
              className="w-[70%] py-4 pl-8 rounded-l"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-white bg-[#2878EB] w-[30%] py-4 rounded-r cursor-pointer font-semibold"
            >
              {"Jo'natish"}
            </button>
          </form>
        </div>

        {/* Aloqaga chiqish */}
        <div className="pt-12 text-white">
          <p className="text-2xl font-bold text-white">
            Biz bilan aloqaga chiqing
          </p>
          <p className="flex pt-4 text-[1.2rem] text-[#6B6A75]">
            <ImLocation className="mt-1 text-[1.3rem] mr-4 text-[#6B6A75]" />{" "}
            Manzil
          </p>
          <p className="flex pt-4 text-[#6B6A75]">
            <ImPhone className="mt-1 text-[1.3rem] mr-4 text-[#6B6A75]" />{" "}
            +999999999
          </p>
          <p className="flex pt-4 text-[#6B6A75]">
            <FiMail className="mt-1 text-[1.3rem] mr-4 text-[#6B6A75]" />{" "}
            example@gmail.com
          </p>
        </div>

        {/* Kurslar */}
        <div className="pt-12 text-white">
          <Link to="" className="text-2xl font-bold text-white">
            Bizning kurslar
          </Link>
          <Link to="" className="flex pt-4 text-[1.2rem] text-[#6B6A75]">
            <FiChevronRight className="mt-1 text-[1.3rem] mr-4" /> Onatili va
            Adabiyot
          </Link>
          <Link to="" className="flex pt-2 text-[#6B6A75]">
            <FiChevronRight className="mt-1 text-[1.3rem] mr-4" /> Matematika
          </Link>
          <Link to="" className="flex pt-2 text-[#6B6A75]">
            <FiChevronRight className="mt-1 text-[1.3rem] mr-4" /> Fizika
          </Link>
          <Link to="" className="flex pt-2 text-[#6B6A75]">
            <FiChevronRight className="mt-1 text-[1.3rem] mr-4" /> Ingliz tili
          </Link>
        </div>

        <hr className="mt-16" />
        <div className="pt-4 text-center">
          <p className="text-[1.2rem] text-[#6B6A75]">
            Copyright ©{" "}
            <Link to="" className="text-[1.2rem] text-white">
              Mutaallim
            </Link>{" "}
            . All Rights Reserved.
          </p>
          <p className="text-[1.2rem] text-[#6B6A75]">
            <Link to="" className="text-[1.2rem] text-white cursor-pointer">
              Imomov Ismoil
            </Link>{" "}
            tomonidan tayyorlandi
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
