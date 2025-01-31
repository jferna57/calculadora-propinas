import { formatCurrency } from '../helpers';
import type { MenuItemT, OrderItemT } from '../types';

interface MenuItemProps {
  item: MenuItemT;
  addItem: (item: OrderItemT) => void;
}

export default function MenuItem( { item, addItem } : MenuItemProps ) {
  return (
    // Agrega el border redondeado al boton
    <button
      className="border-2 border-teal-400 p-3 w-full flex justify-between hover:bg-teal-200 hover:text-white rounded-lg"
      onClick={() => addItem({ ...item, quantity: 1 })}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  )
}
