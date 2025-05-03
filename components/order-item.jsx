import Image from "next/image";
import data from "@/data.json";
function OrderItem({amount, price, name, image}) {
  let subtotal = parseFloat(price)*parseInt(amount);
  let cartData = data.find(item=> item.name === name);
  
  return (
    <div className="my-3 px-3 pb-3 flex flex-row justify-around items-center border-b-1 border-b-rose-100">
      <Image
        src={cartData.image.thumbnail}
        alt="remove"
        width={55}
        height={55}
        className="w-[60px] h-[60px] rounded-lg"
      />
      <div className="w-[200px] pl-3">
        <p className="text-rose-900 font-bold">{name}</p>
        <p className="inline-block text-red font-bold">{amount}x</p>
        <p className="inline-block ml-2 text-rose-400">@${price}</p>
      </div>
      <p className="inline-block ml-2 text-rose-500 font-bold">${parseFloat(subtotal)}</p>
    </div>
  );
}

export default OrderItem;
