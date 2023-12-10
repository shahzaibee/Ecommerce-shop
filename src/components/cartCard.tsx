import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartCard = ({
  src,
  title,
  size,
  price,
}: {
  src: string;
  title: string;
  size: string;
  price: number;
}) => {
  return (
    <div className="flex p-10 ">
      {/* Image*/}
      <Image
        src={src}
        alt="ladies dress"
        title={title}
        width={80}
        height={80}
        className="w-[100px] h-[100px]"
      />
      {/* some info */}
      <div className="flex px-5 justify-between items-center w-full">
        <div>
          {/* title */}
          <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
            {title}
          </h2>
          {/* size */}
          <p className="mt-2 text-sm text-myBlackpara/80 leading-none line-clamp-1 font-semibold">
            size:&nbsp;<span>{size}</span>
          </p>
          {/* quantity */}
          <div className="flex mt-2 items-center">
            <Button className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-500">
              <FaMinus className="h-2 w-2 group-hover:text-myBlackHead" />
            </Button>
            <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackpara/80">
              1
            </div>
            <Button className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-500">
              <FaPlus className="h-2 w-2 group-hover:text-myBlackHead" />
            </Button>
          </div>
          {/* price and delete */}
          <div className="lg:hidden flex flex-col gap-2 mt-5">
            <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
              <span>Price:&nbsp;</span>&#36;{price}
            </h3>
            <FaTrash className="text-base font-semibold leading-none text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>
      {/*price and delete*/}
      <div className="lg:flex hidden flex-col items-end gap-5">
        <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
          <span>Price:&nbsp;</span>&#36;{price}
        </h3>
        <FaTrash className="text-base font-semibold leading-none text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default CartCard;
