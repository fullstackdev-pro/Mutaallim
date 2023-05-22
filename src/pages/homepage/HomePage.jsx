import { Link } from "react-router-dom";
import { AboutUs, Logo, OverlayBottom, WhyUs } from "../../assets";
import { FaChalkboardTeacher, FaBook, FaCertificate } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ImLocation, ImPhone } from "react-icons/im";
import CoursesSection from "./CoursesSection";
import InstructorsSection from "./InstructorsSection";
import SendMessage from "./SendMessage";

function HomePage() {
  return (
    <>
      {/* Section 1 Info */}
      <div className="mx-auto pt-8 text-center bg-[#5552E8]">
        <div className="md:flex md:justify-center md:py-16">
          <div className="flex justify-center ">
            <div className="w-[45%] h-auto md:w-[60%]">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
          <div className="pb-8">
            <p className="text-[#FFFFFF] text-2xl font-semibold pt-6 md:text-5xl">
              Mutaallim
            </p>
            <p className="pt-2 text-[#FFFFFF] text-lg font-medium md:text-2xl md:pt-4">
              Xususiy maktab va zamonaviy kurslar
            </p>
          </div>
        </div>
        <img src={OverlayBottom} alt="overlay top" />
      </div>

      {/* Section 2 Biz haqimizda */}
      <div className="px-6 mt-24 md:flex">
        <div>
          <img src={AboutUs} alt="about" className="mb-8" />
        </div>
        <div className="md:ml-8">
          <Link
            to="/aboutUs"
            className=" cursor-pointer text-2xl text-[#F14D5D] font-semibold border-dashed border-b-2 border-[#F14D5D]"
          >
            Biz haqimizda
          </Link>
          <p></p>
          <p className="pt-4 text-[#6B6A75] md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
      </div>

      {/* Section 3 Nimaga bizni tanlash kerak */}
      <div className="px-6 mt-24 md:flex">
        <div>
          <Link
            to="/aboutUs"
            className="cursor-pointer text-2xl text-[#F14D5D] font-semibold border-dashed border-b-2 border-[#F14D5D]"
          >
            Nima uchun bizni tanlash kerak
          </Link>
          <p className="pt-4 text-[#6B6A75]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <div className="mt-4">
            <div className="flex text-center pt-4">
              <div className="w-[30%] h-[30%] bg-[#2878EB] mt-2 mr-4 rounded-sm">
                <FaChalkboardTeacher className="text-[3rem] m-5 text-white" />
              </div>
              <div>
                <p className="text-2xl text-[#120F2D] font-semibold text-left">
                  {"Tajribali o'qituvchilar"}
                </p>
                <p className="text-md text-[#6B6A75] text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis tempora architecto, provident numquam quibusdam
                  corrupti quaerat itaque sunt inventore, perspiciatis maiores
                  facere ipsa voluptatum consequuntur at. Rerum iure inventore
                  temporibus?
                </p>
              </div>
            </div>
            <div className="flex text-center pt-4">
              <div className="w-[30%] h-[30%] bg-[#cc4277] mt-2 mr-4 rounded-sm">
                <FaCertificate className="text-[3rem] m-5 text-white" />
              </div>
              <div>
                <p className="text-2xl text-[#120F2D] font-semibold text-left">
                  {"Maxsus sertifikatlar"}
                </p>
                <p className="text-md text-[#6B6A75] text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis tempora architecto, provident numquam quibusdam
                  corrupti quaerat itaque sunt inventore, perspiciatis maiores
                  facere ipsa voluptatum consequuntur at. Rerum iure inventore
                  temporibus?
                </p>
              </div>
            </div>
            <div className="flex text-center pt-4">
              <div className="w-[30%] h-[30%] bg-[#eeeb55] mt-2 mr-4 rounded-sm">
                <FaBook className="text-[3rem] m-5 text-white" />
              </div>
              <div>
                <p className="text-2xl text-[#120F2D] font-semibold text-left">
                  {"Sifatli darslar"}
                </p>
                <p className="text-md text-[#6B6A75] text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis tempora architecto, provident numquam quibusdam
                  corrupti quaerat itaque sunt inventore, perspiciatis maiores
                  facere ipsa voluptatum consequuntur at. Rerum iure inventore
                  temporibus?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12">
          <img src={WhyUs} alt="nega biz" />
        </div>
      </div>

      {/* Section 4 Kurslar */}
      <CoursesSection />

      {/* Section 5 Ustozlar */}
      <InstructorsSection />

      <div className="md:flex md:w-[80%] md:mx-auto md:pb-16">
        {/* Section 6 Location Phone Email */}
        <div className="mx-6 mt-24 bg-[#ECF4FF] px-6 md:w-[40%]">
          <div className="py-4">
            <div className="flex text-center pt-4">
              <div className="w-[30%] h-[30%] bg-[#2878EB] mt-2 mr-4 rounded-sm">
                <ImLocation className="text-[3rem] m-5 mx-auto text-white" />
              </div>
              <div className="pt-6">
                <p className="text-2xl text-[#120F2D] font-semibold text-left">
                  {"Manzilimiz"}
                </p>
                <p className="text-md text-[#6B6A75] text-left">Manzil nomi</p>
              </div>
            </div>
            <div className="flex text-center pt-8">
              <div className="w-[30%] h-[30%] bg-[#cc4277] mt-2 mr-4 rounded-sm">
                <ImPhone className="text-[3rem] m-5 mx-auto text-white" />
              </div>
              <div className="pt-6">
                <p className="text-2xl text-[#120F2D] font-semibold text-left">
                  {"Telefon raqamimiz"}
                </p>
                <p className="text-md text-[#6B6A75] text-left">+9989999999</p>
              </div>
            </div>
            <div className="flex text-center pt-8">
              <div className="w-[30%] h-[30%] bg-[#eeeb55] mt-2 mr-4 rounded-sm">
                <FiMail className="text-[3rem] m-5 mx-auto text-white" />
              </div>
              <div className="pt-6">
                <p className="text-2xl text-[#120F2D] font-semibold text-left">
                  {"Emailimiz"}
                </p>
                <p className="text-md text-[#6B6A75] text-left">
                  example@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7 Message */}
        <SendMessage />
      </div>
    </>
  );
}

export default HomePage;
