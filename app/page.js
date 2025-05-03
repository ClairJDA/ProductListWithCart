"use client";
import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  useMemo,
} from "react";

import Cart from "@/components/cart";
import MenuCard from "@/components/menu-card";
import OrderConfirm from "@/components/order-confirm";
import data from "@/data.json";

export const CartContext = createContext();

export default function Home() {
  const menu = data;
  const [confirmOrder, setConfirmOrder] = useState(0);
  const [cart, setCart] = useState([]);
  const cartCtx = useMemo(() => ({ cart, setCart }), [cart]);
  // const cartCtx = {cart, setCart};

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (confirmOrder) {
      scrollToTop();
    }
    setTotal(
      cart?.reduce(
        (total, { price, amount }) =>
          total + parseFloat(price) * parseInt(amount),
        0
      )
    );
  }, [confirmOrder, cart]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <CartContext.Provider value={cartCtx}>
      <div className="w-full h-full md:w-[80%] max-w-[1400px] mx-auto pt-15 pb-5">
        <h1 className="ml-3 text-3xl text-rose-900 font-bold">Desserts</h1>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:max-w-[600px] xl:max-w-[950px] flex flex-col md:flex-row flex-wrap justify-between">
            {menu.map((item) => (
              <MenuCard key={item.name} {...item} {...item.image} />
            ))}
          </div>
          <Cart onConfirm={setConfirmOrder} total={total} />
          {(confirmOrder !== 0 ) && (
            <OrderConfirm onConfirm={setConfirmOrder} newOrder={setCart} total={total} />
          )}
        </div>
      </div>
    </CartContext.Provider>
  );
}
