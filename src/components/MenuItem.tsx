import type { MenuItemT, OrderItemT } from '../types';

interface MenuItemProps {
  item: MenuItemT;
  addItem: (item: OrderItemT) => void;
}

export default function MenuItem( { item, addItem } : MenuItemProps ) {
  return (
    <button
      className="border-2 border-teal-400 p-3 w-full flex justify-between hover:bg-teal-200 hover:text-white"
      onClick={() => addItem({ ...item, quantity: 1 })}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price} €</p>
    </button>
  )
}
