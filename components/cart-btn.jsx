import { useEffect, useState } from "react";
import Image from "next/image";

function CartBtn({ name, updateCart, amt }) {
  return (
    <>
      {!amt && (
        <div
          className="w-[115px] absolute top-52 left-30 md:top-34 md:left-5 lg:top-37 lg:left-8 text-xs text-rose-900 font-bold rounded-full border-rose-400 border-1 px-3 py-2 bg-white hover:cursor-pointer hover:text-red hover:border-red"
          onClick={() => {
            updateCart(name, 1);
          }}
        >
          <div>
            <Image
              src={"/images/icon-add-to-cart.svg"}
              width={15}
              height={15}
              alt="cart icon"
              className="inline-block mr-2"
            />
            Add to Cart
          </div>
        </div>
      )}
      {amt > 0 && (
        <div className="w-[115px] absolute top-52 left-30 md:top-34 md:left-5 lg:top-37 lg:left-8 text-xs text-rose-900 font-bold rounded-full border-red border-1 px-3 py-2 bg-red hover:cursor-pointer">
          <div className="flex flex-row justify-between text-white">
            <Image
              src={"/images/icon-decrement-quantity.svg"}
              width={10}
              height={10}
              alt="increment-quantity"
              className="w-[15px] h-[15px] p-1 inline-block border-1 border-white rounded-full"
              onClick={() => {
                updateCart(name, amt - 1);
              }}
            />
            {amt}
            <Image
              src={"/images/icon-increment-quantity.svg"}
              width={10}
              height={10}
              alt="increment-quantity"
              className="w-[15px] h-[15px] p-1 inline-block border-1 border-white rounded-full"
              onClick={() => {
                updateCart(name, amt + 1);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CartBtn;
