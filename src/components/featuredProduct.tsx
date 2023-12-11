"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from "./bestSellingCard";

const FeaturedProduct = () => {
  // my data

  const bestSell = [
    {
      src: "/p2.png",
      alt: "Brown t.shirt",
      title: "Brown Shirt",
      description: "Best Quality t-shirt for women",
      price: 250,
      category: "tops",
      slug: "brown Shirt",
    },
    {
      src: "/p3.png",
      alt: "Sky Blue t.shirt",
      title: "Sky Blue Shirt",
      description: "Best Quality t-shirt for women",
      price: 350,
      category: "tops",
      slug: "sky Blue Shirt",
    },
    {
      src: "/p10.png",
      alt: "Pink overcoat",
      title: "Pink Overcoat",
      description: "Best Quality overcoat for women",
      price: 420,
      category: "tops",
      slug: "pink overcoat",
    },
    {
      src: "/p9.png",
      alt: "Pink shirt",
      title: "Pink Shirt",
      description: "Best Quality t-shirt for women",
      price: 420,
      category: "tops",
      slug: "pink shirt",
    },
    {
      src: "/picture1.webp",
      alt: "White Overcoat",
      title: "White Overcoat",
      description: "Best Quality overcoat for women",
      price: 420,
      category: "tops",
      slug: "white overcoat",
    },
  ];

  // carousel settings
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* carousel */}
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default FeaturedProduct;
