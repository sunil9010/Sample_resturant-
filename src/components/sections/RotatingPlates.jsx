import React from "react";
import { motion } from "framer-motion";

const RotatingPlates = () => {
  return (
    <div className="relative w-full flex items-center justify-center h-[60vh] sm:h-[70vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      
      {/* Plate 1 - Upper Left */}
      <motion.img
        src="/images/dishPlate_1.png"
        alt="Dish Plate"
        className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain absolute left-[10%] top-[25%]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />

      {/* Plate 2 - Lower Right */}
      <motion.img
        src="/images/food_1.png"
        alt="Dish Plate"
        className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain absolute right-[10%] bottom-[20%]"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />

      {/* Plate 3 - Lower Left */}
      <motion.img
        src="/images/food_2.png"
        alt="Dish Plate"
        className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain absolute left-[25%] bottom-[10%]"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
      />

      {/* Plate 4 - Upper Right */}
      <motion.img
        src="/images/food_with_forks.png"
        alt="Dish Plate"
        className="w-28 sm:w-36 md:w-44 lg:w-52 object-contain absolute right-[25%] top-[15%]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
      />
    </div>
  );
};

export default RotatingPlates;
