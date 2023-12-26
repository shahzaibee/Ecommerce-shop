"use client";
import React from "react";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const BestSelling = () => {
  const bestSell = useAppSelector((state) => state.product.slice(11, 14));

  return (
    <div className="mb-[100px] mt-[100px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Best selling product here  */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            descripton={items.description}
            title={items.title}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
