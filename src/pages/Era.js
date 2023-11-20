import React from "react";
import BdayPicker from "../components/BdayPicker"
import { motion } from "framer-motion";

export default function Era() {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.75, ease: "easeOut"}}
     className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold mb-14">SELECT YOUR ERA</h1>
      <BdayPicker></BdayPicker>
    </motion.div>
  );
}
