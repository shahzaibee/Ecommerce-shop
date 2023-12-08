import BestSellingCard from "@/components/bestSellingCard";
import React from "react";

const Category = () => {
  const bestSell = [
    {
      src: "/f15.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/female2.webp",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/female3.webp",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/female1.webp",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/female5.webp",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/G1.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/f2.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/f3.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/f4.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/f5.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/f7.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
    {
      src: "/f18.avif",
      alt: "Black t.shirt",
      title: "Black Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
    },
  ];

  return (
    <div className="mb-[100px] mt-[100px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize">
          tops
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* category page starts here */}
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
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
