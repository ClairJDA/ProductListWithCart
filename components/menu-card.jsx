import React, { useContext } from "react";
import { CartContext } from "@/app/page";

import Image from "next/image";
import CartBtn from "./cart-btn";

function MenuCard({ name, category, price, image }) {
  const ctx = useContext(CartContext);
  let cartItem = ctx.cart.find((item) => item.name === name);

  function updateCart(name, amount) {
    let order = ctx.cart.find((item) => item.name === name);
    if (!order) {
      order = { name, price, amount: amount };
    } else {
      order = { name: order.name, price: order.price, amount: amount };
    }

    let other = ctx.cart.filter((item) => item.name !== name).concat([order]);
    ctx.setCart(other);
    console.log(ctx.cart);
  }

  return (
    <div className="relative inline-block m-3">
      <div className="rounded-lg overflow-hidden">
        <Image
          width={350}
          height={200}
          src={image.mobile}
          alt={name}
          className="md:hidden"
        />
        <Image
          width={155}
          height={155}
          src={image.tablet}
          alt={name}
          className="hidden md:inline-block lg:hidden"
        />
        <Image
          width={175}
          height={175}
          src={image.desktop}
          alt={name}
          className="hidden lg:inline"
        />
      </div>
      <CartBtn
        name={name}
        updateCart={updateCart}
        amt={cartItem?.amount ?? 0}
      />
      <div className="inline-block mt-6 font-semibold">
        <p className="text-xs text-rose-300">{category}</p>
        <p className="text-sm text-rose-900">{name}</p>
        <p className="text-sm text-red">${price}</p>
      </div>
    </div>
  );
}

export default MenuCard;
