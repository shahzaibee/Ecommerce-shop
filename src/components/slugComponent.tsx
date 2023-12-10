"use client";
import React, { useState } from "react";
import Image from "next/image";

const SlugComponent = () => {
  const [path, setpath] = useState("");
  return (
    <div className="">
      <Image
        src={path ? path : "/p1.png"}
        alt="ecommerce"
        width={400}
        height={400}
        className="h-[400px] object-cover object-top shadow overflow-hidden shadow-slate-400 border-1 "
      />
      <div className="flex items-center justify-evenly mx-auto mt-7 object-cover rounded-md">
        <div className="cursor-pointer w-20 h-10">
          <Image
            src={"/F15.avif"}
            width={100}
            height={100}
            alt="abc"
            onClick={() => setpath(require("../../public/F15.avif"))}
          />
        </div>
        <div className="cursor-pointer w-24 h-10">
          <Image
            src={"/F17.avif"}
            width={100}
            height={100}
            alt="abc"
            onClick={() => setpath(require("../../public/F17.avif"))}
          />
        </div>
        <div className="cursor-pointer w-20 h-10">
          <Image
            src={"/F18.avif"}
            width={100}
            height={100}
            alt="abc"
            onClick={() => setpath(require("../../public/F18.avif"))}
          />
        </div>
      </div>
    </div>
  );
};

export default SlugComponent;
