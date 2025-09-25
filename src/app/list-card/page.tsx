"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllDocs } from "@/services";
import CardComponents from "@/components/CardComponents";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardListPage = () => {
  const router = useRouter();
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: any = await getAllDocs("cardVisit");
        console.log(data);
        setCards(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };
    fetchData();
  }, []);

  const navigateDetail = (id: number) => {
    router.push(`/list-card/${id}`);
  };
  const navigateCreate = () => {
    router.push("/create-card");
  };

  return (
    <div className="relative p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Danh sách Card Visit</h1>

      {cards.length === 0 ? (
        <div className="flex justify-center items-center h-64 flex-col bg-white/5 backdrop-blur-[20px] [--tw-backdrop-blur:blur(15px)]">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }} className="text-2xl font-bold text-white text-center mb-12">
            Chưa có mẫu card visit nào
          </motion.h2>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} onClick={navigateCreate} className="hover:shadow-[0_1px_15px_rgb(254,89,234)] transition-all duration-300 cursor-pointer flex justify-center gap-4 items-center py-4 px-6 md:px-8 text-black font-medium rounded-4xl" style={{ background: "linear-gradient(39deg, rgb(254, 89, 234), rgb(255, 241, 204))" }}>
            <div className="font-bold text-xl md:text-lg text-white whitespace-nowrap">Tạo ngay</div>
            <FontAwesomeIcon icon={faArrowRight} className="text-sm md:w-6 md:h-6 text-white" />
          </motion.button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7 gap-y-16">
          {cards.map((card) => {
            return (
              <div key={card.id} className="flex flex-col items-center">
                <CardComponents {...card} id={card?.template} imageFront={`/card-item/item${card?.template}/Front.png`} imageBack={`/card-item/item${card?.template}/Back.png`} />
                <motion.button onClick={() => navigateDetail(card.id)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="transition-all duration-300 cursor-pointer flex justify-center gap-4 items-center py-2 px-4 md:px-4 text-black font-medium rounded-xl bg-[#0089ff]">
                  <div className="font-bold text-sm md:text-lg text-white whitespace-nowrap">Xem</div>
                </motion.button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardListPage;
