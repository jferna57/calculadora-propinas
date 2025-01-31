import { formatCurrency } from "../helpers";
import { OrderItemT } from "../types/index";
import OrderTotal from "./OrderTotal";

type OrderContentEnhancedProps = {
  order: OrderItemT[];
  removeItem: (item: OrderItemT) => void;
  incrementQuantity: (item: OrderItemT) => void;
  decrementQuantity: (item: OrderItemT) => void;
  total: number;
};

export default function OrderContentEnhanced({
  order,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  total,
}: OrderContentEnhancedProps) {
  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="false"
    >
      <div className="fixed" aria-hidden="true"></div>

      <div className="">
        <div className="">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {order.length === 0 ? (
                          <p className="text-center">La orden está vacia</p>
                        ) : (
                          order.map((item) => (
                            <li 
                              key={item.id} 
                              className="flex py-6">

                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/512/4813/4813064.png"
                                  alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                  className="size-full object-cover"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">{item.name}</a>
                                    </h3>
                                    <p className="ml-4">
                                      {formatCurrency(item.price)}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <button
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => incrementQuantity(item)}
                                  >
                                    +
                                  </button>
                                  <p className="text-gray-500">
                                    {item.quantity}
                                  </p>
                                  <button
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => decrementQuantity(item)}
                                  >
                                    -
                                  </button>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() => removeItem(item)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <OrderTotal 
                  total={total}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
