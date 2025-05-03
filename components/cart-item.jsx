import { CartContext } from "@/app/page";
import Image from "next/image";
import { useContext } from "react";

function CartItem({name, amount, price, onRemove}) {
  

  const subtotal = parseFloat(price) * parseInt(amount);
  return (
    <div className="m-3 pb-3 flex flex-row justify-between items-center border-b-1 border-b-rose-100">
      <div>
        <p className="text-rose-900 font-bold">{name}</p>
        <p className="inline-block text-red font-bold">{amount}x</p>
        <p className="inline-block ml-2 text-rose-400">@${price}</p>
        <p className="inline-block ml-2 text-rose-500 font-bold">${subtotal}</p>
      </div>
      <Image
        src={"/images/icon-remove-item.svg"}
        alt="remove"
        width={15}
        height={15}
        className="w-[20px] h-[20px] p-1 rounded-full border-1 border-rose-400 hover:cursor-pointer"
        onClick={()=>{onRemove(name)}}
      />
    </div>
  );
}

export default CartItem;
