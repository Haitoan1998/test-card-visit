"use client";
import React, { useCallback, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { cards } from "@/constant";
import { motion } from "framer-motion";

const Index = () => {
  const router = useRouter();
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const text = "Tạo Card visit của bạn một cách dễ dàng và hiệu quả";
  const letters = text.split("");

  const handleClick = useCallback((cardId: number) => {
    setFlippedCardId((prev) => (prev === cardId ? null : cardId));
  }, []);

  const navigateCreate = () => {
    router.push("/create-card");
  };

  const navigateList = () => {
    router.push("/list-card");
  };

  return (
    <div>
      <div className="flex justify-center relative min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="relative z-1 flex flex-col items-center justify-center gap-8 w-full py-8 bg-white/5 backdrop-blur-[20px] [--tw-backdrop-blur:blur(15px)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {cards.map((card) => (
                <div style={{ perspective: "1000px" }} className="rounded-b-md w-[300px] md:w-[300px] lg:w-[230px] xl:w-[250px] 2xl:w-[400px] aspect-[336/192]  cursor-pointer mx-auto" onClick={() => handleClick(card.id)} key={card.id}>
                  <motion.div
                    style={{
                      transition: "transform 0.7s",
                      transformStyle: "preserve-3d",
                    }}
                    initial={false}
                    animate={{ rotateY: flippedCardId === card.id ? 180 : 360 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <div className="absolute w-full h-full bg-cover bg-center rounded-lg p-4" style={{ backfaceVisibility: "hidden", backgroundImage: `url(${card?.imageFront})` }}></div>
                    <div className="absolute w-full h-full bg-cover bg-center rounded-lg p-4 [transform:rotateY(180deg)]" style={{ backfaceVisibility: "hidden", backgroundImage: `url(${card?.imageBack})` }}></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center w-full py-8">
            <div className="relative z-1 flex flex-col items-center justify-center gap-8 w-full max-w-md px-4 rounded-3xl">
              <a className="!text-white mb-4" href="/phimhay"></a>
              <h2 className="text-center text-[1.8rem] md:text-[2rem] font-bold text-white leading-snug">
                {letters.map((char, i) => (
                  <motion.p key={i} custom={i} initial={{ filter: "blur(10px)", opacity: 0, y: 12 }} animate={{ filter: "blur(0)", opacity: 1, y: 0 }} transition={{ duration: 0.1, delay: 0.03 * i }} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.p>
                ))}
              </h2>
              <div className="flex gap-2">
                
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} onClick={navigateCreate} className="hover:shadow-[0_1px_15px_rgb(254,89,234)] transition-all duration-300 cursor-pointer flex justify-center gap-4 items-center py-4 px-6 md:px-8 text-black font-medium rounded-4xl" style={{ background: "linear-gradient(39deg, rgb(254, 89, 234), rgb(255, 241, 204))" }}>
                  <div className="font-bold text-xl md:text-2xl text-white whitespace-nowrap">Tạo ngay</div>
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm md:w-6 md:h-6 text-white" />
                </motion.button>
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} onClick={navigateList} className="hover:shadow-[0_1px_15px_rgb(254,89,89)] transition-all duration-300 cursor-pointer flex justify-center gap-4 items-center py-4 px-6 md:px-8 text-black font-medium rounded-4xl" style={{ background: "linear-gradient(39deg, rgb(254, 89, 89), rgb(255, 241, 204))" }}>
                  <div className="font-bold text-xl md:text-2xl text-white whitespace-nowrap">Danh sách card</div>
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm md:w-6 md:h-6 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
