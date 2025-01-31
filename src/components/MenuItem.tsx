import type { MenuItemT } from '../types';

interface MenuItemProps {
  item: MenuItemT;
}

export default function MenuItem( { item } : MenuItemProps ) {
  return (
    <button
      className="border-2 border-teal-400 p-3 w-full flex justify-between hover:bg-teal-200 hover:text-white"
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price} €</p>
    </button>
  )
}
