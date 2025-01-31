import { formatCurrency } from "../helpers";
import { OrderItemT } from "../types/index";

type OrderContentProps = {
  order: OrderItemT[];
  removeItem: (item: OrderItemT) => void;
};

export default function OrderContent({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      <div className="space-y-3 mt-5">
        
        {order.length === 0 && <p className="text-center">La orden está vacia</p>}

        {order.map((item) => (
          <button
            key={item.id}
            className="border-2 border-teal-400 p-3 w-full flex justify-between hover:bg-teal-200 hover:text-white rounded-lg"
            onClick={() => removeItem(item)}
          >
            <p>{item.name}</p>
            <p className="font-black">{item.quantity}</p>
            <p className="font-black">{formatCurrency(item.price * item.quantity)}</p>
          </button>
        ))}

      </div>
    </div>
  );
}
