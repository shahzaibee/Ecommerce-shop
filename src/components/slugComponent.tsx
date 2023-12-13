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
        className="h-[400px] object-cover object-top shadow overflow-hidden shadow-slate-400 border-1 "
      />
      <div className="flex items-center justify-evenly mx-auto mt-7 object-cover rounded-md">
        {Array.isArray(image) &&
          image.map((item: string, i: any) => (
            <div key={i} className="cursor-pointer w-20 h-10">
              <Image
                src={item}
                width={100}
                height={100}
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
