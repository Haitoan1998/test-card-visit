"use client";
import CardComponents from "@/components/CardComponents";
import { getDocById } from "@/services";
import { motion } from "motion/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [card, setCard] = useState<any>(null);
  const { cardId } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const data = await getDocById("cardVisit", cardId as string);
        console.log(data);
        setCard(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCard();
  }, []);
  return (
    <div className="flex justify-center gap-5 flex-col items-center min-h-screen p-8 w-[500px] md:w-[500px] 2xl:w-[600px] aspect-[336/192] mx-auto">
      <CardComponents {...card} id={card?.template} imageFront={`/card-item/item${card?.template}/Front.png`} imageBack={`/card-item/item${card?.template}/Back.png`} />
      <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }} onClick={() => router.push("/list-card")} className="transition-all duration-300 cursor-pointer flex justify-center gap-4 items-center py-2 px-4 md:px-4 text-black font-medium rounded-xl bg-[#0089ff]">
        <motion.div className="font-bold text-sm md:text-lg text-white whitespace-nowrap">Danh sách</motion.div>
      </motion.button>
    </div>
  );
};

export default Page;
