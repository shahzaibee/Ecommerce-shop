import SlugComponent from "@/components/slugComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaHeart, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";

const Slug = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden mb-[100px] mt-[50px]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <SlugComponent />
          <div className="lg:w-1/2 w-full lg:pl-8 lg:py-6 mt-24 lg:mt-0 mx-auto">
            {/* category */}
            <h2 className=" text-gray-500 tracking-widest scroll-m-20 text-2xl font-semibold ">
              Women Tops
            </h2>
            {/* title/heading */}
            <h1 className="scroll-m-20 mt-2 text-base font-semibold tracking-tight ">
              Black Printed Tee
            </h1>
            {/* ratings */}
            {/* md */}
            <div className="rating rating-md mt-2">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-myOrange "
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>
            {/* description */}
            <p className="leading-relaxed scroll-m-20 text-base font-normal tracking-tight mt-1 text-myBlackpara">
              Best Quality t-shirt for women Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus voluptatibus corrupti
              aliquam eligendi eius fugit beatae impedit nemo, tempora non nihil
              alias unde, doloremque debitis consectetur. Id delectus labore
              possimus vero odit eum enim distinctio.
            </p>
            <div className="flex mt-6 items-center mb-5">
              <div className="flex ">
                {/* colours */}
                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  Color
                </span>
                <button className="border-2 border-gray-300 rounded-full mr-1 bg-white w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                <button className="border-2 border-gray-300 rounded-full mr-1 bg-red-500 w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                <button className="border-2 border-gray-300 rounded-full mr-1 bg-blue-500 w-6 h-6 focus:outline-none active:border-black focus:border-black " />
                <button className="border-2 border-gray-300 rounded-full mr-1 bg-black w-6 h-6 focus:outline-none active:border-black focus:border-black " />
              </div>
              {/* Sizes */}
              <div className="flex items-center">
                <span className="mr-3 scroll-m-20 text-base  text-myBlackHead font-semibold tracking-tight">
                  Size
                </span>
                <div className="form-control lg:w-full w-[99px] max-w-[200px]">
                  <select className="select select-bordered">
                    <option disabled selected>
                      Select size
                    </option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Quantity */}
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base  text-myBlackHead font-semibold tracking-tight">
                Quantity
              </span>
              <Button className=" w-fit h-fit  group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                <FaMinus className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                1
              </div>
              {/*Button */}
              <Button className=" w-fit h-fit  group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                <FaPlus className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>
            {/* divider */}
            <div className="divider"></div>

            <div className="flex mt-5 items-center justify-between gap-4">
              {/* price */}
              <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                $58.00
              </span>
              {/* Add to cart */}
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                <FaShoppingCart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button>
            </div>
            {/* Buy now */}
            <Button className="group w-full mt-4 bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
              <FaHeart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slug;
