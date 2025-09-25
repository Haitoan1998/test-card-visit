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

const CardTwo = (props: Card) => {
  const names = props.name ? props.name.trim().split(" ") : [];
  const firstName = names[0] || "Your Name"; // Họ đầu
  const lastName = names.length > 1 ? names[names.length - 1] : ""; // Tên cuối
  return (
    <motion.div key={props.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative flex flex-col items-center justify-center gap-5">
      <div className="relative">
        <Image src={props.imageFront} alt="Card Front" preview={false} />
        <div className="absolute top-0 left-10 lg:left-5 2xl:left-10 text-black h-full flex flex-col justify-start gap-4 w-50 lg:w-35 xl:w-50">
          <div className="mt-10 lg:mt-5 2xl:mt-10">
            <div className="text-[30px] lg:text-[15px] xl:text-[20px] 2xl:text-[30px] font-bold text-[#EE8A47] flex gap-1">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="line-clamp-1">
                {firstName}
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="line-clamp-1">
                {lastName}
              </motion.span>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="font-semibold text-base  lg:text-[12px] xl:text-[14px] 2xl:text-base">
              <p className="break-words">{props.job || "Job Title"}</p>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-5 lg:right-2 xl:right-5 text-black h-full flex flex-col justify-around gap-4 w-45 lg:w-25 xl:w-35 2xl:w-45">
          <div className="flex flex-col justify-center items-center w-full">
            <motion.img initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} src={"/logo.png"} alt="Card Front" className="lg:!w-[40%] 2xl:!w-[50%]" />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }} className="text-sm xl:text-xl font-bold text-white flex gap-2 text-center w-full">
              <p className="line-clamp-1 w-full text-base lg:text-[9px] xl:text-[14px] 2xl:text-base">{props.company || "Company Name"}</p>
            </motion.div>
          </div>
          <div>
            <ul className="text-white text-right flex flex-col gap-2  items-end">
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center gap-2">
                <span className="text-nowrap font-light text-base lg:text-[9px] xl:text-[14px] 2xl:text-base">{props.phone || "Phone Number"}</span>
                <FontAwesomeIcon icon={faPhone} className="text-base lg:text-[7px] xl:text-[14px] 2xl:text-base w-7 h-6 text-[#EE8A47]" />
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center gap-2">
                <span className="text-nowrap font-light text-base lg:text-[9px] xl:text-[14px] 2xl:text-base">{props.email || "Email Address"}</span>

                <FontAwesomeIcon icon={faEnvelope} className="text-base lg:text-[7px] xl:text-[14px] 2xl:text-base w-7 h-6 text-[#EE8A47]" />
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex items-center gap-2">
                <span className="text-nowrap font-light text-base lg:text-[9px] xl:text-[14px] 2xl:text-base">{props.website || "Website"}</span>

                <FontAwesomeIcon icon={faAddressCard} className="text-base lg:text-[7px] xl:text-[14px] 2xl:text-base w-7 h-6 text-[#EE8A47]" />
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image src={props.imageBack} alt="Card Back" className="rounded-xl shadow-lg" preview={false} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-black h-full flex flex-col justify-around gap-4">
          <div className="flex flex-col items-center w-100">
            <motion.img initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }} src={"/logo.png"} alt="Card Front" className="!w-20 lg:!w-10 xl:!w-20" />
            <div className="w-full text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }} className="text-xl font-bold text-black flex gap-2 text-center justify-center">
                <p className="line-clamp-1 text-xl lg:text-[10px] xl:text-[15px] 2xl:text-xl">{props.company || "Company Name"}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.6 }} className="text-sm text-center text-black">
                <p className="break-words text-sm lg:text-[10px] xl:text-[12px] 2xl:text-sm">{props.job || "Job Title"}</p>
              </motion.div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.6 }} className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-white text-center">
            <div className="font-light text-nowrap  text-sm lg:text-[10px] xl:text-[12px] 2xl:text-sm">{props.website || "Website"}</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardTwo;
