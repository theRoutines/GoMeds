import React, { useState } from "react";
import image from "../assets/GoMeds.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="w-full h-screen flex flex-col md:flex-row font-['Poppins'] bg-secondary">
      <div className="bg-secondary w-full md:w-1/2 h-4/9 md:h-full p-2">
        <img
          src={image}
          alt="GoMeds"
          className="object-top-left rounded-xl md:object-center w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-secondary/10 p-6 relative"
      >
        {/* <div className="hidden md:block absolute top-10 left-10">
          <h2 className="text-[3vw] font-semibold text-[#912f56]/90 tracking-tight">
            Sign In to GoMeds
          </h2>
        </div> */}

        <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-100 shadow-md rounded-3xl p-10 transition-all duration-300 hover:shadow-lg hover:bg-white/80">
          <AnimatePresence mode="wait">
            <motion.div
              key={isSignup ? "signup" : "login"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-center text-[#912f56] tracking-tight">
                {isSignup ? "Create Account" : "Welcome Back"}
              </h2>

              <form className="flex flex-col gap-4">
                {isSignup && (
                  <>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                    />
                    {/* <input
                      type="text"
                      name="address"
                      placeholder="Delivery Address"
=                      className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                    /> */}
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                    />
                    <select
                      name="gender"
                      className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                />
                {isSignup && (
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all placeholder-gray-400"
                  />
                )}

                <button
                  type="submit"
                  className="mt-4 bg-[#912f56] text-white py-3 rounded-xl font-medium tracking-wide hover:bg-[#7d284b] transition-all duration-200 hover:shadow-md cursor-pointer"
                >
                  {isSignup ? "Sign Up" : "Login"}
                </button>
              </form>

              <p className="mt-6 text-center text-gray-600 text-sm">
                {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
                <span
                  className="text-[#912f56] font-semibold cursor-pointer hover:underline"
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup ? "Login" : "Sign Up"}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
