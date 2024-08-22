"use client";
import React from "react";
import SwiperComponent from "../swiper-slider/SwiperSlider";
import { clients } from "@/utils/data";
import { SwiperSlide } from "swiper/react";
import ClientCard from "../cards/ClientCard";
import { Box } from "@mui/joy";
import SectionTitle from "../section-title/SectionTitle";
import { Autoplay } from "swiper/modules";

function HomeClients() {
  return (
    <Box sx={{ bgcolor: "background.level1", py: 2 }}>
      <SectionTitle title="Our Clients" textAlign={"center"} my={4} />
      <SwiperComponent
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={4}
        spaceBetween={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          568: {
            slidesPerView: 2.1,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {clients.map((item) => (
          <SwiperSlide key={item.id}>
            <ClientCard item={item} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </Box>
  );
}

export default HomeClients;
