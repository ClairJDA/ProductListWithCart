import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "@/app/page";
import OrderItem from "./order-item";

function OrderConfirm({ onConfirm, newOrder, total }) {
  const cartCtx = useContext(CartContext);

  return (
    <div className="overscroll-none overflow-scroll w-full h-screen absolute top-0 left-0 z-999 bg-transparent">
      <div className="w-full lg:w-[550px] lg:mx-auto lg:mt-[5%] h-fit min-h-[68%] mt-[60%] p-4 flex flex-col justify-around bg-white rounded-t-4xl">
        <Image
          src={"/images/icon-order-confirmed.svg"}
          alt="confirm"
          width={50}
          height={50}
          className="my-3"
        />
        <h1 className="text-5xl text-roose-900 font-bold">Order Confirmed</h1>
        <p className="my-3 text-rose-300 font-semibold">
          We hope you enjoy your food!
        </p>
        <div className="w-full mx-auto bg-rose-50 rounded-lg">
          {cartCtx.cart?.map((item, index) => (
            <OrderItem key={index} {...item} />
          ))}
          <div className="px-3 py-4 flex flex-row justify-between">
            <p className="inline-block text-lg text-rose-500">Order Total</p>
            <p className="inline-block text-3xl text-rose-900 font-bold">
              $ {total}
            </p>
          </div>
        </div>
        <button
          className="w-[90%] bottom-0 mx-auto mt-3 py-3 bg-red text-white rounded-full"
          onClick={() => {
            onConfirm(0);
            newOrder([]);
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderConfirm;
