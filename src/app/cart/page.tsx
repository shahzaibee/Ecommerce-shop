import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Cart = () => {
  return (
    <div className="mb-[100px] mt-[50px] mx-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* items */}
        <div className="col-span-2">
          <CartCard
            src="/F15.avif"
            title="Ladies dress"
            size="L"
            price={1500}
          />
        </div>
        {/* summary */}
        <div className="bg-myBlackHead/5 p-5 rounded-xl">
          {/* heading */}
          <h2 className="scroll-m-20 text-lg font-medium uppercase tracking-tight text-myBlackHead">
            order summary
          </h2>
          {/* divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* pricing */}
          <div className="text-sm font-medium tracking-tight text-myBlackpara">
            {/* product prizes */}
            <div className="flex items-center justify-between capitalize">
              <h2>sub total</h2>
              <h2>$1500</h2>
            </div>
            {/* delivery charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>Delievery charges</h2>
              <h2>TBD</h2>
            </div>
            {/* Service charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>Sales tax</h2>
              <h2>TBD</h2>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* Estimated total */}
            <div className="flex items-center justify-between capitalize font-semibold text-sm tracking-tight text-myBlackHead">
              <h2>ESTIMATED TOTAL</h2>
              <h2>$1500</h2>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* checkout button */}
            <div className="flex items-center justify-center w-full">
              <Button className="bg-myBlackHead hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded">
                proceed to checkout
              </Button>
            </div>
            {/* divider */}
            <div className="divider mt-0 mb-1"></div>
            {/* note */}
            <p className="text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic">
              {` *Delievery charges and the Sales tax will be calculated in the
              checkout Page`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
