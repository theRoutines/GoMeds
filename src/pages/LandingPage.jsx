import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

function LandingPage() {
  const offers = ["offer1.png", "offer2.png", "offer3.png"];
  const swiperRef = useRef(null);

  return (
    <div className="h-screen m-0 pl-10 pr-10">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-4 w-full">
        <div className="flex items-center ml-20">
          <img className="h-16 w-36" src="Logo.png" alt="Logo" />
        </div>

        <div className="flex space-x-6 font-bold">
          <a href="">Services</a>
          <a href="">Doctors</a>
          <a href="">Health Insights</a>
          <a href="">Offers</a>
        </div>

        <div className="flex space-x-4 mr-20">
          <motion.button
            className="px-4 py-2 bg-primary font-bold text-white rounded"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 10px 20px rgba(145, 47, 86, 0.5)",
              transition: { ease: "easeIn", duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Sign Up
          </motion.button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full h-90 bg-gradient-to-b from-pink-900 via-white to-white">
        <h1 className="roboto text-white text-xl ml-40 p-5">
          What are you looking for?
        </h1>

        <div className="flex flex-wrap justify-center space-x-20 mt-28">
          {[
            { img: "Medicine.png", label: "Medicine" },
            { img: "Doctor.png", label: "Doctor" },
            { img: "Labs.png", label: "Lab Tests" },
            { img: "HealthCare.png", label: "HealthCare" },
            { img: "Blog.png", label: "Health Blog" },
            { img: "Offer.png", label: "Offers" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                border: "2px solid #912f56",
                boxShadow: "0 8px 20px rgba(145, 47, 86, 0.3)",
                transition: { ease: "easeInOut", duration: 0.3 },
              }}
              className="w-40 h-40 font-bold text-center border-2 border-transparent rounded-xl p-4 bg-white cursor-pointer"
            >
              <img src={item.img} alt={item.label} className="mx-auto h-20" />
              <h2 className="mt-4">{item.label}</h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== FULL-WIDTH SLIDER ===== */}
      {/* ===== FULL-WIDTH SLIDER ===== */}
      {/* ===== FULL-WIDTH SLIDER WITH EDGE SHADOWS ===== */}
      <div className="relative w-3/4 mx-auto my-20 p-10">
        {/* Gradient Shadows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-30"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-30"></div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-[300px] rounded-xl overflow-hidden"
        >
          {offers.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Offer ${index + 1}`}
                className="w-full h-[300px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left Arrow */}
        <motion.button
          whileHover={{
            scale: 1.2,
            boxShadow: "0 4px 10px rgba(145, 47, 86, 0.3)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute z-50 left-4 top-1/2 -translate-y-1/2 bg-white text-[#912f56] rounded-full p-3 shadow-md hover:bg-[#912f56] hover:text-white transition"
        >
          <ChevronLeft size={24} />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          whileHover={{
            scale: 1.2,
            boxShadow: "0 4px 10px rgba(145, 47, 86, 0.3)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => swiperRef.current.slideNext()}
          className="absolute z-50 right-4 top-1/2 -translate-y-1/2 bg-white text-[#912f56] rounded-full p-3 shadow-md hover:bg-[#912f56] hover:text-white transition"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>



      <div>
        <div className="">
          <h1 className="font-bold text-2xl ml-15">Lab Tests by Health Concern</h1>
          <div className="flex ml-15 font-semibold mt-3">
            <p>Powered by </p>
            <img src="Logo.png" alt="" className="w-20"/>
          </div>

          <div className="flex space-x-10 ml-15 mt-5">
            <div>
              <img src="Diabetes.png" alt="" className="h-50 w-50"/>
            </div>
            <div>
              <img src="Cardiac.png" alt="" className="h-50 w-50"  />
            </div>
            <div>
              <img src="Bone Health.png" alt="" className="h-50 w-50" />
            </div>
            <div>
              <img src="Blood Pressure.png" alt="" className="h-50 w-50"/>
            </div>
            <div>
              <img src="Skin Health.png" alt="" className="h-50 w-50"/>
            </div>
            <div>
              <img src="Thyroid.png" alt="" className="h-50 w-50"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
