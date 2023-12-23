"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/features/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BestSellingCardAddToCart = ({ slug }: { slug: string }) => {
  // calling products
  const product = useAppSelector((state) => state.product).find(
    (val) => val.slug == slug
  );
  // add to cart
  const dispatch = useDispatch();
  // setting cart items
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image[0],
    slug: product?.slug,
    price: product?.price,
    discount: product?.discount,
    category: product?.category,
    size: product?.size[0],
    color: product?.color[0],
    qty: product?.qty,
  });
  // Toast
  const notify = () =>
    toast.success("Product Added Successfully", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group mt-4 bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2">
            <FaShoppingCart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[16rem]">
          {/* Sizes */}
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
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
                {product?.size.map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          {/* colours */}
          <div className="flex mt-5">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              colors
            </span>
            {product?.color.map((item, i) => (
              <button
                key={i}
                onClick={() => setCartItem({ ...cartItem, color: item })}
                style={{ backgroundColor: item }}
                className="border-2 border-gray-300 rounded-fulmr-1 w-6 h-6 focus:outline-none active:border-black focus:border-black "
              />
            ))}
          </div>
          {/* Add to cart */}
          <div className="w-fit" onClick={notify}>
            <Button
              onClick={() => dispatch(addToCart(cartItem))}
              className="group mt-4 w-full bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2"
            >
              <FaShoppingCart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
              Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default BestSellingCardAddToCart;
