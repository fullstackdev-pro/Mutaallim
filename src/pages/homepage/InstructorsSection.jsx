import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
import { BookImage } from "../../assets";
import { Link } from "react-router-dom";

function InstructorsSection() {
  return (
    <div className="mt-24">
      <div className="px-6 text-center">
        <Link
          to="/aboutUs"
          className="cursor-pointer text-2xl text-[#F14D5D] font-semibold border-dashed border-b-2 border-[#F14D5D]"
        >
          Ustozlar
        </Link>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mt-8 mx-8"
      >
        <SwiperSlide>
          <div>
            <img src={BookImage} alt="image" className="h-[60vh]" />
            <div className="text-[#120F2D] text-center w-full bg-[#ECF4FF] py-4">
              <p className="text-2xl font-semibold">Ustozi ismi</p>
              <p className="text-lg pt-2">Ustozni kasbi</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={BookImage} alt="image" className="h-[60vh]" />
            <div className="text-[#120F2D] text-center w-full bg-[#ECF4FF] py-4">
              <p className="text-2xl font-semibold">Ustozi ismi</p>
              <p className="text-lg pt-2">Ustozni kasbi</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={BookImage} alt="image" className="h-[60vh]" />
            <div className="text-[#120F2D] text-center w-full bg-[#ECF4FF] py-4">
              <p className="text-2xl font-semibold">Ustozi ismi</p>
              <p className="text-lg pt-2">Ustozni kasbi</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={BookImage} alt="image" className="h-[60vh]" />
            <div className="text-[#120F2D] text-center w-full bg-[#ECF4FF] py-4">
              <p className="text-2xl font-semibold">Ustozi ismi</p>
              <p className="text-lg pt-2">Ustozni kasbi</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default InstructorsSection;
