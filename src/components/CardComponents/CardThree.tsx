import { motion } from "motion/react";
import { Image } from "antd";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

interface Card {
  template: number;
  name: string;
  job: string;
  email: string;
  phone: string;
  website: string;
  company: string;
  id: number;
  imageFront: string;
  imageBack: string;
}

const CardThree = (props: Card) => {
  const names = props.name ? props.name.trim().split(" ") : [];
  const firstName = names[0] || "Your Name"; // Họ đầu
  const lastName = names.length > 1 ? names[names.length - 1] : ""; // Tên cuối
  return (
    <motion.div key={props.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative flex flex-col items-center justify-center gap-5">
      <div className="relative">
        <Image src={props.imageFront} alt="Card Front" preview={false} />
        <div className="absolute top-0 left-10 lg:left-5 2xl:left-10 text-black h-full flex flex-col justify-around gap-4">
          <div>
            <div className="text-[30px] lg:text-[15px] xl:text-[20px] 2xl:text-[30px] font-bold text-[#DEC364] flex gap-2">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="line-clamp-1">
                {firstName}
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="line-clamp-1">
                {lastName}
              </motion.span>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="font-semibold text-base  lg:text-[12px] xl:text-[14px] 2xl:text-base text-[#DEC364]">
              {props.job || "Job Title"}
            </motion.div>
          </div>
          <div>
            <ul className="text-[#DEC364] flex flex-col gap-2  items-start">
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-base lg:text-[7px] xl:text-[14px] 2xl:text-base w-7 h-6" />
                <span className="text-nowrap font-light  text-base lg:text-[9px] xl:text-[14px] 2xl:text-base">{props.phone || "Phone Number"}</span>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-base lg:text-[7px] xl:text-[14px] 2xl:text-base w-7 h-6" />
                <span className="text-nowrap font-light  text-base lg:text-[9px] xl:text-[14px] 2xl:text-base">{props.email || "Email Address"}</span>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faAddressCard} className="text-base lg:text-[7px] xl:text-[14px] 2xl:text-base w-7 h-6" />
                <span className="text-nowrap font-light  text-base lg:text-[9px] xl:text-[14px] 2xl:text-base">{props.website || "Website"}</span>
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="absolute top-0 right-10 lg:right-5 xl:right-2 2xl:right-5 text-black h-full flex flex-col justify-around gap-4 w-40 lg:w-30 xl:w-45 2xl:w-45">
          <div className="flex flex-col items-center">
            <motion.img initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} src={"/logo-3.png"} alt="Card Front" className="lg:!w-10 2xl:!w-20" />
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-sm lg:text-sm xl:text-base font-bold text-[#DEC364] gap-2 uppercase flex justify-center">
                {props.company || "Company Name"}
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className="text-xs xl:text-sm text-center text-[#DEC364] font-bold">
                {props.job || "Job Title"}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={props.imageBack} alt="Card Back" className="rounded-xl shadow-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-black h-full flex flex-col justify-around gap-4">
          <div className="flex flex-col items-center">
            <motion.img initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} src={"/logo-3.png"} alt="Card Front" className="lg:!w-10 2xl:!w-20" />
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="text-sm xl:text-xl font-bold text-[#DEC364] flex gap-2 uppercase justify-center">
                {props.company || "Company Name"}
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} className="text-sm xl:text-xl text-center text-[#DEC364] font-bold">
                {props.job || "Job Title"}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardThree;
