import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

function LandingPage() {
  const offers = ["offer1.png", "offer2.png", "offer3.png"];

  const labTests = [
    {
      id: 1,
      title: "Healthy 2025 Full Body Checkup",
      desc: "Diagnostic tool for screening and monitoring of your health",
      oldPrice: "₹3599",
      newPrice: "₹1449",
      discount: "60% OFF",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      bg: "bg-pink-50",
    },
    {
      id: 2,
      title: "Diabetes Care",
      desc: "Specially designed package to cover the preventive care aspects for diabetics",
      oldPrice: "₹1399",
      newPrice: "₹799",
      discount: "43% OFF",
      img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
      bg: "bg-rose-50",
    },
    {
      id: 3,
      title: "Basic Health Checkup",
      desc: "Assesses health of 47 essential body parameters",
      oldPrice: "₹2249",
      newPrice: "₹1049",
      discount: "53% OFF",
      img: "https://cdn-icons-png.flaticon.com/512/3774/3774297.png",
      bg: "bg-pink-50",
    },
    {
      id: 4,
      title: "Aarogyam Full Body Checkup with Vitamins",
      desc: "Comprehensive test covering vitamin levels and essential parameters",
      oldPrice: "₹4599",
      newPrice: "₹2499",
      discount: "46% OFF",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140040.png",
      bg: "bg-rose-50",
    },
  ];
  const swiperRef = useRef(null);

  return (
    <div className="h-screen m-0 pl-10 pr-10">
      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-4 w-full">
        <div className="flex items-center ml-20">
          <img className="h-16 w-36" src="Logo.png" alt="Logo" />
        </div>

        <div className="flex space-x-6 font-bold">
          <a href="#services" className="hover:text-[#912f56]">
            Services
          </a>
          <a href="#doctors" className="hover:text-[#912f56]">
            Doctors
          </a>
          <a href="#health-insights" className="hover:text-[#912f56]">
            Health Insights
          </a>
          <a href="#offers" className="hover:text-[#912f56]">
            Offers
          </a>
        </div>

        <div className="flex space-x-4 mr-20">
          <motion.button
            className="px-4 py-2 bg-[#912f56] font-bold text-white rounded"
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
          <h1 className="font-bold text-2xl ml-16">
            Lab Tests by Health Concern
          </h1>
          <div className="flex ml-16 font-semibold mt-3">
            <p>Powered by </p>
            <img src="Logo.png" alt="" className="w-20" />
          </div>

          <div className="flex space-x-10 ml-16 mt-5">
            <div>
              <img src="Diabetes.png" alt="" className="h-50 w-50" />
            </div>
            <div>
              <img src="Cardiac.png" alt="" className="h-50 w-50" />
            </div>
            <div>
              <img src="Bone Health.png" alt="" className="h-50 w-50" />
            </div>
            <div>
              <img src="Blood Pressure.png" alt="" className="h-50 w-50" />
            </div>
            <div>
              <img src="Skin Health.png" alt="" className="h-50 w-50" />
            </div>
            <div>
              <img src="Thyroid.png" alt="" className="h-50 w-50" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm border border-blue-100 w-full mx-auto mt-20">
        <div className="flex items-center gap-6 mb-6 md:mb-0 ml-20">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
              alt="Prescription"
              className="w-16 h-16"
            />
          </div>
          <div className="ml-7">
            <h2 className="text-lg font-bold text-gray-800">
              Order with Prescription
            </h2>
            <p className="text-gray-600 mb-3">
              Upload prescription and we will deliver your medicines
            </p>
            <button className="flex items-center gap-2 bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800 transition-all mt-5">
              <Upload size={18} /> Upload
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-gray-800 font-bold mb-3">How does this work?</h3>
          <ol className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                1
              </span>
              Upload a photo of your prescription
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                2
              </span>
              Add delivery address and place the order
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                3
              </span>
              We will call you to confirm the medicines
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 font-semibold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                4
              </span>
              Now, sit back! Your medicines will get delivered at your doorstep
            </li>
          </ol>
        </div>
      </div>

      <div className="w-full mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Frequently Booked Lab Tests
          </h2>
          <button className="text-[#912f56] font-semibold hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {labTests.map((test) => (
            <div
              key={test.id}
              className={`${test.bg} relative rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <span className="absolute top-4 left-4 bg-[#912f56] text-white text-xs font-semibold px-3 py-1 rounded">
                {test.discount}
              </span>

              <div className="mt-10 mb-4">
                <h3 className="text-lg font-bold text-gray-800 leading-snug">
                  {test.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 font-semibold">
                  {test.desc}
                </p>
              </div>

              <div className="mt-auto">
                <p className="text-gray-500 line-through text-sm">
                  {test.oldPrice}
                </p>
                <p className="text-xl font-bold text-[#912f56]">
                  {test.newPrice}
                </p>
              </div>

              <div className="absolute bottom-2 right-2">
                <img
                  src={test.img}
                  alt={test.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BRAND COLLABORATIONS ===== */}
      <section className="w-full bg-[#fdf3f7] py-16 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#912f56] mb-10">
            Our Trusted Brand Collaborations
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center px-8">
            {[
              {
                
                logo: "Cipla.png",
              },
              {
                
                logo: "SunPharma.png",
              },
              {
                
                logo: "DrReddy.png",
              },
              {
                
                logo: "Pfizer.png",
              },
              {
                
                logo: "Zydus.png",
              },
              {
                
                logo: "Abbott.png",
              },
            ].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(1.2)",
                  transition: { duration: 0.3 },
                }}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={brand.logo}
                  
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
