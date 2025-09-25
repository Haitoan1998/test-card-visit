"use client";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { cardsTemplate } from "@/constant";
import CardComponents from "@/components/CardComponents";
import { addDocToCollection } from "@/services";

export type FormData = {
  template: number;
  name: string;
  job: string;
  email: string;
  phone: string;
  website: string;
  company: string;
};

const Index = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const selectedTemplateId = watch("template");
  const allValues = watch();
  console.log(allValues);
  const onSubmit = async () => {
    try {
      const newCard = { ...allValues };
      console.log(newCard);
      const saved = await addDocToCollection("cardVisit", newCard);
      console.log("Document written with ID: ", saved);
      router.push("/list-card");
    } catch (error) {
      console.error("Lỗi khi thêm dữ liệu:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center relative h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="relative z-1 flex flex-col items-center justify-center gap-8 w-full h-screen md:h-auto bg-white/5 backdrop-blur-[20px] [--tw-backdrop-blur:blur(15px)] p-4 md:p-6">
            <motion.h3 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-3xl font-bold text-white">
              Tạo Card Visit
            </motion.h3>

            <motion.form onSubmit={handleSubmit(onSubmit)} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="flex flex-col gap-4 w-[90%] lg:w-[30rem] xl:w-[34rem] bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div>
                <label className="block text-white/80 mb-2">Chọn Template</label>
                <select {...register("template", { required: "Vui lòng chọn template" })} className="w-full px-4 py-3 rounded-lg bg-black/30 text-white outline-none focus:ring-2 focus:ring-pink-400" defaultValue="">
                  <option value={1} disabled>
                    -- Chọn một template --
                  </option>
                  {cardsTemplate.map((card) => (
                    <option key={card.id} value={card.id}>
                      {card.name}
                    </option>
                  ))}
                </select>
                {errors.template && <p className="text-pink-400 text-sm">{errors.template.message}</p>}
              </div>
              <input {...register("company", { required: "Vui lòng nhập công ty" })} type="text" placeholder="Công ty" className="px-4 py-3 rounded-lg bg-black/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400" />
              {errors.company && <p className="text-pink-400 text-sm">{errors.company.message}</p>}
              <input {...register("name", { required: "Vui lòng nhập họ tên" })} type="text" placeholder="Họ và tên" className="px-4 py-3 rounded-lg bg-black/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400" />
              {errors.name && <p className="text-pink-400 text-sm">{errors.name.message}</p>}

              <input {...register("job", { required: "Vui lòng nhập chức vụ / nghề nghiệp" })} type="text" placeholder="Chức vụ / Nghề nghiệp" className="px-4 py-3 rounded-lg bg-black/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400" />
              {errors.job && <p className="text-pink-400 text-sm">{errors.job.message}</p>}

              <input {...register("email", { required: "Vui lòng nhập email" })} type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-black/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400" />
              {errors.email && <p className="text-pink-400 text-sm">{errors.email.message}</p>}

              <input {...register("phone", { required: "Vui lòng nhập số điện thoại" })} type="tel" placeholder="Số điện thoại" className="px-4 py-3 rounded-lg bg-black/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400" />
              {errors.phone && <p className="text-pink-400 text-sm">{errors.phone.message}</p>}
              <input {...register("website", { required: "Vui lòng nhập website / LinkedIn / Facebook" })} type="url" placeholder="Website / LinkedIn / Facebook" className="px-4 py-3 rounded-lg bg-black/30 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400" />
              {errors.website && <p className="text-pink-400 text-sm">{errors.website.message}</p>}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="py-3 px-6 font-semibold text-white rounded-xl"
                style={{
                  background: "linear-gradient(39deg, rgb(254, 89, 234), rgb(255, 241, 204))",
                }}
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Tạo Card
              </motion.button>
            </motion.form>
          </div>

          <div className="flex items-center justify-center w-full p-4 md:p-0">
            <div className="w-full md:w-[60%]">
              {cardsTemplate.map((card) => {
                if (card.id === Number(selectedTemplateId)) {
                  return (
                    <div key={card.id}>
                      <CardComponents {...allValues} id={card.id} imageFront={card.imageFront} imageBack={card.imageBack} />;
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
