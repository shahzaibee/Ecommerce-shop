"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

const SlugComponent = ({
  image,
}: string | string[] | StaticImageData | any) => {
  const [path, setpath] = useState("");

  return (
    <div className="">
      <Image
        src={path ? path : image[0]}
        alt="ecommerce"
        width={400}
        height={400}
        className="h-[450px] object-cover object-top shadow overflow-hidden shadow-slate-400 border-1 "
      />
      <div className="flex items-center justify-evenly mx-auto mt-5 object-cover rounded-md">
        {image.map((item: string, i: any) => (
          <div key={i} className="cursor-pointer w-10">
            <Image
              src={item}
              width={350}
              height={350}
              className="w-[75px] h-[65px] object-cover"
              alt="abc"
              onClick={() => setpath(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlugComponent;
