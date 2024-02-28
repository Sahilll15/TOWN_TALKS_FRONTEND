import React, { useState } from "react";
// import Logo from "../assets/Logo.png";
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// import RightArrowIcon from "./../assets/icons/rightArrow.svg";

const variants = {
  expanded: { width: "20%" },
  nonexpanded: { width: "6%" },
};




function Navbar() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const handletra = () => {
    navigate("/transaction");
  }

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-6")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <img src="" className="w-2" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
      >
        <FaArrowLeft />

      </div>
      <div className="logo-div flex space-x-4 items-center">
        <FaArrowLeft />
        <span className={!isExpanded ? "hidden" : "block"}>Profile</span>
      </div>
      <div className="flex flex-col space-y-8 mt-12">
        <div className="nav-links w-full">
          <div className="flex space-x-3 w-full p-2 rounded bg-[#FF8C8C] cursor-pointer text-white">
            <LayoutDashboard />
            <span className={!isExpanded ? "hidden" : "block"}>Dashboard</span>
          </div>
        </div>

       

        <div className="nav-links w-full cursor-pointer" onClick={handletra}>
          <div className="flex space-x-3 w-full p-2 rounded">
            <ArrowLeftRightIcon />
            <span className={!isExpanded ? "hidden" : "block"}>
              Transactions
            </span>
          </div>
        </div>

        
      </div>
    </motion.div>
  );
}

export default Navbar;
