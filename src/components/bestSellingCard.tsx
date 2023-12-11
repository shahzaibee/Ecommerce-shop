import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";

const BestSellingCard = ({
  src,
  alt,
  title,
  descripton,
  price,
  category,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  descripton: string;
  price: number;
  category: string;
  slug: string;
}) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-2xl border-2 border-slate-200 rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
        {/*  image div*/}
        <div className="block h-[23rem] rounded overflow-hidden">
          <Image
            src={src}
            alt="Error to load image"
            width={400}
            height={400}
            className="h-[350px] object-cover object-top"
          />
        </div>
        {/* typography div */}
        <div className="-mt-4">
          <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold line-clamp-1 tracking-tight transition-colors first:mt-0 text-myBlackHead">
            {title}
          </h2>
          <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackpara line-clamp-1">
            {descripton}
          </p>
          <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1">
            ${price}
          </p>
        </div>
        {/* Button div */}
        <div>
          <Button className="group mt-4 bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2">
            <FaShoppingCart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
          <Button className="group mt-4 bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
            <FaHeart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
            Buy now
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default BestSellingCard;
