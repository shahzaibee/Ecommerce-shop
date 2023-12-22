"use client";
import { addToCart } from "@/app/store/features/cart";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";

interface AddToCartToastProps {
  cartItem: {
    id: number;
    title: string;
    image: any;
    slug: string;
    price: number;
    discount: any;
    category: string;
    size: string;
    color: string;
    qty: number;
  };
}

const AddToCartToast: React.FC<AddToCartToastProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

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
    <>
      <div className="w-fit" onClick={() => dispatch(addToCart(cartItem))}>
        <Button
          onClick={notify}
          className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl"
        >
          <FaShoppingCart className="mr-4 h-4 w-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>
      </div>
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
    </>
  );
};

export default AddToCartToast;
