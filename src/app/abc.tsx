import React from "react";

const abc = () => {
  const menu = [
    {
      title: "biryani",
      description: "beef",
      price: 500,
    },
    {
      title: "burger",
      description: "beef",
      price: 400,
    },
    {
      title: "malai boti",
      description: "chicken",
      price: 500,
    },
  ];

  return (
    <div className="w-[90%] grid grid-col-3 gap-10">
      {menu.map((item, i) => (
        <div key={i}>
            <p>{}</p>
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default abc;
