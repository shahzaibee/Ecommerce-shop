import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="body-font mb-[100px] mt-[100px]">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
            Our Services
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Delivery  */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                src={require("../../public/van icon.svg")}
                alt="Delivery"
                width={100}
                height={100}
                className="w-28 h-20"
              />
            </div>
            <div className="flex-grow">
              <h2 className="group-hover:text-myOrange duration-300 scroll-m-20 text-myBlackHead text-lg font-bold tracking-tight lg:text-xl  mb-3 capitalize">
                Free Delivery
              </h2>
              <p className="text-myBlackpara  group-hover:text-myBlackpara/80  line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
                Free Delivery on order Above $1000
              </p>
            </div>
          </div>
          {/* 24 / 7 services  */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                src={require("../../public/always-hours-service.svg")}
                alt="Delivery"
                width={100}
                height={100}
                className="w-28 h-20"
              />
            </div>
            <div className="flex-grow">
              <h2 className="group-hover:text-myOrange duration-300 scroll-m-20 text-myBlackHead text-lg font-bold tracking-tight lg:text-xl  mb-3 capitalize">
                24/7 Customer Services
              </h2>
              <p className="text-myBlackpara  group-hover:text-myBlackpara/80  line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
                For Queries and Questions Feel free to contact.
              </p>
            </div>
          </div>
          {/* Money back */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                src={require("../../public/moneyback.png")}
                alt="Delivery"
                width={100}
                height={100}
                className="w-28 h-20"
              />
            </div>
            <div className="flex-grow">
              <h2 className="group-hover:text-myOrange duration-300 scroll-m-20 text-myBlackHead text-lg font-bold tracking-tight lg:text-xl  mb-3 capitalize">
                Money Back Guarantee
              </h2>
              <p className="text-myBlackpara  group-hover:text-myBlackpara/80  line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight">
                {/* Free Delivery on order Above $1000 */}
                Get Money Back Gaurantee on Damage Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
