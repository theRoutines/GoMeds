import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
export default function AddNewProduct() {
  const [medicine, setMedicine] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    manufacturer: "",
    dosage: "",
    image: null,
  });

  const add = ()=>{
    toast.success('Medicine added successfully!',{
        duration:5000,
        position:'top-right',
        style: {
            border: '1px solid #912f56',
            padding: '16px',
            color: '#912f56',
            fontFamily: 'poppins',
          },
        iconTheme: {
          primary: '#912f56',
          secondary: '#fff',
        }
    });
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setMedicine({ ...medicine, image: files[0] });
    } else {
      setMedicine({ ...medicine, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Medicine Added:", medicine);
    alert(`${medicine.name} added successfully to GoMeds!`);
  };

  return (
    <div className="min-h-screen font-['Poppins_extralight'] flex items-center justify-center bg-gradient-to-br from-[#eaf2ef] to-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg rounded-3xl w-full max-w-lg p-10"
      >
        <div className="flex justify-center items-center mb-4">
          <PlusCircle className="text-[#912f56] w-7 h-7 mr-2" />
          <h2 className="text-2xl font-semibold text-[#912f56] tracking-tight">
            Add New Medicine
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Medicine Name</label>
            <input
              type="text"
              name="name"
              value={medicine.name}
              onChange={handleChange}
              required
              placeholder="e.g. Paracetamol 500mg"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 focus:ring-2 focus:ring-[#912f56] focus:bg-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={medicine.description}
              onChange={handleChange}
              placeholder="Short description or usage info..."
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 focus:ring-2 focus:ring-[#912f56] focus:bg-white outline-none transition-all"
              rows="3"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1 font-medium">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={medicine.price}
                onChange={handleChange}
                required
                placeholder="e.g. 59"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 focus:ring-2 focus:ring-[#912f56] focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1 font-medium">Category</label>
              <select
                name="category"
                value={medicine.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 focus:ring-2 focus:ring-[#912f56] focus:bg-white outline-none transition-all"
              >
                <option value="">Select</option>
                <option value="Tablet">Tablet</option>
                <option value="Syrup">Syrup</option>
                <option value="Injection">Injection</option>
                <option value="Supplement">Supplement</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Manufacturer</label>
            <input
              type="text"
              name="manufacturer"
              value={medicine.manufacturer}
              onChange={handleChange}
              placeholder="e.g. Cipla, Sun Pharma"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 focus:ring-2 focus:ring-[#912f56] focus:bg-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Dosage</label>
            <input
              type="text"
              name="dosage"
              value={medicine.dosage}
              onChange={handleChange}
              placeholder="e.g. 1 tablet twice a day"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 focus:ring-2 focus:ring-[#912f56] focus:bg-white outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Medicine Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 cursor-pointer focus:ring-2 focus:ring-[#912f56] outline-none"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full cursor-pointer bg-[#912f56] text-white py-3 rounded-xl font-semibold tracking-wide hover:bg-[#7d284b] transition-all duration-200 hover:shadow-md"
          >
            Add Medicine
          </motion.button>
        </form>
          <button onClick={() => add()}>Add</button>
      </motion.div>
    </div>
  );
}
