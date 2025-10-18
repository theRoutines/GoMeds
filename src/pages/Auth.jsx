import React, { useState } from "react";
import image from "../assets/GoMeds.png";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row font-['poppins']">
      <div className=" w-full md:w-1/2 h-1/2 md:h-full p-2">
        <img
          src={image}
          alt="GoMeds"
          className="object-top-left rounded-xl md:object-center w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-gray-50 p-6 relative">
      <div className="hidden text-[5vw] top-25 md:block absolute">
            <h2>
                Sign In to GoMeds
            </h2>
        </div>
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm rounded-2xl p-8 transition-all duration-300">
        
          <h2 className="text-3xl font-semibold mb-6 text-center text-primary tracking-tight">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          <form className="flex flex-col gap-4">
            {isSignup && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
            />
            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
              />
            )}
            <button
              type="submit"
              className="mt-2 bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary hover:shadow-md transition-all duration-200"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
            <span
              className="text-primary font-semibold cursor-pointer hover:underline"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
