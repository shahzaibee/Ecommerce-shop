import React from "react";

const Promotion = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Promotion start here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* First child here */}
        <div className="hero h-[25rem] promo-1">
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mt-40 lg:mt-12 scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">
                Get upto <span className="text-myOrange">60% </span> off
              </h1>
              <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
                Flash Sale, get upto 60% off on the Season Variant.
              </p>
            </div>
          </div>
        </div>
        {/*  Second child here */}
        <div className="hero h-[25rem] promo-2">
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mt-30 lg:mt-12 scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">
                Get upto <span className="text-myOrange">30% </span> off
              </h1>
              <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
                Flash Sale, get upto 30% off on the New Jewelry Arrival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
