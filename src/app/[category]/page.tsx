import BestSellingCard from "@/components/bestSellingCard";
import React from "react";

const Category = () => {
  const bestSell = [
    {
      src: "/f2.avif",
      alt: "Black t.shirt",
      title: "Blue Shirt",
      description: "Best Quality t-shirt for women",
      price: 150,
      category: "tops",
      slug: "blue shirt",
    },
    {
      src: "/f5.avif",
      alt: "Brown t.shirt", 
      title: "Gray Shirt",
      description: "Best Quality t-shirt for men",
      price: 250,
      category: "tops",
      slug: "Gray shirt",
    },
    {
      src: "/f17.avif",
      alt: "Best shoes",
      title: "Green shirt",
      description: "Best Quality shoes for men",
      price: 500,
      category: "tops",
      slug: "green shirt",
    },
  ];

  return (
    <div className="mb-[100px] mt-[50px] mx-auto">
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
            category={items.category}
            slug={items.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
