import React from "react";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[90vh] custom-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-25"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mt-40 lg:mt-0 md:mt-0">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
              Futuristic <span className="text-myOrange">clothes</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
              Upgrade your wardrobe with sleek & stylish Apparels and Top-Notch
              Shoes.
            </p>
            <Button className="text-base outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange">
              <AiFillShopping className="mr-2 h-6 w-6 text-myWhite group-hover:text-myOrange group-hover:animate-bounce" />{" "}
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
