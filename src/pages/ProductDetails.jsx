import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ProductDetails() {
  const product = {
    name: "Paracetamol 650mg Tablet",
    price: 49,
    description:
      "Paracetamol 650mg is used for fever and mild to moderate pain relief such as headache, muscle pain, or common cold.",
    dosage: "Take 1 tablet every 6 hours as directed by your physician.",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/O53086/healthkart-hk-vitals-vitals-multivitamin-women-boosts-energy-stamina-bottle-60-count-2-1727134459.jpg?dim=700x0&dpr=1&q=100",
    rating: 4.7,
    reviews: 128,
  };

  return (
    <div className="min-h-screen bg-secondary flex justify-center items-center font-['Poppins_extralight'] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white w-full max-w-5xl rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden"
      >
        <div className="md:w-1/2 w-full overflow-hidden bg-secondary flex justify-center items-center p-8">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-2xl transform transition duration-500 scale-110 hover:scale-120 w-full h-full "
          />
        </div>

        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < Math.round(product.rating) ? "#facc15" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-5 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-5 bg-[#912f56]/5 p-4 rounded-xl">
              <h3 className="text-[#912f56] font-semibold text-lg">
                Dosage Instructions:
              </h3>
              <p className="text-gray-700 text-sm mt-2">{product.dosage}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl font-semibold text-primary">
              ₹{product.price}
            </h2>

            <button className="mt-5 bg-primary hover:bg-[#7d284b] text-white px-8 py-3 rounded-xl font-medium tracking-wide shadow-md hover:shadow-lg transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
