"use client";
import BestSellingCard from "@/components/bestSellingCard";
import { useAppSelector } from "../store/hooks";
import { StaticImageData } from "next/image";

const Categorypage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.product);

  const bestSell = product.filter((val) => val.category === params.category);

  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize">
          {params.category}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* category page starts here */}
      {/* Best selling product here  */}
      <div className="flex flex-wrap  justify-center gap-5">
        {bestSell.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image}
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

export default Categorypage;
