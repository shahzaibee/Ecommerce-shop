"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useAppSelector } from "@/app/store/hooks";
import { useDispatch } from "react-redux";
import { addCart, delItem, subCart } from "@/app/store/features/cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => (
          <div key={i} className="flex px-10 py-3">
            {/* Image*/}
            <Image
              src={item.image}
              alt={item.title}
              title={item.title}
              width={80}
              height={80}
              className="w-[100px] h-[100px]"
            />
            {/* some info */}
            <div className="flex px-5 justify-between items-center w-full">
              <div>
                {/* title */}
                <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                  {item.title}
                </h2>
                {/* size */}
                <p className="mt-2 text-sm text-myBlackpara/80 leading-none line-clamp-1 font-semibold">
                  size:&nbsp;<span>{item.size}</span>
                </p>
                {/* color */}
                <p className="mt-2 text-sm text-myBlackpara/80 leading-none line-clamp-1 font-semibold">
                  color:&nbsp;
                  <span>
                    <button
                      style={{ backgroundColor: item.color }}
                      className="border-2 border-gray-300 rounded-full mr-1 w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none "
                    />
                  </span>
                </p>
                {/* quantity */}
                <div className="flex mt-2 items-center">
                  <Button
                    onClick={() => dispatch(subCart(item))}
                    className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-500"
                  >
                    <FaMinus className="h-2 w-2 group-hover:text-myBlackHead" />
                  </Button>
                  <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackpara/80">
                    {item.qty}
                  </div>
                  <Button
                    onClick={() => dispatch(addCart(item))}
                    className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-500"
                  >
                    <FaPlus className="h-2 w-2 group-hover:text-myBlackHead" />
                  </Button>
                </div>
                {/* price and delete */}
                <div className="lg:hidden flex flex-col gap-2 mt-5">
                  <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                    <span>Price:&nbsp;</span>$
                    {item.discount > 0
                      ? (item.price - (item.price * item.discount) / 100) *
                        item.qty
                      : item.price * item.qty}
                  </h3>
                  <FaTrash
                    onClick={() => dispatch(delItem(item.uuid))}
                    className="text-base font-semibold leading-none text-red-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/*price and delete*/}
            <div className="lg:flex hidden flex-col items-end gap-5">
              <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
                <span>Price:&nbsp;</span>$
                {item.discount > 0
                  ? (item.price - (item.price * item.discount) / 100) * item.qty
                  : item.price * item.qty}
              </h3>
              <FaTrash
                onClick={() => dispatch(delItem(item.uuid))}
                className="text-base font-semibold leading-none text-red-600 cursor-pointer"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default CartCard;
