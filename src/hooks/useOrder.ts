import { useState } from "react";
import type { OrderItemT } from "../types";

export default function useOrder() {

  const [order, setOrder] = useState<OrderItemT[]>([])

  // Add an item to the order
  const addItem = (item: OrderItemT) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    if (itemIndex === -1) {
      setOrder([...order, item])
    } else {
      const newOrder = [...order]
      newOrder[itemIndex].quantity += 1
      setOrder(newOrder)
    }
  }

  // Remove an item from the order
  const removeItem = (item: OrderItemT) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)
    if (itemIndex === -1) {
      return
    } else {
      const newOrder = [...order]
      if (newOrder[itemIndex].quantity === 1) {
        newOrder.splice(itemIndex, 1)
      } else {
        newOrder[itemIndex].quantity -= 1
      }
      setOrder(newOrder)
    }
  }


  return {
    order,
    addItem,
    removeItem,
  }
}

