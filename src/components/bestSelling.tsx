import Image from "next/image";
import React from "react";
import BestSellingCard from "./bestSellingCard";
const BestSelling = () => {
  // import { useAppSelector } from "@/app/store/hooks";
  // const BestSelling = () => {
  //   const product = useAppSelector((state) => state.product);
  //   const bestSell = product.slice(0, 3);

  const bestSell = [
    {
      src: "/p1.png",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
      category: "tops",
      slug: "black-shirt",
      discount: 0,
    },
    {
      src: "/p11.png",
      alt: "Brown t.shirt",
      title: "Brown Shirt",
      description: "Best Quality t-shirt for men",
      price: 250,
      category: "tops",
      slug: "brown-shirt",
      discount: 10,
    },
    {
      src: "/shoes5.avif",
      alt: "Best shoes",
      title: "Brown Shoes",
      description: "Best Quality shoes for men",
      price: 500,
      category: "tops",
      slug: "brown-shoes",
      discount: 0,
    },
  ];

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
            src={items.src}
            alt={items.alt}
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
