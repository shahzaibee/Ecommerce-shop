"use client";
import SlugComponent from "@/components/slugComponent";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useAppSelector } from "../../store/hooks";
import AddTocartToast from "@/components/addTocartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
const product = useAppSelector((state) => state.product);
const slug = product.filter((val) => val.slug === params.slug);

  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image[0],
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    category: slug[0].category,
    size: slug[0].size[0],
    color: slug[0].color[0],
    qty: slug[0].qty,
  });

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <SlugComponent image={slug[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-8 lg:py-6 mt-24 lg:mt-0 mx-auto">
            {/* category */}
            <h2 className=" text-gray-500 tracking-widest scroll-m-20 text-2xl font-semibold uppercase ">
              {slug[0].category}
            </h2>
            {/* title/heading */}
            <h1 className="scroll-m-20 mt-2 text-base font-semibold tracking-tight ">
              {slug[0].title}
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
              {slug[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              <div className="flex ">
                {/* colours */}
                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  {slug[0].color.map((item, i) => (
                    <button
                      onClick={() => setCartItem({ ...cartItem, color: item })}
                      key={i}
                      style={{ backgroundColor: item }}
                      className="border-2 border-gray-300 rounded-full mr-1 w-6 h-6 focus:outline-none active:border-black focus:border-black "
                    />
                  ))}
                </span>
              </div>
              {/* Sizes */}
              <div className="flex items-center">
                <span className="mr-3 scroll-m-20 text-base  text-myBlackHead font-semibold tracking-tight">
                  Size
                </span>
                <div className="form-control lg:w-full w-[99px] max-w-[200px]">
                  <select
                    onChange={(e) =>
                      setCartItem({ ...cartItem, size: e.target.value })
                    }
                    className="select select-bordered"
                  >
                    <option>Select size</option>
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* Quantity */}
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base  text-myBlackHead font-semibold tracking-tight">
                Quantity
              </span>
              <Button
                onClick={() =>
                  setCartItem({
                    ...cartItem,
                    qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                  })
                }
                className=" w-fit h-fit  group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
              >
                <FaMinus className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {cartItem.qty}
              </div>
              {/*Button */}
              <Button
                onClick={() =>
                  setCartItem({ ...cartItem, qty: ++cartItem.qty })
                }
                className=" w-fit h-fit  group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
              >
                <FaPlus className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>
            {/* divider */}
            <div className="divider"></div>
            <div className="flex mt-5 items-center justify-between gap-4">
              {/* price */}
              <div>
                <span
                  className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ${
                    cartItem.discount > 0 &&
                    "line-through decoration-2 decoration-myOrange/70"
                  } `}
                >
                  ${cartItem.price * cartItem.qty}
                </span>
                {/* discounted value */}
                {cartItem.discount > 0 && (
                  <span className="scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ml-3">
                    $
                    {(cartItem.price -
                      (cartItem.price * cartItem.discount) / 100) *
                      cartItem.qty}
                  </span>
                )}
              </div>
              {/* Add to cart */}
              {/* <Button
                onClick={() => dispatch(addToCart(cartItem))}
                className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
              >
                <FaShoppingCart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button> */}
              <AddTocartToast cartItem={cartItem} />
            </div>
            {/* Buy now */}
            <Button className="group w-full mt-4 bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
              <FaHeart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
