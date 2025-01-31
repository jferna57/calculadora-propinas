import { formatCurrency } from "../helpers";
import { OrderItemT } from "../types/index";

type OrderContentProps = {
  order: OrderItemT[];
  removeItem: (item: OrderItemT) => void;
  incrementQuantity: (item: OrderItemT) => void;
  decrementQuantity: (item: OrderItemT) => void;
};

export default function OrderContent({ order, removeItem, incrementQuantity, decrementQuantity }: OrderContentProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">La orden está vacia</p>
        ) : (
          order.map((item) => (
            <div 
              key={item.id}>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - Total:{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
              <div className="flex justify-left space-x-2">
                <button
                  className="bg-red-500 h-8 w-8 text-white px-2 py-1 rounded-full font-black"
                  onClick={() => removeItem(item)}
                >
                  X
                </button>
                <button
                  className="bg-blue-500 h-8 w-8 text-white px-2 py-1 rounded-full font-black"
                  onClick={() => incrementQuantity(item)}
                >
                  +
                </button>
                <button
                  className="bg-blue-500 h-8 w-8 text-white px-2 py-1 rounded-full font-black"
                  onClick={() => decrementQuantity(item)}
                >
                  -
                </button>
            </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
