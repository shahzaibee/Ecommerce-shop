import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="mb-[100px] mt-[100px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className=" text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Categories start here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/tops"}>
            <Image
              src={require("../../public/F8.avif")}
              alt="tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125 h-[365px] object-cover lg:object-bottom object-top"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Tops</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Tops</h1>
            </div>
          </Link>
        </div>
        {/* Category 2 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/pants"}>
            <Image
              src={require("../../public/G2.avif")}
              alt="pants"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125 h-[365px] object-cover lg:object-bottom object-top"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">pants</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">pants</h1>
            </div>
          </Link>
        </div>
        {/* Category 3 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/accessories"}>
            <Image
              src={require("../../public/accesories2.avif")}
              alt="Accesories"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125 h-[365px] object-cover object-bottom"
            />
            <div className="hidden lg:block  absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Accesories</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Accesories</h1>
            </div>
          </Link>
        </div>
        {/* Category 4 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes"}>
            <Image
              src={require("../../public/shoes2.avif")}
              alt="shoes"
              width={350}
              height={350}
              className=" rounded-xl duration-500 group-hover:scale-125 h-[365px] object-cover object-bottom"
            />
            <div className="hidden lg:block  absolute -bottom-24 duration-500 group-hover:bottom-0 scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
