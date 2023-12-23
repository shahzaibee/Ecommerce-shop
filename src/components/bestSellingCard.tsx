import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";
import BestSellingCardAddToCart from "./bestSellingCardAddToCart";

const BestSellingCard = ({
  src,
  alt,
  title,
  descripton,
  price,
  category,
  slug,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  descripton: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}) => {
  return (
    <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-2xl  border-2 border-myWhite rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
        {/*  image div*/}
        <div className="block h-[23rem] rounded overflow-hidden">
          <Image
            src={src}
            alt="Error to load image"
            width={400}
            height={400}
            priority={true}
            className="h-[350px] object-cover object-top"
          />
        </div>
        {/* typography div */}
        <div className="-mt-1 space-y-5 ">
          <h2 className="scroll-m-20 border-b text-lg font-semibold line-clamp-1 tracking-tight transition-colors first:mt-0 text-myBlackHead">
            {title}
          </h2>
          <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackpara line-clamp-1">
            {descripton}
          </p>
          {/* pricing */}
          <div className="flex justify-between items-center">
            <p
              className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1 ${
                discount > 0 &&
                "line-through decoration-2 decoration-myOrange/70"
              }`}
            >
              ${price}
            </p>
            {/* discounted value */}
            {discount > 0 && (
              <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1">
                ${price - (price * discount) / 100}
              </p>
            )}
          </div>
        </div>
        {/* Button div */}
        <div className="absolute bottom-2 right-2">
          <BestSellingCardAddToCart slug={slug} />
        </div>
        <div>
          <Button className="group mt-4 bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
            <FaHeart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
            Buy now
          </Button>
          {discount > 0 && (
            <div className="p-2 text-center uppercase rounded-tl-xl myDiscount rounded-bl-xl scroll-m-20 text-xs font-semibold tracking-tight text-myWhite bg-myOrange absolute top-0 left-2 w-[87px]">
              {`${discount}% off`}{" "}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default BestSellingCard;
