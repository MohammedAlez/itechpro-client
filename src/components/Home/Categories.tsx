'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Global/SectionTitle";

type Category = {
  id: number;
  name: string;
  image: { url: string };
  has_subcategories: boolean;
};

const categories: Category[] = [
  {
    id: 1,
    name: "Laptops",
    image: { url: "/images/categories/laptops.jpg" },
    has_subcategories: true,
  },
  {
    id: 2,
    name: "Keyboards",
    image: { url: "/images/categories/keyboards.jpg" },
    has_subcategories: false,
  },
  {
    id: 3,
    name: "Mouses",
    image: { url: "/images/categories/mouses.jpg" },
    has_subcategories: false,
  },
  {
    id: 4,
    name: "PC Items",
    image: { url: "/images/categories/pc-items.jpg" },
    has_subcategories: true,
  },
];

export default function Categories() {
  return (
    <div className="categories my-24s md:my-0 px-3 max-w-[1200px] mx-auto">
      <SectionTitle title="Nos " colored="CATÉGORIES" subTitle="" />
      
      <div className="md:hidden">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            '@1.00': {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            '@1.50': {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
        >
          {categories.map((category) => {
            const redirectLink = category.has_subcategories
              ? `/shop2`
              : `/shop2 `;
            return (
              <SwiperSlide key={category.id}>
                <div className="overflow-hidden rounded-2xl h-[200px]">
                  <Link
                    href={redirectLink}
                    className="relative rounded-3xl overflow-hidden group"
                  >
                    <Image
                      src={category.image.url}
                      alt={category.name}
                      fill
                      className="group-hover:scale-110 transition object-cover"
                    />
                    <div className="bg-black opacity-50 group-hover:opacity-30 absolute top-0 left-0 h-full w-full" />
                    <div className="h-full flex justify-between relative z-10 p-5 md:p-8 items-end">
                      <h2 className="text-customWhite font-bold text-xl md:text-4xl first-letter:capitalize">
                        {category.name}
                      </h2>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="md:grid grid-cols-4 lg:grid-cols-4 hidden gap-4 gap-y-14">
        {categories.map((category) => {
          const redirectLink = category.has_subcategories
            ? `/shop2`
            : `/shop2`;
          return (
            <Link
              key={category.id}
              href={redirectLink}
              className="relative rounded-3xl overflow-hidden h-52 md:h-64 group"
            >
              <Image
                src={category.image.url}
                alt={category.name}
                fill
                className="group-hover:scale-110 transition object-cover"
              />
              <div className="bg-black opacity-50 group-hover:opacity-30 absolute top-0 left-0 h-full w-full" />
              <div className="h-full flex justify-between relative z-10 p-5 md:p-8 items-end">
                <h2 className="text-customWhite font-bold text-xl md:text-4xl first-letter:capitalize">
                  {category.name}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
