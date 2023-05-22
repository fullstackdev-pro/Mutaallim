import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
import { Fanlar } from "../../assets";
import { FaChalkboardTeacher, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function CoursesSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-24">
      <div className="px-6 text-center">
        <Link
          to="/aboutUs"
          className="cursor-pointer text-2xl text-[#F14D5D] font-semibold border-dashed border-b-2 border-[#F14D5D]"
        >
          Bizning Kurslarimiz
        </Link>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={window.innerWidth > 991 ? 3 : 1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mt-8 md:mx-8"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={Fanlar} alt="image" className="h-[80vh] md:h-[70vh]" />
            <div className="absolute top-[21.5rem] text-white text-center w-full md:top-[22.5rem]">
              <p className="text-[1.8rem] font-semibold px-6">
                Ona tili va Adabiyot
              </p>
              <div className="flex justify-between mt-3 border-t-2 px-6 py-2 text-[1.1rem]">
                <div className="flex">
                  <FaChalkboardTeacher className="mt-1 text-white" />
                  <p className="ml-4">Ustozi ismi</p>
                </div>
                <div className="flex ">
                  <FaStar className="mt-1 text-white" />
                  <p className="ml-2">
                    4.5 <span className="text-[0.9rem]">(250)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Fanlar} alt="image" className="h-[80vh] md:h-[70vh]" />
            <div className="absolute top-[21.5rem] text-white text-center w-full md:top-[22.5rem]">
              <p className="text-[1.8rem] font-semibold px-6">Matematika</p>
              <div className="flex justify-between mt-3 border-t-2 px-6 py-2 text-[1.1rem]">
                <div className="flex">
                  <FaChalkboardTeacher className="mt-1 text-white" />
                  <p className="ml-4">Ustozi ismi</p>
                </div>
                <div className="flex">
                  <FaStar className="mt-1 text-white" />
                  <p className="ml-2">
                    4.5 <span className="text-[0.9rem]">(250)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Fanlar} alt="image" className="h-[80vh] md:h-[70vh]" />
            <div className="absolute top-[21.5rem] text-white text-center w-full md:top-[22.5rem]">
              <p className="text-[1.8rem] font-semibold px-6">Fizika</p>
              <div className="flex justify-between mt-3 border-t-2 px-6 py-2 text-[1.1rem]">
                <div className="flex">
                  <FaChalkboardTeacher className="mt-1 text-white" />
                  <p className="ml-4">Ustozi ismi</p>
                </div>
                <div className="flex">
                  <FaStar className="mt-1 text-white" />
                  <p className="ml-2">
                    4.5 <span className="text-[0.9rem]">(250)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Fanlar} alt="image" className="h-[80vh] md:h-[70vh]" />
            <div className="absolute top-[21.5rem] text-white text-center w-full md:top-[22.5rem]">
              <p className="text-[1.8rem] font-semibold px-6">Ingliz tili</p>
              <div className="flex justify-between mt-3 border-t-2 px-6 py-2 text-[1.1rem]">
                <div className="flex">
                  <FaChalkboardTeacher className="mt-1 text-white" />
                  <p className="ml-4">Ustozi ismi</p>
                </div>
                <div className="flex">
                  <FaStar className="mt-1 text-white" />
                  <p className="ml-2">
                    4.5 <span className="text-[0.9rem]">(250)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-16" onSubmit={handleSubmit}>
        <h1 className="text-[#120F2D] text-2xl font-semibold">
          Kurslarimizga qiziqdingizmi
        </h1>
        <form
          action=""
          className="text-center pb-12 mx-6 md:w-[40%] md:mx-auto"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ismingizni kiriting"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-[1px] rounded mt-8 bg-[#ECF4FF] border-[#ECF4FF] md:w-[45%] mr-8"
            />
            <br className="md:hidden" />
            <input
              type="email"
              name="email"
              placeholder="Emailingizni kiriting"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border-[1px] rounded mt-8 bg-[#ECF4FF] border-[#ECF4FF] md:w-[45%]"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Telefon raqamingizni kiriting"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border-[1px] rounded mt-8 bg-[#ECF4FF] border-[#ECF4FF] md:w-[45%] mr-8"
            />
            <br className="md:hidden" />
            <button
              type="submit"
              className="w-full px-4 py-2 border-[1px] rounded mt-8 bg-[#2878EB] border-[#2878EB] text-[1.1rem] text-white font-semibold md:w-[45%]"
            >
              {"Jo'natish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoursesSection;
