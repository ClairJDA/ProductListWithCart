import Image from "next/image";
import React, { useContext, useEffect } from "react";
import CartBtn from "./cart-btn";
import CartItem from "./cart-item";
import { CartContext } from "@/app/page";

function Cart({ onConfirm, total }) {
  const ctx = useContext(CartContext);
  useEffect(() => {}, [ctx.cart]);

  function removeOrder(name){
    let update = ctx.cart?.filter(order=>order.name !== name);
    ctx.setCart(update);
  }

  return (
    <div className="lg:h-fit lg:rounded-xl bg-white m-3 p-3">
      <h1 className="m-3 text-red text-2xl font-bold">
        Your Cart ({ctx.cart.length ?? 0})
      </h1>
      {!ctx.cart.length && (
        <div>
          <Image
            src="/images/illustration-empty-cart.svg"
            width={100}
            height={100}
            alt="empty-cart"
            className="mx-auto mt-5"
          />
          <p className="text-rose-400 text-center font-bold">
            Your added items will be appear here
          </p>
        </div>
      )}

      {(ctx.cart?.length > 0 ) && (
        <div>
          {ctx.cart.map((item) => (
            <CartItem key={item.name} {...item} onRemove={removeOrder} />
          ))}

          <div className="m-3 flex flex-row justify-between items-center text-rose-900">
            <p className="inline-block">Order Total</p>
            <p className="inline-block text-2xl font-bold">${total}</p>
          </div>
          <div className="p-3 text-center bg-rose-100 text-rose-900 rounded-lg">
            <Image
              src={"/images/icon-carbon-neutral.svg"}
              alt="carbon neutral"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            <p className="inline-block">
              This is a <span className="font-bold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
            className="w-[90%] p-3 m-3 text-white font-semibold bg-red rounded-full hover:cursor-pointer hover:bg-red-800"
            onClick={() => onConfirm(1)}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
