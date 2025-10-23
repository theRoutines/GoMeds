import { motion } from "framer-motion";
import image from "../assets/GoMeds.png";

export default function Login() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row font-['Poppins_extralight'] bg-secondary">
      <div className="bg-secondary w-full md:w-1/2 h-4/9 md:h-full p-2">
        <img
          src={image}
          alt="GoMeds"
          className="object-center rounded-xl w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-secondary/10 p-6"
      >
        <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-100 shadow-md rounded-3xl p-10 hover:shadow-lg hover:bg-white/80 transition-all">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-[#912f56]">
              Welcome Back
            </h2>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#912f56] focus:bg-white transition-all"
              />

              <button
                type="submit"
                className="mt-4 bg-[#912f56] text-white py-3 rounded-xl font-medium tracking-wide hover:bg-[#7d284b] transition-all duration-200 hover:shadow-md cursor-pointer"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-gray-600 text-sm">
              Don’t have an account?{" "}
              <a href="/signup" className="text-[#912f56] font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
